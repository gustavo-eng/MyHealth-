import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import {View, Text, StyleSheet, Image } from "react-native";

import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const MyDrawer = (props) => {

    const logout = () => {
        signOut(auth)
        .then(() => {
            console.log('logOut do user . . .')
            props.navigation.pop()
        })
        .catch(() => {
            console.log('Nao foi possiver dar logOUT do user')
        })
    }
    return(
        <DrawerContentScrollView {...props}>
            <View style={styles.container}>
                <Text style={styles.text}>Ola Gustavo</Text>
                
            </View>
            <View style={styles.line}/>
            <DrawerItemList {...props} />
            {/* <DrawerItem label="Proximas Vacinas." labelStyle={{color:'#419ED7'}} /> */}
            <DrawerItem label="Sair" labelStyle={{color:'#419ED7', fontFamily: 'AveriaLibre-Bold', fontSize: 15}}  onPress={logout}
                
                icon={ () => (
                     <Image style={{width: 20, height: 20, marginRight: -25}}
                            source={require('../images/sair.png')}
                     />   
                )}
            />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    text: {
        fontSize: 24,
        color: '#419ED7',
        fontFamily: 'AveriaLibre-Bold',
    },
    line : {
        width: '75%',
        height: 3,
        marginBottom: 20,
        alignSelf: "center",
        backgroundColor: '#419ED7',
    },
})

export default MyDrawer;