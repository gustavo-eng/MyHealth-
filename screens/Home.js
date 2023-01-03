import {  Image } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MyDrawer from '../components/MyDrawer'

import HomeCard from './HomeCard'

import ProximasVacinas from './ProximasVacinas'


const Drawer = createDrawerNavigator()

const Home = (props) => {
    return (

        <Drawer.Navigator drawerContent={(props) => <MyDrawer {...props} />} 
 
             screenOptions={
                 { drawerActiveTintColor: '#5ab3ec',
                    drawerLabelStyle: {color: '#419ED7', fontFamily: 'AveriaLibre-Bold', fontSize: 15}, 
                    drawerStyle: { backgroundColor: '#ADD4D0' } ,
                    headerStyle: {backgroundColor: '#C1E7E3'},
                    title: 'Minhas Vacinas', 
                    headerTitleStyle: {fontFamily: 'AveriaLibre-Bold', fontSize: 25},
                    headerTintColor: '#419ED7',
                    sceneContainerStyle: {backgroundColor: '#ADD4D0'},               
                drawerIcon: () => (<Image
                                        style={{width: 20, height: 25, marginRight: -25}}
                                        source={require('../images/siringa.png')}
                                    />
                                  )
            }}
            >
           <Drawer.Screen name="HomeCard" component={HomeCard}/>
           <Drawer.Screen name="ProximasVacinas" component={ProximasVacinas} 
            options={{
                title: 'Próximas vacinas',
                drawerIcon: () => (<Image style={{width: 20, height: 20, marginRight: -25}}
                                   source={require('../images/calender.png')}   />
                                   )
            }}
           /> 
        </Drawer.Navigator>
    )
}



export default Home