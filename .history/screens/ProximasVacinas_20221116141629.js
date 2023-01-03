import React, {useEffect, useState} from "react";

import {
    View, 
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList
} from 'react-native';


//FlatList
import CardNextVacina from "../components/CardNextVacina";

//FireStore
import { db } from "../config/firebase";
import {collection, doc, onSnapshot, query, where} from 'firebase/firestore'

//Redux
import { useSelector } from "react-redux"; 

const ProximasVacinas = (props) => {

    const [vacinas, setVacinas] = useState([])  
    
    //Redux
    const email = useSelector((state) => state.login.email)

    const q = query(collection(db, "vacinas"), where("email", "==", email))
 
    useEffect(() => {
        console.log('Dentro de (ProximasVacinas.js)')
        onSnapshot(q, (result) => { // pode colocar a verificacao direto aqui !! 
            const listaDeVacinas = []
            result.forEach((doc) => { // poderia ser qualquer coisa alem de doc 
                listaDeVacinas.push({
                    // id: doc.id,
                    proximaData: doc.data().proximaData,
                    vacina: doc.data().vacina,   

                })  
            })
            const nextData = listaDeVacinas.filter(element => {
                let dataFormatada = element.proximaData
                let pieceData =  dataFormatada.split("/")
                let dataFinal = new Date(pieceData[2], pieceData[1] - 1, pieceData[0])
                if (dataFinal > new Date()) {
                    return element
                } 
            })    
            setVacinas(nextData)           
        })
    }, []) 
 
    return ( 
        <View style={styles.principal}>

            <FlatList 
                data={vacinas} 
                renderItem={(item) => <CardNextVacina item={item} />}
                numColumns={1}
            />
            <View style={styles.containerBTN}>             
                        <TouchableOpacity style={styles.touch} >
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
        alignSelf: "center",
        width: '100%',    
        height: '12%',  
        
        //backgroundColor: 'red',
        marginBottom: 40,
        alignItems: "center",  
        
    }, 
    touch: {
        borderRadius: 5,
        //marginTop: 5,
        padding: 0,
        width: '30%',
        height: '46%',
        alignItems: "center",
        backgroundColor: '#37BD6D',
        paddingTop: '2%',
        elevation: 6,
    },
    txt : {
        
        color: 'white',
        textAlign: "center",
        fontFamily: 'AveriaLibre-Bold',
        fontSize: 17,
        
    },
    cards : {
        marginTop: '5%',
        backgroundColor: 'green',
    }
})

export default ProximasVacinas;