import React, { useState } from "react";
import { 
    View, 
    Text, 
    Button,
    TextInput,
    StyleSheet,
    TouchableOpacity
    
} from "react-native";  

import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebase";


const RecuperarSenha = (props) => {
    
    const [email, setEmail] = useState()
    
    console.log('esqueci minha senha')

    const recuperar = () => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log('Email de redefinição enviado com sucesso!! ')
            props.navigation.pop()
        })
        .catch((erro) => {
            console.log('Erro ao enviar email de redefinicao ...')
            console.log(erro)
        })
    }
    return (
       <View> 
            <View style={styles.container}>
                <Text style={styles.emailRecoverText} > E-mail </Text>
                <TextInput style={styles.emailRecoverInput} value={email} onChangeText={setEmail} />
            </View>
            <TouchableOpacity style={styles.botaoRecuperar} onPress={recuperar}>
                <Text style={styles.textoRecuperar}> Recuperar Senha  </Text>
            </TouchableOpacity>
       </View>  
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 275,
        flexDirection: "row",
        justifyContent: "center",
        
    },
    emailRecoverText: {
        //backgroundColor: 'red',
        width: 56,
        height: 30,
        textAlign: "center",
        alignSelf: "flex-start",
        color: 'white',
        paddingTop: 5,
        fontFamily: 'AveriaLibre-Bold',
    },
    emailRecoverInput: {
        backgroundColor: 'white',
        padding: 2,
        height: 30,
        width: 280,
        color: "#3F92C5",
    },
    botaoRecuperar: {
        backgroundColor: "#49B976",
        width: 135,
        height: 30,
        // marginTop: 200,
        // marginLeft: 140,
        borderRadius: 3,
        elevation: 5,
        alignSelf: "flex-end",
    },
    textoRecuperar: {
        color: 'white',
        marginTop: 6,
        textAlign: "center",
        fontFamily: 'AveriaLibre-Bold',
    }

})

export default RecuperarSenha;


