//Gustavo Alexandre Dias 
// 22:36 
import React from "react";
import { View, Text,TextInput, StyleSheet } from 'react-native'

const MyInput = (props) => {

    
    return (
        
        <View>
            <Text style={styles.rotulo}> </Text>
            <TextInput  />
        </View>
    )
}

const styles = StyleSheet.create({
    rotulo: {
        fontSize: 50,
    },
    textInput : {
        fontSize: 25,
        borderWidth: 1,
        borderColor: 'red',
        borderTopColor: 'purple',
    
    }
})

export default MyInput; 