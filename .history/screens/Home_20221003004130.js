import { Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MyDrawer from '../components/MyDrawer'
import MinhasVacinas from './MinhasVacinas'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeCard from './HomeCard'

const Drawer = createDrawerNavigator()

const Home = (props) => {
    return (
        <Drawer.Navigator drawerContent={(props) => <MyDrawer {...props} />} 
            screenOptions={
                { drawerActiveTintColor: 'orange', 
                drawerActiveBackgroundColor: 'green', 
                drawerInactiveBackgroundColor: 'blue', 
                drawerStyle: { backgroundColor: 'pink' } ,
                headerStyle: {backgroundColor: '#C1E7E3'},
                title: 'Minhas Vacinas', // pode alterar para cada tela, entao se atentar
                headerTintColor: '#419ED7',

            }
                }
            >
           <Drawer.Screen name="HomeCard" component={HomeCard}  options={
                {
                    contentStyle:{backgroundColor: '#ADD4D0'},
                    
                }
           } 
           />
        </Drawer.Navigator>
    )
}

export default Home