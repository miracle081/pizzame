import { useState } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { Theme } from '../thems/themes';
import { authentication } from '../../services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export function SignUp({ navigation }) {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    function createUser() {
        createUserWithEmailAndPassword(authentication,email,Password)
        .then(userCredentials => console.log(userCredentials.user))
        .catch(error => console.error(error))
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: Theme.sizes[2], textAlign: 'center', fontWeight: 'bold' }}>Create a new account</Text>
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
                <Text style={styles.signinText}>Already have an account?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Signin')}>
                    <Text style={styles.signinText}>Create account</Text>
                </TouchableOpacity>
            </View>
            <Button mode="contained" 
            color={Theme.colors.ui.primary} 
            style={styles.btn}
            onPress={createUser}
            >Create Account</Button>
        </View>
    )

};


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