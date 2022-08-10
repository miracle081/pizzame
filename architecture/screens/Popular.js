import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native"
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
// import { faStar } from "@fortawesome/free-solid-svg-icons"
// import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "@mui/material";
import {Theme} from "../thems/themes"


export function Popular({ route, navigation }) {
    const { pizzaImg, pizzaName, pizzaRating, pizzaPrice } = route.params;

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
                <TextInput keyboardType="default" placeholder="First name" style={styles.input} />
                <TextInput keyboardType="default" placeholder="Last name" style={styles.input} />
                <TextInput keyboardType="email-address" placeholder="Email Address" style={styles.input} />
                <TextInput keyboardType="phone-pad" placeholder="Phone Number" style={styles.input} />
                <TouchableOpacity style={styles.orderNow}>
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