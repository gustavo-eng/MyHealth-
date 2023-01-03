import React from "react";

import {
    View, 
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';


import { listaVacinas } from "./HomeCard";


const ProximasVacinas = (props) => {

    const  goToEditarVacinas = () => {
        props.navigation.navigate('EditarVacina')
    }
    //retorno 
    const formatDataEnglish = (data) => {
        let parte = data.split("/")
        return new Date(parte[2], parte[1] - 1, parte[0]) 
    }
    
    
    // teste de verificacao   ---------------------------------------
    var strData = listaVacinas[0].proximaVacina;
    var partesData = strData.split("/");
    var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
    
    if(data < new Date()) {
        console.log('data da proxima menor')
    }
    if(data > new Date()) {
        console.log('data  proxima MAIOR')
        console.log(`configuraada ${data}`)
    }
    console.log(' ----------FILTER----------')
    const nextData = listaVacinas.filter(element => {
        let dataFormatada = element.proximaVacina
        let pieceData =  dataFormatada.split("/")
        let dataFinal = new Date(pieceData[2], pieceData[1] - 1, pieceData[0])
        if (dataFinal > new Date()) {
            return dataFinal
        }
        
    })
    console.log(`nextData -> ${nextData[1].vacina} `)
    const vetor = Array(nextData)
    console.log(`vetor especificado ${vetor[0]}`)
    
    // teste de verificacao   ---------------------------------------
    return (
        <View style={styles.principal}>

            <View>
                <Text style={styles.cards}>aqui vao os cards </Text>
                <Text style={styles.cards}>aqui vao os cards</Text>
                <Text style={styles.cards}>aqui vao os cards</Text>
            </View>
            <View style={styles.containerBTN}>
                
                        <TouchableOpacity style={styles.touch} onPress={goToEditarVacinas}>
                            <Text style={styles.txt}> Nova vacina </Text>
                        </TouchableOpacity>            
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    principal: {
        flex: 1,
        flexDirection: "column",
    },
    containerBTN: {
        marginTop: 50,
        alignSelf: "flex-end",
        width: '100%',    
        height: '12%',  
        //backgroundColor: 'red',
        marginBottom: 40,
        alignItems: "center",  
        
    }, 
    touch: {
        borderRadius: 5,
        marginTop: 5,
        padding: 0,
        width: '30%',
        height: '46%',
        alignItems: "center",
        backgroundColor: '#37BD6D',
        paddingTop: 6,
        elevation: 6,
    },
    txt : {
        
        color: 'white',
        textAlign: "center",
        fontWeight: "bold"
        
    },
    cards : {
        marginTop: 5,
        backgroundColor: 'green',
    }
})

export default ProximasVacinas;