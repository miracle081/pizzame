import { View, StyleSheet, Text, Image, Button } from "react-native";

export function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.bio}>
                <Image />
                <Text>Jack Robinson</Text>
                <Text>meetj</Text>
                <Text>Edit Details </Text>
            </View>

            <View style={styles.details}>
                <View style={styles.city}>
                    {/* icon */}
                    <Text style={styles.cityText}>Ikeja, Lagos</Text>
                </View>
                <View style={styles.address}>
                    {/* icon */}
                    <Text style={styles.addressText}>62 Gado Nasko Road, Kubwa,</Text>
                </View>
            </View>
            
            <View style={styles.passwordChange}>
                <View style={styles.subject}>
                    {/* icon */}
                    <Text>Change Password</Text>
                </View>
                {/* Icon pointing right */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})