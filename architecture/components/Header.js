import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts, Pacifico_400Regular, } from '@expo-google-fonts/Pacifico';
import { Theme } from "../thems/themes";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

export function Header() {
    let [FontLoaded] = useFonts({
        Pacifico_400Regular,
    });
    return (
        <View style={styles.header}>
            <View style={styles.brand}>
                <Text style={styles.brandName}>Pizzame</Text>
            </View>
            <TouchableOpacity>
                <FontAwesomeIcon icon={faArrowRightToBracket} size={36} styles={{marginTop }}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: Theme.points[2]
    },
    brand: {
        flexDirection: 'row',
        fontSize: 30,
    },
    brandName: {
        fontSize: Theme.points[5],
        fontWeight: 'bold',
        fontFamily: 'Pacifico_400Regular'
    },
})