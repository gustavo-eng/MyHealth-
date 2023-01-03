import React from "react";
import { 
    Button, 
    View,
    TouchableOpacity, 
    StyleSheet,
    Text
} from 'react-native'


const Botao = (props) => {

    
    return (
        <View>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.textButton}> Entrar </Text>
            </TouchableOpacity>
        </View>
    )   
}

const styles = StyleSheet.create({
        button: {
            width: 130,
            height: 30,
            borderRadius: 4,
            backgroundColor: '#37BD6D',
            marginTop: 39,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 140,
        },
        textButton: {
            fontWeight:"bold",
            color: 'white',
        }
})
export default Botao;