import { NavigationContainer } from "@react-navigation/native"
import Home from "./screens/Home"
import { createStackNavigator } from "@react-navigation/stack"
import SignIn from "./screens/SignIn"
//import {NavigationContainer} from '@react-navigation/native'
//import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createStackNavigator()

const App = (props) => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        
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
        { /* <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/> */}
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
e em home tera 
as telas que em que a pessoa vai estar logada 

*/