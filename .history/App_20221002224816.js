import { NavigationContainer } from "@react-navigation/native"
import Home from "./screens/Home"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./screens/Login"


const Stack = createStackNavigator()

const App = (props) => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
  
export default App