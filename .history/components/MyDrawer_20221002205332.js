// Menu lateral customizado 
//import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"



import { 
    DrawerContentScrollView, // ppode ter varias entradas q precisa scrooller  
    DrawerItem, // representa cada linha que esta no navigator 
    DrawerItemList,  // consegue renderizar os elementos  
} from '@react-navigation/drawer'; 


const MyDrawer = (props) => {
    return (
        <DrawerContentScrollView>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    )
}