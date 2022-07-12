import { View, Image, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { Button } from "react-native-paper";

export function Intro () {
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.imgBG} source={require('../../assets/images/pizza_intro.jpg')}>
                <View style={styles.brand}>
                    <Text styl={styles.brandText}>Pezzame</Text>
                    <Image source={require('../../assets/images/pizza.png')} style={styles.brandImg}/>
                </View>
                <Button mode="contained" color='#FF9F45' onPress={ () => navigation.navigate('Home') } style={styles.btn}>Explore Pizzame</Button>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    imgBG:{
        height:'100%',
        width:'100%',
        justifyContent:'space-between',
    },
    brand:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    brandImg:{
        width:40,
        height:40,
        marginRight:5,
    },brandText:{
        fontSize:32,
        color:'white',
        fontWeight:'bold',
    },
    btn:{
        paddingVertical:18,
        marginHorizontal:20,
        marginBottom:10
        
    }

})