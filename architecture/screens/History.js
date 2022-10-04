import { Text, View, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheckCircle, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useFonts, RozhaOne_400Regular } from "@expo-google-fonts/rozha-one";
import { db } from "../../services/firebase";
import { onSnapshot, collection, doc } from "firebase/firestore";

// const data = {
//     historys: [
//         { id: '1', date: '30/06/2022', pizzaname: 'mozzarella', price: '8,450', status: 'successful', color:'green', thumbnail: 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=600' },
//         { id: '2', date: '10/06/2022', pizzaname: 'mozzarella', price: '8,450', status: 'successful', color:'green', thumbnail: 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=600' },
//         { id: '3', date: '19/05/2022', pizzaname: 'provolone', price: '6,250', status: 'successful', color:'green', thumbnail: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=400' },
//         { id: '4', date: '07/05/2022', pizzaname: 'blue cheese', price: '4,950', status: 'failed', color:'red', thumbnail: 'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?b=1&k=20&m=1192094401&s=612x612&w=0&h=QYf-ma7bef68nFZEYnW_ZVNWX0Z4ccqcACfx2AT7TSI=' },
//         { id: '5', date: '28/04/2022', pizzaname: 'broccoli', price: '3,050', status: 'successful', color:'green', thumbnail: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600' },
//         { id: '6', date: '07/05/2022', pizzaname: 'blue cheese', price: '4,950', status: 'successful', color:'green', thumbnail: 'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?b=1&k=20&m=1192094401&s=612x612&w=0&h=QYf-ma7bef68nFZEYnW_ZVNWX0Z4ccqcACfx2AT7TSI=' },
//         { id: '7', date: '29/05/2022', pizzaname: 'parmesan', price: '7,250', status: 'failed', color:'red', thumbnail: 'https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&w=600' },
//         { id: '8', date: '28/04/2022', pizzaname: 'broccoli', price: '3,050', status: 'successful', color:'green', thumbnail: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600' },
//         { id: '9', date: '19/05/2022', pizzaname: 'provolone', price: '6,250', status: 'successful', color:'green', thumbnail: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=400' },
//         { id: '10', date: '28/04/2022', pizzaname: 'broccoli', price: '3,050', status: 'successful', color:'green', thumbnail: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600' },
//         { id: '11', date: '07/05/2022', pizzaname: 'blue cheese', price: '4,950', status: 'failed', color:'red', thumbnail: 'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?b=1&k=20&m=1192094401&s=612x612&w=0&h=QYf-ma7bef68nFZEYnW_ZVNWX0Z4ccqcACfx2AT7TSI=' },
//         { id: '12', date: '30/06/2022', pizzaname: 'mozzarella', price: '8,450', status: 'successful', color:'green', thumbnail: 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=600' },
//         { id: '13', date: '19/05/2022', pizzaname: 'provolone', price: '6,250', status: 'successful', color:'green', thumbnail: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=400' },
//     ],
// } 

export function History() {

    const [pizzaOrders, setPizzaOrders] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, 'popular_order'), (querySnapshot) => {
            const allOrders = [];
            querySnapshot.forEach((doc) => {
                const document = doc.data();
                document.id = doc.id
                allOrders.push(document);
                // doc.id
                setPizzaOrders(allOrders)
            })
        },
            (error) => console.log(error));
    }), [];

    //   console.log(pizzaOrders);
    // useEffect(()=>{
    //     onSnapshot(doc(db,'purchases','JRgFlEYcnQ6UY3onMTAa'),(doc)=>{
    //         console.log(doc.date());
    //     })
    // })

    let [FontLoaded] = useFonts({
        RozhaOne_400Regular,
    });

    return (
        <View style={styles.container}>
            {
                pizzaOrders.map((item)=>{
                    return(
                        <Text key={item.id} style={styles.pName}>price = {item.firstname}</Text>
                    )
                })

            }
            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'rgba(128, 128, 128, 0.196)',
        borderRadius: 15,
        marginVertical: 5,
    },
    holder: {
        flexDirection: 'row',
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgba(128, 128, 128, 0.590)',
        borderRadius: 10,
        marginTop: 5,
    },
    pdetails: {
        justifyContent: 'center',
        paddingStart: 5
    },
    pName: {
        fontSize: 25,
        textTransform: 'capitalize',
    },
    price: {
        color: 'green',
        fontSize: 18,
        fontFamily: 'RozhaOne_400Regular'
    },
    container3: {
        marginTop: 2,
        justifyContent: 'center',
        textAlign: 'center'
    },
    xmark: {
        borderWidth: 1,
        borderColor: 'rgba(150, 0, 0, 0.590)',
        paddingHorizontal: 8,
        borderRadius: 20,
        backgroundColor: 'rgba(128, 128, 128, 0.499)'
    },
})