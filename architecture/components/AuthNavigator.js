import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Intro } from '../screens/Intro';
import { HomeScreen } from '../screens/Homescreen';
import { Profile } from '../screens/Profile';

const Stack = createNativeStackNavigator();

export function AuthNaviator() {
    return (
        <Stack.Navigator ScreenOption={{ headerShown: false }} initialRoutName='Intro'>
            <Stack.Screen name='Intro' component={Intro} />
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>

    )
}
{/* <Stack.Screen name='Test' component={Test} options={{headerShown:false}}/> */ }