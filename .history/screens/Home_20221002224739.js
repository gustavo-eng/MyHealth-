import { Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MyDrawer from '../components/MyDrawer'
import MinhasVacinas from './MinhasVacinas'

const Drawer = createDrawerNavigator()

const Home = (props) => {
    return (
        <Drawer.Navigator drawerContent={(props) => <MyDrawer {...props} />} screenOptions={{ drawerActiveTintColor: 'orange', drawerActiveBackgroundColor: 'green', drawerInactiveBackgroundColor: 'blue', drawerStyle: { backgroundColor: 'pink' } }}>
           <Drawer.Screen name="MinhasVacinas" component={MinhasVacinas} />
        </Drawer.Navigator>
    )
}

export default Home