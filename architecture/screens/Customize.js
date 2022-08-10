import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { pizzas } from "../../assets/data/Pizzas";
import { useState } from "react";
import { pizzaSizes } from "../../assets/data/Pizzas";
import { Button } from "react-native-paper";
import {Theme} from "../thems/themes"
import { Order } from "./Order";

export function Customize({navigation,route}) {
    const [selected, setSelected] = useState({});
    const [total, setTotal] = useState(0);
    const [pizzaNames, setpizzaNames] = useState('Pizza Name');
    const [ingredients, setIngredients] = useState([]);
    const [sizes, setSizes] = useState('');

    function Procced (){ 
        if(total > 0){
            return <Button mode="outlined" color="white" style={{marginTop:20, padding:20, backgroundColor:'#064635'}}
            onPress={()=>{
                navigation.navigate('Order',{
                    orderTotal: total,
                    orderpizzaName : pizzaNames,
                    orderPizzaIngredients: ingredients,
                    orderSize: sizes
                });
            }}
            >Continue to dilivear</Button>
            
        }
    }

    return (
        <View style={styles.continer}>
            <Text style={styles.heading}>Customize Your Order</Text>

            <View style={styles.billing}>
                <Text style={styles.pizzabillingTitle}>PIzza Total</Text>
                <Text style={styles.pizzabillingValue}>₦{total}</Text>
                <Text style={styles.pizzabillingTitle}>{pizzaNames} with ingredients ({ingredients}), Size: {sizes}</Text>
            </View>

            {/*  selected pizzza*/}
            <ScrollView horizontal>
                {
                    Object.values(pizzas).map(singlePizza => (
                        <TouchableOpacity style={styles.selectedPizza} onPress={() => { setSelected(singlePizza.ingredients); setpizzaNames(singlePizza.pizzaName)}} >
                            <Text style={styles.selectTitile}>{singlePizza.pizzaName}</Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>

            {/*  */}


            <View style={styles.pizzas}>
                {
                    Object.values(selected).map(item => (
                        <TouchableOpacity style={[styles.pizza, { marginRight: Math.round(Math.random() * 100), marginLeft: Math.round(Math.random() * 100), }]}
                            onPress={()=>{
                                setTotal(total + item.fee);
                                setIngredients([ingredients,...item.ingreName,', '])
                            }}
                        >
                            <Text style={styles.pizzaTitle}>{item.ingreName}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>

            {/* Available sizes */}
            <View style={styles.sizes}>
                {
                    Object.values(pizzaSizes).map(item => (
                        <TouchableOpacity style={styles.sizesTouch}
                            onPress={()=>{
                                setTotal(total + item.fee);
                                setSizes(item.sizeName)
                            }}
                        >
                            <Text style={styles.sizeTitle}>{item.sizeName}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
           {Procced()}
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
    },
    sizes: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    sizesTouch: {
        borderWidth: 2,
        borderColor: '#519259',
        padding: 8,
        borderRadius: 10,
    },
    sizeTitle: {
        color: '#064635',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
    },
    billing: {
        backgroundColor: '#cccccc',
        padding: 12,
        marginVertical: 20,
        textAlign: 'center'
    },
    pizzabillingTitle: {
        color: 'gray',
    },
    pizzabillingValue: {
        fontSize: 28,
    }
})