import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { Button } from 'react-native-paper';
import {Theme} from "../thems/themes"

export function Intro ({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/pizza_intro.jpg')} style={styles.imgBg} resizeMode='cover'>
                <View style={styles.brand}>
                    <Image source={require('../../assets/images/pizza.png')} style={styles.brandImg} />
                    <Text style={styles.brandText}>PizzaMe</Text>
                </View>

                <Button mode='contained' color='#FF9F45' style={styles.btn} onPress={ () => navigation.navigate('Home') }>
                    Explore PizzaMe
                </Button>
            </ImageBackground>

        
        </View>
    )
}

const styles = StyleSheet.create({
    imgBg:{
        height: '100vh',
        width:'100%',
        justifyContent:'space-between'
    },
    brand:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:Theme.points[3]*2
    },
    brandImg:{
        width: Theme.points[3]*4,
        height:Theme.points[3]*4,
        marginRight:5
    },
    brandText:{
        fontSize:(Theme.points[3]*3 ) + 4,
        color:'#fff',
        fontWeight:Theme.fonts.fontWeights.bold
    },
    btn:{
        marginHorizontal:Theme.points[3] * 2,
        marginBottom: Theme.points[3] * 2
    }
})