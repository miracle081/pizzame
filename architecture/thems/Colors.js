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
                        {/* <View style={styles.holder}> */}
                            {/* <Image style={styles.img} source={{uri: item.pizzaImg}} /> */}
                            <Text style={styles.pName}>{item.price}</Text>
                            {/* <View style={styles.pdetails}>
                                <Text style={styles.price}>₦{item.price}</Text>
                            </View>
                        </View>
                        <View style={styles.container3}>
                            <View style={{flexDirection:'row', justifyContent:'center'}}>
                                <FontAwesomeIcon icon={faCheckCircle} style={{ textAlign: 'center', color: item.color }} />
                                <Text style={{fontSize:13, color: item.color, fontStyle:'italic'}}> {item.status}</Text>
                            </View>
                            <Text style={styles.date}>{item.date}</Text>
                        </View>
                        <TouchableOpacity style={[styles.xmark, { position:'absolute', right:0,top:-5,}]}>
                            <FontAwesomeIcon icon={faXmark} size={15} style={{ opacity:0.6, }} />
                        </TouchableOpacity> */}
                    </View>
                )
            }}
            />