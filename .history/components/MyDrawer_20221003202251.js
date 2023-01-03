import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import {View, Text, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

const MyDrawer = (props) => {
    return(
        <DrawerContentScrollView {...props}>
            <View style={styles.container}>
                <Text style={styles.text}>Ola Gustavo</Text>
                
            </View>
            <View style={styles.line}/>
            <DrawerItemList {...props} />
            {/* <DrawerItem label="Proximas Vacinas." labelStyle={{color:'#419ED7'}} /> */}
            <DrawerItem label="Sair" labelStyle={{color:'#419ED7'}}  onPress={() => {props.navigation.pop()}}
                
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
        fontWeight: "bold",
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