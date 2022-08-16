import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Alert, TextInput } from "react-native";
import { useState } from "react";
import { Button } from "react-native-paper";
import { Theme } from "../thems/themes";
import { db } from "../../services/firebase";
import { setDoc, doc, updateDoc } from "firebase/firestore";


export function Order({ route }) {
    const { orderTotal, orderpizzaName, orderPizzaIngredients, orderSize } = route.params
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function create() {
        const now = new Date();
        const nowTimeStamp = now.getTime();
        setDoc(doc(db, 'purchases', 'JRgFlEYcnQ6UY3onMTAa'), {
            address: address,
            email: email,
            firstname: firstName,
            ingredients: orderPizzaIngredients,
            lastname: lastName,
            phone: phone,
            pizzaname: orderpizzaName,
            price: orderTotal,
            size: orderSize,
            timestamp: nowTimeStamp,
        })
    }

    function UpdateDocument (){
        updateDoc(doc,(db,'purchases','JRgFlEYcnQ6UY3onMTAa'),{
            firstName:'Daniel',
            lastName:'Micheal'
        })
        .then(() =>{console.log('Record updated');})
        .catch(error =>{console.log('Error massage',error);})
    }

    return (
        
        <View style={styles.container}>
            <TextInput placeholder='First name' style={styles.search}
                onPress={(fname) => { setFirstName(fname) }}
            />
            <TextInput placeholder='Last name' style={styles.search}
                onPress={(lname) => { setLastName(lname) }}
            />
            <TextInput placeholder='Phone number' style={styles.search}
                onPress={(phone) => { setPhone(phone) }}
            />
            <TextInput placeholder='Email' style={styles.search}
                onPress={(email) => { setEmail(email) }}
            />
            <TextInput placeholder='Address' style={styles.search}
                onPress={(address) => { setAddress(address) }}
            />

            <Button mode="outlined" color="white" style={{ marginTop: 20, padding: 20, backgroundColor: Theme.colors.ui.primary }}
                onPress={create}
            >
                Complete Your Order
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    search: {
        marginVertical: Theme.points[2],
        backgroundColor: 'rgba(128, 128, 128, 0.06)',
        fontSize: Theme.points[3],
        paddingVertical: Theme.points[4] + 5,
        paddingLeft: Theme.points[3],
        borderRadius: 50,
        borderBottomWidth: 1,
        borderBottomColor: Theme.colors.ui.secondary,
    },
})

/*
    Alert.alert(
        'Order Confirmation',
        'We have received your customized pizz order.'
        [{ text: 'Accept', onPress: () => { console.log('Accept') } }, { text: 'Cancel' }]
    )
*/