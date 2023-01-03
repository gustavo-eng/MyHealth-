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
    //const {vacina, data, dose,urlImage,proximaVacina} = props.item.item
    const {item} = props?.item
    //console.log(props.item.item.data)

    const navigation = useNavigation()
    const editarVacinas = () => {
        navigation.navigate('EditarVacina', {dados : item})
    }

    console.log('Dados de cada card -> ')
    console.log(item)
    return (
            
        <TouchableOpacity  onPress={editarVacinas}>
            <View style={styles.container}>   

                <View>                 
                        <Text style={styles.nomeVacina}> {item?.vacina} </Text>
                        <View style={styles.containerDose}>
                            <Text style={styles.txtDose}> {item?.dose >= 1 ? `${item?.dose}a. dose` : 'Dose única' } </Text>
                        </View>
                        <Text style={styles.data}> {item?.data} </Text>
                        <Image 
                            source={require('../images/comprovanteVacina.jpg')}
                            style={styles.comprovante}
                        />          
                        <Text style={styles.proximaVacina}>Próxima dose em : {item?.proximaVacina} </Text>           
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
        fontSize: 20,
        //fontStyle: 'AveriaLibre-Bold',
    },
    data: {
        alignSelf: "center",
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
        fontSize: 10,
        fontFamily: 'AveriaLibre-Bold',  
    },
    proximaVacina : {
        color: 'red',
        alignSelf: "flex-end",
        fontSize: 11,
    },  
    comprovante : {
        height: 90,
        alignSelf: "center",
        width: '90%',
        resizeMode:"stretch",
    },


})  

export default CardVacina;