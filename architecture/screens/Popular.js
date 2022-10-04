import { useState } from "react"; 
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native"
import { Rating } from "@mui/material";
import {Theme} from "../thems/themes"
import { setDoc, doc, updateDoc, addDoc, collection } from 'firebase/firestore';
import { db } from "../../services/firebase";


export function Popular({ route, navigation }) {
    const { pizzaImg, pizzaName, pizzaRating, pizzaPrice } = route.params;

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAddress] = useState('');
    
    function create() {
        const now = new Date();
        let hr = now.getHours();
        let min = now.getMinutes();
        let day = now.getDate();
        let mon = now.getMonth();
        let yr = now.getFullYear();
        let amp = "am";
        if (hr > 12) {
            hr = hr - 12;
            amp = "pm";
        }
        const date = `${day}/${mon}/${yr} ~ ${hr}:${min} ${amp}`;
        console.log(date);

        addDoc(collection(db, 'popular_order'), {
            address: address,
            email: email,
            firstname: firstName,
            lastname: lastName,
            phone: phone,
            pizzaname: pizzaName,
            price: pizzaPrice,
            date: date,
            pizzaImg: pizzaImg,
            status: 'successful',
            color:'green',
        })
            .then(() => {
                Alert.alert(
                    'Order Confirmation',
                    'We have received your customized pizza order.',
                    [{ text: 'Okay, Thanks', onPress: () => { navigation.navigate('Home') } }]
                )
            })
            .catch(error => console.log('Error received', error))
    }
    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Image style={styles.thumbnail} source={{ uri: pizzaImg }} />
                <View style={styles.PizzaDetails}>
                    <Text style={styles.title}>{pizzaName}</Text>

                    <View style={styles.rating}>
                        {/* <FontAwesomeIcon icon={faStar} color='#FF9F45' size={24} style={{ marginRight: 5 }} />
                        <FontAwesomeIcon icon={faStarHalfStroke} color='#FF9F45' size={24} style={{ marginRight: 5 }} /> */}
                        <Rating value={pizzaRating} precision={0.1} readOnly />
                    </View>
                    <Text style={styles.price}> ₦{pizzaPrice}</Text>
                </View>
            </View>

            <View style={styles.delivery}>
                <Text style={styles.heading}>Older {pizzaName}</Text>
                <TextInput readOnly keyboardType="default" autoFocus placeholder="First name" style={styles.input} onChangeText={(fname) => setFirstName(fname)}/>
                <TextInput keyboardType="default" placeholder="Last name" style={styles.input} onChangeText={(lname) => setLastName(lname)} />
                <TextInput keyboardType="email-address" placeholder="Email Address" style={styles.input} onChangeText={(email) => setEmail(email)} />
                <TextInput keyboardType="phone-pad" placeholder="Phone Number" style={styles.input} onChangeText={(phone) => setPhone(phone)}/>
                <TextInput keyboardType="default" placeholder="Delevery Address" style={styles.input} onChangeText={(add) => setAddress(add)}/>
                <TouchableOpacity style={styles.orderNow}  onPress={create}>
                    <Text style={styles.orderNowText}>Order Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    details: {
        flexDirection: 'row',
        backgroundColor: '#D9F8C4',
        padding: 10,
    },
    thumbnail: {
        width: 100,
        height: 100,
        marginRight: 18
    },
    PizzaDetails: {
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        textTransform: 'capitalize'
    },
    rating: {
        flexDirection: 'row'
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
    },
    delivery: {
        marginTop: 20,
    },
    heading: {
        fontSize: 28,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 50,
        padding: 15,
        marginTop: 10,
    },
    orderNow: {
        backgroundColor: '#064635',
        borderRadius: 50,
        padding: 15,
        marginTop: 10,
    },
    orderNowText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    },
})