import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Alert, TextInput } from "react-native";
import { useState } from "react";
import { Button } from "react-native-paper";
import { Theme } from "../thems/themes";

export function Order({ navigation, route }) {
    // const { orderTotal, orderpizzaName, orderPizzaIngredients, orderSize } = route.params
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [address,setAddress] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    return (
        <View style={styles.container}>
            {/* First name, Last name, phone, eamil, address */}
            <TextInput placeholder='First name' style={styles.search} 
                onPress={()=>{}}
            />
            <TextInput placeholder='Last name' style={styles.search} />
            <TextInput placeholder='Phone' style={styles.search} />
            <TextInput placeholder='Email' style={styles.search} />
            <TextInput placeholder='Address' style={styles.search} />

            <Button mode="outlined" color="white" style={{
                marginTop: 20, padding: 20, backgroundColor: Theme.colors.ui.primary
            }}
                onPress={() => {
                    Alert.alert(
                        'Order Confirmation',
                        'We have received your customized pizz order.'
                        [{ text: 'Accept', onPress: () => { console.log('Accept') } }, { text: 'Cancel' }]
                    )
                }}
            >Complete Your Order</Button>
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
        paddingVertical: Theme.points[4] +5,
        paddingLeft: Theme.points[3],
        borderRadius: 50,
        borderBottomWidth: 1,
        borderBottomColor: Theme.colors.ui.secondary,
    },
})