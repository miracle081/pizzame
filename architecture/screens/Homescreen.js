import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Card, TextInput, Title, Paragraph, Button } from 'react-native-paper';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { History } from './History';
import { Customize } from './Customize';
import { Profile } from './Profile';
import { Notification } from './Notification';
import { Ionicons } from '@expo/vector-icons';

const data = {
    favourites: [
        { name: 'mozzarella', id: '1', price: '8,450', rating: 4.3, thumbnail: 'https://cdn-icons-png.flaticon.com/512/1404/1404945.png' },
        { name: 'parmesan', id: '2', price: '7,250', rating: 2.4, thumbnail: 'https://cdn-icons-png.flaticon.com/512/432/432339.png' },
        { name: 'provolone', id: '3', price: '6,250', rating: 3.7, thumbnail: 'https://cdn-icons-png.flaticon.com/512/4039/4039232.png' },
        { name: 'blue cheese', id: '4', price: '4,950', rating: 4.5, thumbnail: 'https://cdn-icons-png.flaticon.com/512/1699/1699852.png' },
        { name: 'broccoli', id: '5', price: '3,050', rating: 1.3, thumbnail: 'https://cdn-icons-png.flaticon.com/512/1384/1384727.png' }
    ],
    bakersChoice: [
        { name: 'pancetta', id: '6', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg' },
        { name: 'speck', id: '7', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg' },
        { name: 'anchovies', id: '8', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg' },
        { name: 'zucchini', id: '9', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg' },
        { name: 'pancetta', id: '10', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg' }
    ]
}

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={styles.brand}>
                    <Text style={styles.brandName}>Pizzame</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                    <FontAwesomeIcon icon={faArrowRightToBracket} size={36} styles={{ marginTop: 30 }} />
                </TouchableOpacity>
            </View>

            <TextInput placeholder='search for a potin' style={styles.search} />

            <View style={styles.popular}>
                <Text style={styles.popularHeadingText}>Popular Topins</Text>
                <FlatList data={data.favourites} renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.popularItem} onPress={() => {
                            navigation.navigate('Popular', {
                                pizzaImg: item.thumbnail,
                                pizzaName: item.name,
                                pizzaRating: item.rating,
                                pizzaPrice: item.price
                            })
                        }}>
                            <Image source={{ uri: item.thumbnail }} style={styles.signinIcon} />
                            <Text style={styles.popularItemText}>{item.name}</Text>
                        </TouchableOpacity>
                    );
                }} key={({ item }) => { item.id }} horizontal />
            </View>

            {/* Baker's Choice */}
            <View style={styles.bakerChoice} i>
                <Text style={styles.popularHeadingText}>Baker's Choice</Text>
                <FlatList data={data.bakersChoice} renderItem={({ item }) => {
                    return (
                        <Card style={{ marginBottom: 10 }}>
                            <Card.Cover source={{ so: item.thumbnail }} />
                            <Card.Content>
                                <Title>{item.name}</Title>
                                <Paragraph>{item.note}</Paragraph>
                                <Button mode='contained' color='coral'>Order</Button>
                            </Card.Content>
                        </Card>
                    );
                }} key={({ item }) => { item.id }} />
            </View>
        </View>
    )
}

const Tab = createBottomTabNavigator();

export function Home() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HomeScreen') {
                        iconName = focused ? 'home' : 'home-outline';
                    }
                    else if (route.name === 'History') {
                        iconName = focused ? 'md-file-tray-stacked' : 'md-file-tray-stacked-outline';
                    }
                    else if (route.name === 'Customize') {
                        iconName = focused ? 'ios-logo-codepen' : 'ios-logo-codepen';
                    }
                    else if (route.name === 'Profile') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }
                    else if (route.name === 'Notification') {
                        iconName = focused ? 'notifications-circle' : 'notifications-circle-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#F76E11',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name='History' component={History} />
            <Tab.Screen name='Customize' component={Customize} />
            <Tab.Screen name='Profile' component={Profile} />
            <Tab.Screen name='Notification' component={Notification} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1
    },
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
    signinIcon: {
        width: 60,
        height: 60,
    },
    search: {
        marginVertical: Theme.points[3],
        backgroundColor: '#fff',
        fontSize: Theme.points[3],
        paddingVertical: Theme.points[3],
        paddingLeft: Theme.points[3],
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Theme.color.ui.secondary,
    },

    popularItem: {
        width: 120,
        height: 120,
        padding: 18,
        backgroundColor: '#FF9F45',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    popularItemText: {
        fontWeight: 'bold',
    },
    popularHeadingText: {
        fontSize: 30,
        marginVertical: 20,
    }

})