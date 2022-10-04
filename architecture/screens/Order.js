import { useState } from "react";
import { View,Text,StyleSheet,TextInput } from "react-native";
import { Button } from "react-native-paper";
import { Theme } from "../thems/themes";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export function Order ({navigation,route}){
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [latitude,setLatitude] = useState(0);
    const [longitude,setLongitude] = useState(0);
    const [addressDetails,setAddressDetails] = useState('');

    const {
        orderTotal,
        orderPizzaName,
        orderPizzaIngredients,
        orderPizzaSize
    } = route.params;

    return (
        <View style={styles.parent}>
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.title}>Place your order</Text>
                    <TextInput placeholder="first name" style={styles.input}
                    onChangeText={(fname) => setFirstName(fname)}
                    />
                    <TextInput placeholder="last name" style={styles.input}
                    onChangeText={(lname) => setLastName(lname)}
                    />
                    <TextInput placeholder="email address" style={styles.input}
                    onChangeText={(email) => setEmail(email)}
                    />
                    <TextInput placeholder="phone number" style={styles.input}
                    onChangeText={(phone) => setPhone(phone)}
                    />
                </View>
            </View>

            <View style={styles.mapLocation}>
                <Text style={{fontSize:18}}>Where do you want to receive your order?</Text>
                <GooglePlacesAutocomplete 
                placeholder='delivery address' 
                query={{
                    key:'AIzaSyAltTdZ5mgwXmOAdeDKLqKf8OfJovDQWBI',
                    language:'en'
                }}
                fetchDetails={true}
                enablePoweredByContainer={false}
                onPress={(data,details = null) => {
                    setLatitude(details.geometry.location.lat);
                    setLongitude(details.geometry.location.lng);
                    setAddressDetails(data.description)
                }}
                minLength={2}
                />
            </View>

            <View style={styles.submit}>
                <Button 
                    mode="outlined" 
                    color="white" 
                    style={
                        {marginTop:20,backgroundColor:Theme.colors.ui.primary}} 
                        contentStyle={{paddingVertical:20}
                    }
                    onPress={() => navigation.navigate('Checkout',{
                        price:orderTotal,
                        pizzaName:orderPizzaName,
                        ingredients:orderPizzaIngredients,
                        size:orderPizzaSize,
                        fname:firstName,
                        lname:lastName,
                        email:email,
                        phone:phone,
                        lat:latitude,
                        lon:longitude,
                        address:addressDetails
                    })}
                    >
                    Complete Your Order
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   parent:{
    flex:1,
    padding:20
   },
    container:{
        flex:2,
    },
    title:{
        textAlign:'center',
        fontSize:Theme.points[4],
        marginBottom:Theme.points[2]
    },
    input:{
        paddingHorizontal:Theme.points[2],
        paddingVertical:Theme.points[3],
        borderWidth:1,
        borderColor:Theme.colors.ui.secondary,
        borderRadius:50,
        marginBottom:Theme.points[2]
    },
    mapLocation:{
        flex:3,
        marginTop:50,
    },
    submit:{
        flex:1
    }
})
