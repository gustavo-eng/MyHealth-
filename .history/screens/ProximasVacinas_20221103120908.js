import React, {useEffect, useState} from "react";

import {
    View, 
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList
} from 'react-native';


import { listaVacinas } from "./HomeCard";
import CardNextVacina from "../components/CardNextVacina";

//FireStore
import { db } from "../config/firebase";
import {collection, doc, onSnapshot, query} from 'firebase/firestore'

const ProximasVacinas = (props) => {

    const [vacinas, setVacinas] = useState([])  
    
    const q = query(collection(db, "vacinas"))

    useEffect(() => {
        console.log('Dentro de (ProximasVacinas.js)')
        onSnapshot(q, (result) => {
            const listaDeVacinas = []
            result.forEach((doc) => { // poderia ser qualquer coisa alem de doc 
                listaDeVacinas.push({
                    id: doc.id,
                    proximaData: doc.data().proximaData,
                    vacina: doc.data().vacina,   

                }) 
            })
            setVacinas(listaDeVacinas)
            console.log('\n\n\n\n\n Lista de Vacina FIRESTORE  (ProximasVacinas.js)--> ')
            console.log(listaDeVacinas)
            
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