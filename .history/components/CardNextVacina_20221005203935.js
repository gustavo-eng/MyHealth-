import React from "react";

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,

} from 'react-native'


const CardNextVacina = (props) => {

    const {item} = props?.item


    return (
        <View  style={styles.container}>
            <View style={styles.conteudoContainer}>
                <Text style={styles.txt}> Teste nome </Text>
                <Text> 10/02/2022 </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: "column",
        //backgroundColor: 'purple',
    },
    conteudoContainer: {
        marginVertical: 6,
        backgroundColor: 'white',
        borderRadius: 15,
    },
    txt : {
        backgroundColor: 'red',
    },  
})


export default CardNextVacina;