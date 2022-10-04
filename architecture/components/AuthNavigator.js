import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Intro } from '../screens/Intro';
import { Home } from '../screens/Homescreen';
import { Popular } from '../screens/Popular';
import { Order } from '../screens/Order';
import { Signin } from '../screens/Signin';
import { SignUp } from '../screens/signup';
import { Pay } from '../screens/Pay';
import { Checkout } from '../screens/Checkout';

const Stack = createNativeStackNavigator();

export function AuthNaviator () {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRoutName='Intro'>
             <Stack.Screen name='Intro' component={Intro} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Signin' component={Signin} options={{ headerShown: true }}/>
            <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: true }}/>
            <Stack.Screen name='Popular' component={Popular} options={{headerShown:true, title:'From Popular Pizza',
                headerStyle:{backgroundColor:'#65C18C'},
                headerTintColor:'#C1F4C5',
                headerTitleStyle:{ fontWeight:'bold', fontSize:20 },
                headerBackTitle:'Go back'
                }}
            />
            <Stack.Screen name='Order' component={Order} options={{ headerShown: true }}/>
            <Stack.Screen name='Checkout' component={Checkout} options={{ headerShown: true }}/>
            <Stack.Screen name='Pay' component={Pay} options={{ headerShown: true }}/>
        </Stack.Navigator>

    )
}