import { useState } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { Theme } from '../thems/themes';

export function Signin({ navigation }) {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    function signinUser() {
        
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: Theme.sizes[2], textAlign: 'center', fontWeight: 'bold' }}>Access your account</Text>
            <TextInput
                placeholder='Enter your Email address'
                style={styles.email}
                onChangeText={text => setEmail(text)}
            />

            <TextInput
                placeholder='Enter your Password'
                style={styles.passWord}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
            />
            <View style={styles.signinBar}>
                <Text style={styles.signinText}>Don't have an account? </Text>
                <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                    <Text style={styles.signinText}>Sign Up</Text>
                 </TouchableOpacity>
            </View>
            <Button mode="contained" 
            color={Theme.colors.ui.primary} 
            style={styles.btn}
            onPress={signinUser}
            >Sign In</Button>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.ui.tertiary,
        justifyContent: 'center',
        alignContent: 'center'
    },
    email: {
        borderRadius: 10,
        borderWidth: 2,
        padding: 20,
        margin: 20,
        backgroundColor: 'white'
    },
    passWord: {
        borderRadius: 10,
        borderWidth: 2,
        padding: 20,
        margin: 20,
        backgroundColor: 'white'
    },
    signinText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    signinBar: {
        flexDirection: 'row',
        marginHorizontal:20,
    },
    btn: {
        marginHorizontal:20,
    }
})