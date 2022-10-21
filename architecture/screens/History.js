import { Text, View, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheckCircle, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useFonts, RozhaOne_400Regular } from "@expo-google-fonts/rozha-one";
import { db } from "../../services/firebase";
import { onSnapshot, collection, doc, deleteDoc } from "firebase/firestore";


export function History() {

    const [pizzaOrders, setPizzaOrders] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, 'popular_order'), (querySnapshot) => {
            const allOrders = [];
            querySnapshot.forEach((doc) => {
                const document = doc.data();
                document.id = doc.id
                allOrders.push(document);
            })
            setPizzaOrders(allOrders);
        },
            (error) => console.log(error));
    }), [];

    function deletePizza (pizzaId) {
        //delete a record
        deleteDoc(doc(db, "popular_order", pizzaId))
        .then(() => {
            // Alert.alert(
            //     'Order Confirmation',
            //     'We have received your customized pizza order.',
            //     [{text:'Accept',onPress:() => navigation.navigate('Home')}]
            // )
        })
        .catch((e) => {
            Alert.alert('Error','An unknown error has occured')
        })
      }

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
            <FlatList data={pizzaOrders} renderItem={({ item }) => {
                return (
                    <View style={styles.container2}>
                        <View style={styles.holder}>
                            <Image style={styles.img} source={{ uri: item.pizzaImg }} />
                            <View style={styles.pdetails}>
                                <Text style={styles.pName}>{item.pizzaname}</Text>
                                <Text style={styles.price}>₦{item.price}</Text>
                            </View>
                        </View>
                        <View style={styles.container3}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <FontAwesomeIcon icon={faCheckCircle} style={{ textAlign: 'center', color: item.color }} />
                                <Text style={{ fontSize: 13, color: item.color, fontStyle: 'italic' }}> {item.status}</Text>
                            </View>
                            <Text style={styles.date}>{item.date}</Text>
                        </View>
                        <TouchableOpacity style={[styles.xmark, { position: 'absolute', right: 0, top: -5, }]} 
                            
                        >
                            {/* <Text>{item.id}</Text> */}
                            <FontAwesomeIcon icon={faXmark} size={15} style={{ opacity: 0.6, }} />
                        </TouchableOpacity>
                    </View>
                );
            }} key={({ item }) => { item.id }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // padding: 10,
        justifyContent: 'center',
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 15,
        margin: 4,
        marginHorizontal:7
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