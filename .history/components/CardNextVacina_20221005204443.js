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
                <Text style={styles.txtName}> Teste nome </Text>
                <Text style={styles.txtData}> 10/02/2022 </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        marginTop: 8,
        flexDirection: "column",
        //backgroundColor: 'purple',
        marginHorizontal: 6,
    },
    conteudoContainer: {
        flexDirection: "column",
        height: 60,
        marginVertical: 4,
        backgroundColor: 'white',
        borderRadius: 6,
    },
    txtName : {
        backgroundColor: 'gray',
        borderRadius: 6,
    },  
    txtData : {
        backgroundColor: 'purple',
        marginTop: 30,
    },
})


export default CardNextVacina;