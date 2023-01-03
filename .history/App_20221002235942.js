import { NavigationContainer } from "@react-navigation/native"
import Home from "./screens/Home"
import { createStackNavigator } from "@react-navigation/stack"
import SignIn from "./screens/SignIn";
import CriarConta from "./screens/CriarConta";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  View,
  Text,
  Image,
} from 'react-native';
//import {NavigationContainer} from '@react-navigation/native'
//import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const App = (props) => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CriarConta">
        
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
        <Stack.Screen name="CriarConta" component={CriarConta}  
                options = {{ // buscar
                  title: 'MyHealth',
                  headerTintColor: '#419ED7',
                  headerLeft:  () => (
                    <Image
                      style={{width: 40, height: 40, marginRight: 8}}
                      source={require('./images/siringa.png')}
                    />
                  ),
                  headerTitleStyle: { fontSize: 22},
                  headerStyle: {backgroundColor: '#C1E7E3'},
                  contentStyle:{backgroundColor: '#ADD4D0'},
                  headerShown: true,    
                }}
        />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} 
              options={{
                headerTintColor: '#419ED7',
                title: 'MyHealphy',
                headerTitleStyle: { fontSize: 22},
                headerStyle: {backgroundColor: '#C1E7E3'},
                contentStyle:{backgroundColor: '#ADD4D0'},
              }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}
  
export default App


/* 
telas que ficam dentro da stackNavigator 
    - login (que ja esta ) DONE (OK)
    - criar usuario
    - e esqueci minha  senha  
*/


/*
e em "Home.js" tera 
as telas que em que a pessoa vai estar logada 

*/