import React, {useState} from "react";

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'


const Radio = (props) => {

    const {alternativas=[], horizontal = true, onChangeSelect, selected, rotulo} = props
    
    return (
        <View style={styles.horizontal}>
           <Text style={styles.label}> {rotulo} </Text> 
          {
            alternativas.map((alternativa, index) => (
                <TouchableOpacity onPress={() => onChangeSelect(alternativa, index)} style={styles.optContainer}>
                    <View style={styles.outLineCircle}>
                      {selected == index && <View style={styles.innerCircle}/> }  
                    </View>
                    
                    <Text style={styles.txt}> {alternativa} </Text>
                </TouchableOpacity>
            ))
          }
        </View>
    )
}


const styles = StyleSheet.create({
    optContainer : {
        width: 100,
        //backgroundColor: '#6495ed', 
        flexDirection : 'row',
        alignItems: 'center',
        paddingLeft: 10,
        marginRight: 1,
        marginBottom: 8, // alterado 29 / 09
    },
    label : {
        color: 'white',
        fontWeight: "bold",
    },
    outLineCircle: {    
        width: 17, 
        height: 17,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        
    },
    innerCircle: {
        width: 11, 
        height: 11,
        borderRadius: 9,
        backgroundColor: '#3F92C5',
    },
    txt : {
        color: 'white',
        fontWeight: "bold",
       
        
    },
    horizontal : {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: "wrap",
        
        
    }
})

export default Radio;




