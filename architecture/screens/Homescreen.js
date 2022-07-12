import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Card, TextInput, Title, Paragraph, Button } from 'react-native-paper';
import { useFonts, Pacifico_400Regular, } from '@expo-google-fonts/Pacifico';
import { Overpass_100Thin, Overpass_200ExtraLight, Overpass_400Regular } from '@expo-google-fonts/OverPass';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';

const data = {
    favourites: [
        { name: 'mozzarella', id: '1', thumbnail: 'https://cdn-icons-png.flaticon.com/512/1404/1404945.png' },
        { name: 'parmesan', id: '2', thumbnail: 'https://cdn-icons-png.flaticon.com/512/432/432339.png' },
        { name: 'provolone', id: '3', thumbnail: 'https://cdn-icons-png.flaticon.com/512/4039/4039232.png' },
        { name: 'blue cheese', id: '4', thumbnail: 'https://cdn-icons-png.flaticon.com/512/1699/1699852.png' },
        { name: 'broccoli', id: '5', thumbnail: 'https://cdn-icons-png.flaticon.com/512/1384/1384727.png' }
    ],
    bakersChoice: [
        { name: 'pancetta', id: '6', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg' },
        { name: 'speck', id: '7', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg' },
        { name: 'anchovies', id: '8', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg' },
        { name: 'zucchini', id: '9', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg' },
        { name: 'pancetta', id: '10', note: 'Made with the finest Italian ingredients', thumbnail: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg' }
    ]
}

export function HomeScreen() {
    let [FontLoaded] = useFonts({
        Pacifico_400Regular,
        Overpass_100Thin,
        Overpass_200ExtraLight,
        Overpass_400Regular
    });
    return (
        <View style={styles.container}>
            <Header />
            <TextInput placeholder='search for a potin' style={styles.search} />

            <View style={styles.popular}>
                <Text style={styles.popularHeadingText}>Popular Topins</Text>
                <FlatList data={data.favourites} renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.popularItem}>
                            <Image source={{ uri: item.thumbnail }} style={styles.signinIcon} />
                            <Text style={styles.popularItemText}>{item.name}</Text>
                        </TouchableOpacity>
                    );
                }} key={({ item }) => { item.id }} horizontal />
            </View>

            {/* Baker's Choice */}
            <View style={styles.bakerChoice}i>
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
            <Menu />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1
    },
    signinIcon: {
        width: 60,
        height: 60,
    },
    search: {
        marginVertical: 20,
        backgroundColor: '#FAEEE0',
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
        fontFamily: ' Overpass_200ExtraLight',
        marginVertical: 20,
    }

})