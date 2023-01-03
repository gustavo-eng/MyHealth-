import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { 
    View, 
    Text, 
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
    Modal, 
    Pressable,
 } from "react-native";  
import Botao from "../components/Botao";



//https://emojiterra.com/pt/injecao/
const SignIn = (props) => {
    

    useEffect(() => {
        
    }, [])
    
    const criarMinhaConta = () => {
        props.navigation.navigate('CriarConta')
    }

    const goToRecoveryPassword = () => {
        props.navigation.navigate('RecuperarSenha')
    }
    
    // esse entrar para proximas vacinas e apenas teste 
    
    const entrarProximasVacinas = () => {
        props.navigation.navigate('ProximasVacinas')
    }

    //<Container colors={["red","blue", "yellow"]} style={styles.gradiente}>
    //</Container>
    return (
        <View style={styles.container}>
                

                <ImageBackground
                    source={require('../images/vacina4.jpg')}
                    style={styles.imagem}
                >
                    
                    <Text style={styles.titulo}>
                    <Text style={styles.iconeSiringa}>💉</Text>
                        MyHealphy 
                    </Text> 
                    <Text style={styles.subTitulo}> Controle as suas vacinas  ㅤㅤ  e fique seguro </Text>
                    <View style={styles.dados}>
                        <View>
                            <Text style={styles.emailText}> E-mail </Text>
                            <TextInput style={styles.emailInput}></TextInput>
                        </View>
                        <View style={styles.anotherCamp}>
                            {/* referencia ao password */}
                            <Text style={styles.emailText}> Senha </Text>
                            <TextInput style={styles.emailInput}></TextInput>
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.button} >
                            <Text style={styles.textButton}> Entrar </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.criarContaBotao}  /* Tirar (teste)*/  onPress={criarMinhaConta}>
                        <Text style={styles.textCriarContaButton}> Criar minha Conta </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.forgotPasswordButton} onPress={goToRecoveryPassword}>
                        <Text style={styles.forgotPasswordButtonText} > Esqueci minha senha </Text>
                    </TouchableOpacity>
                
                </ImageBackground>
            
        </View>
    )
}

const styles = StyleSheet.create({
    gradiente: { // verificar
        flex: 1,
        
        
    },
    container: {
        flex: 1,
        justifyContent: "center",
        flexDirection: 'column',
        

        
    },
    imagem: {
        flex: 1,
        resizeMode:"cover",  
        backgroundColor: 'rgba(0,0,0,0)' , 
    },
    titulo: {
        textDecorationLine: "underline ",
        marginTop: 50,
        marginLeft: 100,
        fontSize: 35,
        fontWeight:"bold",
        color: '#419ED7',
        
    },
    iconeSiringa: {
       // formatar ainda 
    },

    subTitulo: {
        flex: 0,
        fontStyle: "italic",
        marginTop: 75,
        marginLeft: 30,
        marginRight: 15,
        paddingBottom: 69,
        fontSize: 30,
        fontWeight:"bold",
        color: '#419ED7',
    },
    criarContaBotao: {
            width: 160,
            height: 35,
            backgroundColor: '#419ED7',
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
            marginLeft: 125,
            borderRadius: 4,
    },
    textCriarContaButton: {
        fontWeight:"bold",
        color: 'white',
    },
    forgotPasswordButton: {
        width: 160,
        height: 25,
        backgroundColor: '#B5C7D1',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 65,
        marginLeft: 125,
        borderRadius: 4,
    },
    forgotPasswordButtonText: {
        fontWeight:"bold",
        color: 'white',
    },
    emailInput: {
        fontSize: 12,
        fontWeight:"bold",
        width: 250,
        height: 28,
        borderWidth: 2,
        borderColor: 'white',
        marginLeft: 80,
        backgroundColor: "white",
        position: "absolute",
        padding: 0,
        color: '#419ED7',
        
    },
    emailText: {
        flex: 0,
        flexDirection: "row",
        marginTop: 5, // aqui ta renderizando
        marginLeft: 25,
        color: "white",
        fontSize: 15,
    },
    anotherCamp: {
        marginTop: 20,
    },
    dados: {
        marginLeft: 15,
    },
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
    },
    
})


export default SignIn;






