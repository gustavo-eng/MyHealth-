import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './screens/Home';
import Tela2 from './screens/Tela2';
import Tela3 from './screens/Tela3';
import MyDrawer from './components/MyDrawer';
const   Drawer = createDrawerNavigator()

const App = (props) => {
  return (
    <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => < MyDrawer {...props}/>}>
          <Drawer.Screen name="Home" component={Home} options={{
            drawerIcon: () =>   (<Text>!</Text>),
            drawerActiveTintColor: 'orange', 
           }}  
          />
          <Drawer.Screen name="Tela3" component={Tela3} options={{drawerIcon: () =>   (<Text> * </Text>)}}/>
          <Drawer.Screen name="Tela2" component={Tela2}/>
        </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;

// Gustavo Alexandre Dias 02/10/2022