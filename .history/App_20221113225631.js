
import Home from "./screens/Home"
import { createStackNavigator } from "@react-navigation/stack"
import SignIn from "./screens/SignIn";
import CriarConta from "./screens/CriarConta";
import RecuperarSenha from "./screens/RecuperarSenha";


import { NavigationContainer } from "@react-navigation/native";
import NovaVacina from "./screens/NovaVacina";
import ProximasVacinas from "./screens/ProximasVacinas";
import EditarVacina from "./screens/EditarVacina";

//Redux 
import { Provider  } from "react-redux";
import { store } from "./redux/store";
// store ira retornar o estado global que eh o login! 


import {
  View,
  Text,
  Image,
} from 'react-native';



const Stack = createStackNavigator()

const App = (props) => {
  return(

    <Provider store={store}>  

          <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn">
              <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
              <Stack.Screen name="CriarConta" component={CriarConta}  
                      options = {{ // buscar
                        title: 'MyHealth',
                        headerTitleStyle: { fontSize: 25,fontFamily: 'AveriaLibre-Bold'},
                        headerTintColor: '#419ED7',
                        headerLeft:  () => (
                          <Image
                            style={{width: 40, height: 40, marginRight: -10, marginLeft: 10,}}
                            source={require('./images/siringa.png')}
                          />
                        ), 
                        cardStyle: {backgroundColor: '#ADD4D0'},  
                        headerStyle: {backgroundColor: '#C1E7E3'},
                        headerTintColor: '#419ED7',   
                      }}
              />
              <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} 
                    options={{
                      headerTintColor: '#419ED7',
                      title: 'MyHealphy',
                      headerTitleStyle: { fontSize: 25,fontFamily: 'AveriaLibre-Bold'},
                      cardStyle: {backgroundColor: '#ADD4D0'}, 
                      headerStyle: {backgroundColor: '#C1E7E3'},
                      headerTintColor: '#419ED7',
                    }}
              />
              <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
              <Stack.Screen name="NovaVacina" component={NovaVacina}
                options={{
                  title: 'Minhas vacinas ',
                  headerTitleStyle: {color: '#419ED7',fontFamily: 'AveriaLibre-Bold', fontSize: 25,},
                  cardStyle: {backgroundColor: '#ADD4D0'}, 
                  headerStyle: {backgroundColor: '#C1E7E3'},
                  headerTintColor: '#419ED7',
                  
                }}
                
              />
              <Stack.Screen name="ProximasVacinas" component={ProximasVacinas} 
              />
              <Stack.Screen name="EditarVacina" component={EditarVacina} 
              options={
                  {
                    title: 'Minhas vacinas',
                    headerTitleStyle: {color: '#419ED7', fontFamily: 'AveriaLibre-Bold', fontSize: 25},
                    cardStyle: {backgroundColor: '#ADD4D0'}, 
                    headerStyle: {backgroundColor: '#C1E7E3'},
                    headerTintColor: '#419ED7',
                  
                  }
              }/>

            </Stack.Navigator>
          </NavigationContainer>

    </Provider>
  )
}
  
export default App

// Parei em 31:49

// Passar para a tela editar primeiro e depois continuar o vide 