import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const   Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator name="Home" component={Home} />
    </NavigationContainer>
  )
}

export default App;

// Gustavo Alexandre Dias  