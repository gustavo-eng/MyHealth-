import { Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MyDrawer from '../components/MyDrawer'
import MinhasVacinas from './MinhasVacinas'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeCard from './HomeCard'
import NovaVacina from './NovaVacina'
import ProximasVacinas from './ProximasVacinas'
import EditarVacina from './EditarVacina'

const Drawer = createDrawerNavigator()

const Home = (props) => {
    return (

        // <Drawer.Navigator drawerContent={(props) => <MyDrawer {...props} />} 

        <Drawer.Navigator/>} 
            screenOptions={
                { drawerActiveTintColor: 'orange', 
                //drawerActiveBackgroundColor: 'green', 
                //drawerInactiveBackgroundColor: 'blue', 
                //drawerStyle: { backgroundColor: 'pink' } ,
                headerStyle: {backgroundColor: '#C1E7E3'},
                title: 'Minhas Vacinas', // pode alterar para cada tela, entao se atentar
                headerTintColor: '#419ED7',
                sceneContainerStyle: {backgroundColor: '#ADD4D0'},               

            }}
            >
           <Drawer.Screen name="HomeCard" component={HomeCard}/>
           {/* <Drawer.Screen name="NovaVacina" component={NovaVacina}   />
           <Drawer.Screen name="ProximasVacinas" component={ProximasVacinas} />
           <Drawer.Screen name="EditarVacina" component={EditarVacina} /> */}
        </Drawer.Navigator>
    )
}

export default Home