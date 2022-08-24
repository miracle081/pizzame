import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Theme } from "../thems/themes"; 
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

export function Header() {
    return (
        <View style={styles.header}>
            <View style={styles.brand}>
                <Text style={styles.brandName}>Pizzame</Text>
            </View>
            <TouchableOpacity>
                <FontAwesomeIcon icon={faArrowRightToBracket} size={36} styles={{marginTop:30 }}/>
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
    },
})