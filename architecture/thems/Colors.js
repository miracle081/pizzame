/* 
    light orage: #FFBC80
    med.org: #FF9F45
    strong.org: #F76E11

    =====

    lit.green: #519259
    strong green: #064635

*/

<FlatList data={d} renderItem={({ item }) => {
    return (
        <View style={styles.container2}>
            <View style={styles.holder}>
                <Image style={styles.img} source={{ uri: item.pizzaImg }} />
                <View style={styles.pdetails}>
                    <Text style={styles.pName}>{item.price}</Text>
                    <Text style={styles.price}>₦{item.price}</Text>
                </View>
            </View>
            <View style={styles.container3}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <FontAwesomeIcon icon={faCheckCircle} style={{ textAlign: 'center', color: item.color }} />
                    <Text style={{ fontSize: 13, color: item.color, fontStyle: 'italic' }}> {item.status}</Text>
                </View>
                <Text style={styles.date}>{item.date}</Text>
            </View>
            <TouchableOpacity style={[styles.xmark, { position: 'absolute', right: 0, top: -5, }]}>
                <FontAwesomeIcon icon={faXmark} size={15} style={{ opacity: 0.6, }} />
            </TouchableOpacity>
        </View>
    )
}}
/>

const data = {
    historys: [
        { id: '1', date: '30/06/2022', pizzaname: 'mozzarella', price: '8,450', status: 'successful', color: 'green', thumbnail: 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: '2', date: '10/06/2022', pizzaname: 'mozzarella', price: '8,450', status: 'successful', color: 'green', thumbnail: 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: '3', date: '19/05/2022', pizzaname: 'provolone', price: '6,250', status: 'successful', color: 'green', thumbnail: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: '4', date: '07/05/2022', pizzaname: 'blue cheese', price: '4,950', status: 'failed', color: 'red', thumbnail: 'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?b=1&k=20&m=1192094401&s=612x612&w=0&h=QYf-ma7bef68nFZEYnW_ZVNWX0Z4ccqcACfx2AT7TSI=' },
        { id: '5', date: '28/04/2022', pizzaname: 'broccoli', price: '3,050', status: 'successful', color: 'green', thumbnail: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: '6', date: '07/05/2022', pizzaname: 'blue cheese', price: '4,950', status: 'successful', color: 'green', thumbnail: 'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?b=1&k=20&m=1192094401&s=612x612&w=0&h=QYf-ma7bef68nFZEYnW_ZVNWX0Z4ccqcACfx2AT7TSI=' },
        { id: '7', date: '29/05/2022', pizzaname: 'parmesan', price: '7,250', status: 'failed', color: 'red', thumbnail: 'https://images.pexels.com/photos/803290/pexels-photo-803290.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: '8', date: '28/04/2022', pizzaname: 'broccoli', price: '3,050', status: 'successful', color: 'green', thumbnail: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: '9', date: '19/05/2022', pizzaname: 'provolone', price: '6,250', status: 'successful', color: 'green', thumbnail: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: '10', date: '28/04/2022', pizzaname: 'broccoli', price: '3,050', status: 'successful', color: 'green', thumbnail: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: '11', date: '07/05/2022', pizzaname: 'blue cheese', price: '4,950', status: 'failed', color: 'red', thumbnail: 'https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?b=1&k=20&m=1192094401&s=612x612&w=0&h=QYf-ma7bef68nFZEYnW_ZVNWX0Z4ccqcACfx2AT7TSI=' },
        { id: '12', date: '30/06/2022', pizzaname: 'mozzarella', price: '8,450', status: 'successful', color: 'green', thumbnail: 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: '13', date: '19/05/2022', pizzaname: 'provolone', price: '6,250', status: 'successful', color: 'green', thumbnail: 'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=400' },
    ],
} 
