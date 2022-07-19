import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { pizzas } from "../../assets/data/Pizzas";
import { useState } from "react";


export function Customize() {
    const [selected, setSelected] = useState([])
    return (
        <View style={styles.continer}>
            <Text style={styles.heading}>Customize Your Order</Text>

            {/*  */}
            <ScrollView horizontal>
                {
                    Object.values(pizzas).map(singlePizza => (
                        <TouchableOpacity style={styles.selectedPizza} onPress={() => { setSelected(singlePizza.ingredients) }} >
                            <Text style={styles.selectTitile}>{singlePizza.pizzaName}</Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>

            {/*  */}


            <View style={styles.pizzas}>
                {
                    Object.values(selected).map(item => (
                        <TouchableOpacity style={[styles.pizza, { marginRight: Math.round(Math.random() * 100), marginLeft: Math.round(Math.random() * 100), }]}>
                            <Text style={styles.pizzaTitle}>{item.ingreName}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    continer: {
        padding: 20,
    },
    heading: {
        fontSize: 26,
        textAlign: 'center',
        color: '#519259',
        fontWeight: 'bold'
    },
    pizzas: {
        marginTop: 20,
    },
    pizza: {
        backgroundColor: '#FFBC80',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 50,
        marginBottom: 5
    },
    pizzaTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    selectedPizza: {
        backgroundColor: '#064635',
        marginRight: 5,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 10,
    },
    selectTitile: {
        color: 'white',
        fontWeight: 'bold',
    }
})