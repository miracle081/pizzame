import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { History } from './History';
import { Customize } from './Customize';
import { Profile } from './Profile';
import { Notification } from './Notification';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '../thems/themes';
import { Rating } from '@mui/material';
import {data} from "../components/pizzaData"

function HomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>

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
                            <Card.Cover source={{ uri: item.thumbnail }} />
                            <Card.Content>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 20, textTransform: 'capitalize' }} fontWeight='bold'>{item.name}</Text>
                                    <Rating value={item.rating} precision={0.1} readOnly />
                                </View>
                                <Paragraph>{item.note}</Paragraph>
                            </Card.Content>
                            <Card.Actions style={{ justifyContent:'space-between',flexDirection:'row', marginEnd: 10 }}>
                                <Text style={styles.price}>₦{item.price}</Text>
                                <Button mode='contained' color='coral' onPress={() => {
                                    navigation.navigate('Popular', {
                                        pizzaImg: item.thumbnail,
                                        pizzaName: item.name,
                                        pizzaRating: item.rating,
                                        pizzaPrice: item.price
                                    })
                                }}>Order now</Button>
                            </Card.Actions>
                        </Card>
                    );
                }} key={({ item }) => { item.id }} />
            </View>
        </ScrollView>
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
        paddingHorizontal: 10,
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: Theme.points[2],
    },
    brand: {
        flexDirection: 'row',
        fontSize: 30,
    },
    brandName: {
        fontSize: Theme.points[4],
        fontWeight: 'bold',
    },
    signinIcon: {
        width: 70,
        height: 70,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
    },
    search: {
        marginTop: Theme.points[3],
        paddingVertical: Theme.points[2],
        paddingLeft: Theme.points[3],
        borderWidth: 1,
        borderColor: Theme.colors.ui.secondary,
        borderRadius: 50,
        backgroundColor: '#fff',
        fontSize: 20
    },

    popularItem: {
        width: 120,
        height: 120,
        padding: 18,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        borderColor:'#FF9F45',
        borderWidth:2,
        borderRadius:10,
    },
    popularItemText: {
        fontWeight: 'bold',
        textTransform:'capitalize',
        color:'gray'
    },
    popularHeadingText: {
        fontSize: 30,
        marginTop: 20,
        marginBottom:5
    }

})