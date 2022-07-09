import { View, Image, Text, StyleSheet } from "react-native";
import { useFonts, Pacifico_400Regular, } from '@expo-google-fonts/Pacifico';

export function Header() {
    let [FontLoaded] = useFonts({
        Pacifico_400Regular,
      });
    return (
        <View style={styles.header}>
            <View style={styles.brand}>
                <Image
                    source={require("../../assets/images/pizza.png")}
                    style={styles.logo}
                />
                <Text style={styles.brandName}>Pizzame</Text>
            </View>
            <Image
                source={require("../../assets/images/login.png")}
                style={styles.signinIcon}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    brand: {
        flexDirection: 'row',
        fontSize: 30,
    },
    logo: {
        width: 60,
        height: 60,
    },
    signinIcon: {
        width: 40,
        height: 40,
    },
    brandName: {
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily:'Pacifico_400Regular'
    },
})