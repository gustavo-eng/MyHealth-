import { View, Text } from "react-native"
import React from "react";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
const   Drawer = createDrawerNavigator();

const Home = (props) => {
    return (
        <Drawer.Navigator drawerContent={(props) => < MyDrawer {...props}/>}
            screenOptions={{drawerActiveTintColor: 'orange',  
            drawerActiveBackgroundColor: 'green',
            drawerInactiveBackgroundColor: 'red',
            drawerStyle: {backgroundColor: '#C1E7E3'},  
            }} 
        >
            <Drawer.Screen name="Home" component={Home} options={{
                drawerIcon: () =>   (<Text>!</Text>),
                drawerActiveTintColor: 'orange', 
                }}  
            />
            <Drawer.Screen name="Tela3" component={Tela3} options={{drawerIcon: () =>   (<Text> * </Text>)}}/>
            <Drawer.Screen name="Tela2" component={Tela2}/>
            
        </Drawer.Navigator>
    )
}


export default Home;
