import { createNavigativeStackNavigator } from '@react-navigation/native-stack';
import { Intro } from '../screens/Intro';
import { HomeScreen } from '../screens/Homescreen';
import { Profile } from '../screens/Profile';

const Stack = createNavigativeStackNavigator();

export function AuthNaviator() {
    return (
        <NavigationContainer initialRoutName='Home'>
            <Stack.Navigator ScreenOption={{headerShown:false}} initialRoutName='intro'>
                <Stack.Screen name='Intro' component={Intro} />
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Profile' component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}
{/* <Stack.Screen name='Test' component={Test} options={{headerShown:false}}/> */ }