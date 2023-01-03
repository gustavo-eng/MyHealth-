import { NavigationContainer } from "@react-navigation/native"
import Home from "./screens/Home"
import { createStackNavigator } from "@react-navigation/stack"
import SignIn from "./screens/SignIn"


const Stack = createStackNavigator()

const App = (props) => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
        { /* <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
  
export default App


/* 
telas que ficam dentro da stackNavigator 
    - login (que ja esta )
    - criar usuario
    - e esqueci minha  senha  
*/


/*
e em home tera 
as telas que em que a pessoa vai estar logada 

*/