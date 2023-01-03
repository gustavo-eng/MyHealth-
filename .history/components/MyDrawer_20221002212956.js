// Menu lateral customizado 
//import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"



import { 
    DrawerContentScrollView, // ppode ter varias entradas q precisa scrooller  
    DrawerItem, // representa cada linha que esta no navigator 
    DrawerItemList,  // consegue renderizar os elementos  
} from '@react-navigation/drawer'; 
import { Linking, View, Text, StyleSheet  } from 'react-native';


const MyDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}> 
            <View style={styles.container}>
                <Text>Ola Gustavo </Text>
            </View>
            <DrawerItemList {...props}/>  
            <DrawerItem label={"Go to UTPFR  "} /* onPress={Linking.openURL('https://code.tutsplus.com/tutorials/how-to-code-a-navigation-drawer-in-an-android-app--cms-30263') }*//>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 25, 
    },  
})

export default MyDrawer;