import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEarth, faStar } from "@fortawesome/free-solid-svg-icons";
import { faLock, faAnglesRight, faPhone, faMale, faFemale } from "@fortawesome/free-solid-svg-icons";
import {Theme} from "../thems/themes"

export function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.bio}>
                <View>
                    <Image style={styles.profilePic} source={require('../../assets/images/user1.JPG')} />
                    <TouchableOpacity style={styles.Editcam}>
                        <FontAwesomeIcon icon={faCamera} style={styles.cam} size={15} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.userName} >Miracle Obafemi</Text>
                <Text style={{ marginTop: 5, color: 'white', fontSize: 17, }}>miracleobafemi@gmail.com</Text>
                <TouchableOpacity style={styles.editBtn}>
                    <FontAwesomeIcon icon={faUserEdit} size={17}/>
                    <Text  style={styles.editText}> Edit Profile</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.container2}>
                <View style={styles.details}>
                    <View style={styles.con}>
                        <FontAwesomeIcon icon={faPhone} size={25} style={styles.icon} />
                        <Text style={styles.cityText}>08157382954</Text>
                    </View>
                    <View style={styles.con}>
                        <FontAwesomeIcon icon={faEarth} size={25} style={styles.icon} />
                        <Text style={styles.cityText}>Ikeja, Lagos</Text>
                    </View>
                    <View style={styles.con}>
                        <FontAwesomeIcon icon={faLocationDot} size={25} style={styles.icon} />
                        <Text style={styles.cityText}>62 Gado Nasko Road, Kubwa,</Text>
                    </View>
                    <View style={styles.con2}>
                        <View style={{flexDirection:'row',}}>
                            <FontAwesomeIcon icon={faMale} size={25} style={styles.icon} />
                            <FontAwesomeIcon icon={faFemale} size={25} style={styles.icon} />
                        </View>
                        <Text style={styles.cityText}>Male</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.passwordChange}>
                    <View style={{flexDirection:'row '}} >
                        <FontAwesomeIcon icon={faStar} size={25} style={styles.icon}/>
                        <Text style={styles.cityText}>favourites</Text>
                    </View>
                    <FontAwesomeIcon icon={faAnglesRight} size={26} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.passwordChange}>
                    <View style={{flexDirection:'row '}} >
                        <FontAwesomeIcon icon={faLock} size={25} style={styles.icon} color='red'/>
                        <Text style={[styles.cityText,{color:'red'}]}>Change Password</Text>
                    </View>
                    <FontAwesomeIcon icon={faAnglesRight} size={26} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#513252',
    },
    bio: {
        alignItems: 'center',
        padding: Theme.points[3],
        borderRadius: Theme.points[3] + Theme.points[3]
    },
    profilePic: {
        width: 160,
        height: 160,
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 80,
    },
    userName: {
        fontSize: 26,
        letterSpacing:2,
        color: 'white',
    },
    Editcam: {
        position: 'absolute',
        bottom: Theme.points[3],
        right: Theme.points[3] + Theme.points[3],
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 50,
        padding: 5,
        backgroundColor: 'blue'
    },
    editText:{
        fontWeight:Theme.fonts.fontWeights.bold,
        
    },
    cam: {
        color: 'white',
    },
    container2: {
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        height: '100vh',
        paddingTop: 30,
    },
    editBtn: {
        flexDirection: 'row',
        // borderColor: 'gray',
        // borderWidth: 2,
        paddingVertical: 7,
        paddingHorizontal: Theme.points[3],
        borderRadius: Theme.points[3],
        marginVertical: 5,
        backgroundColor: 'white'
    },
    details: {

    },
    con: {
        flexDirection: 'row',
        padding: 15,
        borderBottomColor: 'rgba(128, 128, 128, 0.336)',
        borderBottomWidth: 1,
    },
    con2: {
        flexDirection: 'row',
        padding: 15,
        borderBottomColor: 'rgba(128, 128, 128, 0.336)',
        borderBottomWidth: 5,
    },
    cityText: {
        fontSize: 20,
        paddingStart: 5,
        opacity:0.8,
    },
    icon:{
        opacity:0.7,
    },
    passwordChange:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 15,
        color:'white',
        borderBottomColor: 'rgba(128, 128, 128, 0.336)',
        borderBottomWidth: 1,
    },

})