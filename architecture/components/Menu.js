import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

export function Menu() {
    return (
        <View style={styles.horDisplay} >
            <TouchableOpacity style={styles.icon}>
                <FontAwesomeIcon icon={faHouseChimney} size={36} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
                <FontAwesomeIcon icon={faTruck} size={36} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
                <FontAwesomeIcon icon={faWallet} size={42} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
                <FontAwesomeIcon icon={faBell} size={36} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon}>
                <FontAwesomeIcon icon={faCircleUser} size={36} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    horDisplay: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        padding: 10,
        backgroundColor: 'white',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    icon: {
        width: 60,
        height: 60,
        backgroundColor: '#F76E11',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
})