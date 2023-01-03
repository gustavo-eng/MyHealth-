import React, {useState} from "react";

import {

    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,

} from 'react-native';

//import EditarVacina from "../screens/EditarVacina"; 
import { useNavigation } from "@react-navigation/native";
const CardVacina = (props) => { 
    const [alterou, setAlterou] = useState(false)
    const {item} = props?.item

    const navigation = useNavigation()

    const editarVacinas = (id, urlImage) => {   
        props.navigation.navigate('EditarVacina', {dados : item, setAlterou, alterou, id: id, urlImage : urlImage})
    } 

    console.log('Dados de cada card -> ')
    console.log(item)
    return (
            
        <TouchableOpacity  onPress={() => editarVacinas(item.id, item.urlImage)}>
            <View style={styles.container}>   

                <View>                 
                        <Text style={styles.nomeVacina}> {item?.vacina} </Text>
                        <View style={styles.containerDose}>
                            <Text style={styles.txtDose}> {item?.dose >= 1 && item?.dose < 4? `${item?.dose}a. dose` : 'Dose única' } </Text>
                        </View>
                        <Text style={styles.data}> {item?.data} </Text>
                        <Image 
                            //source={require('../images/comprovanteVacina.jpg')} 
                            source={{uri: item?.urlImage}}
                            style={styles.comprovante}
                        />          
                        <Text style={styles.proximaVacina}>Próxima dose em : {item?.proximaData}</Text>           
                    </View>  
                    
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: (Dimensions.get('window').width/2)-10,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 6,
    },
    nomeVacina : {
        color: '#3F92C5',
        //fontWeight:"bold",
        alignSelf: "center",
        marginBottom: 2,
        fontSize: 24,
        fontFamily: 'AveriaLibre-Bold',
    },
    data: {
        marginVertical: 3.8,
        alignSelf: "center",
        fontFamily: 'AveriaLibre-Bold',
    },
    containerDose : {
        borderRadius: 4,
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: '#3F92C5',
        width: '45%',
    },  
    txtDose : {
        color: 'white',
        padding: 1,
        fontSize: 14,
        fontFamily: 'AveriaLibre-Bold',  
    },
    proximaVacina : {
        color: 'rgba(253, 121, 121, 1)',
        alignSelf: "flex-end",
        fontSize: 11,
        fontFamily: 'AveriaLibre-Bold'
    },  
    comprovante : {
        height: 90,
        alignSelf: "center",
        width: '90%',
        resizeMode:"stretch",
    },


})  

export default CardVacina;