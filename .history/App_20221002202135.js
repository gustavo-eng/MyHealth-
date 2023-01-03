import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../drawwNavigator/screens/Home';
import Tela2 from '../drawwNavigator/screens/Tela2';
import Tela3 from '../drawwNavigator/screens/Tela3'

const   Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="Tela2" component={Tela2}/>
          <Drawer.Screen name="Tela3" component={Tela3}/>
        </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;

// Gustavo Alexandre Dias  