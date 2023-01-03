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
import Tela2 from './screens/Login';
import Tela3 from './screens/Tela3';
import MyDrawer from './components/MyDrawer';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = (props) => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

// Gustavo Alexandre Dias 02/10/2022