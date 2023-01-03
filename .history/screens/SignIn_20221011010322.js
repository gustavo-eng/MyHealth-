import React, { useEffect, useState } from "react";
import LinearGradient from 'react-native-linear-gradient';
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

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";



// shishido@hotmail.com 
// senha : shishido
//https://emojiterra.com/pt/injecao/
const SignIn = (props) => {
    
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [labelVerificaUser, setLabelVerificaUser] = useState(true)


    // useEffect(() => {
        
    // }, [])
    
    const criarMinhaConta = () => {
        props.navigation.navigate('CriarConta')
    }

    const goToRecoveryPassword = () => {
        props.navigation.push('RecuperarSenha')
    }
    
   

    const authUser = () => {
        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            console.log('Usuario autenticado com sucesso!!!!')
            setLabelVerificaUser(true)
            props.navigation.navigate('Home')      
        })
        .catch((error) => {
            setLabelVerificaUser(false)
            console.log('FALHA ao autenticar')
            console.log('Erro --> ' + error.message)
        })
    }
    
    return (
        <View style={styles.container}>
                <ImageBackground
                    source={require('../images/vacina5.jpg')}
                    style={styles.imagem}
                >
                    <LinearGradient style={styles.imagemBackgroundColor} 
                                  colors={[
                                    '#3f3f3f',
                                     '#949494', 
                                     '#a9a9a9',
                                     '#949494', 
                                     '#2c2c2c']
                                    } >
                    
                            <View style={styles.containerTitulo}>
                            
                                <Text style={styles.titulo}>
                                    <Image
                                        style={{width: 40, height: 40, marginRight: 8}}
                                        source={require('../images/siringa.png')}
                                        />
                                    
                                    MyHealphy
                                </Text>

                            </View>

                            <View style={styles.orientacao}> 
                                <Text style={styles.subTitulo}> Controle as suas vacinas e fique seguro </Text>
                                
                            </View>    
                            <View style={styles.dados}>
                                <View>
                                    <Text style={styles.emailText}> E-mail </Text>
                                    <TextInput style={styles.emailInput} value={email} onChangeText={setEmail}/>
                                </View>
                                <View style={styles.anotherCamp}>
                                    {/* referencia ao password */}
                                    <Text style={styles.emailText}> Senha </Text>
                                    <TextInput style={styles.emailInput} value={senha} onChangeText={setSenha} secureTextEntry={true} />
                                </View>
                                <View style={styles.containerWarning}>
                                <Text style={styles.txtWarning}>{labelVerificaUser ? '' : 'E-mail e/ou senha inválidos.'} </Text>
                                </View>
                                
                            </View>
                            <View style={styles.actionContainer}>
                                <View>
                                    <TouchableOpacity style={styles.button} onPress={authUser} >
                                        <Text style={styles.textButton}>Entrar</Text>
                                    </TouchableOpacity>
                                </View>

                                <TouchableOpacity style={styles.criarContaBotao}  /* Tirar (teste)*/  onPress={criarMinhaConta}>
                                    <Text style={styles.textCriarContaButton}> Criar minha Conta </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.forgotPasswordButton} onPress={goToRecoveryPassword}>
                                    <Text style={styles.forgotPasswordButtonText} > Esqueci minha senha </Text>
                                </TouchableOpacity>
                            </View>
                    </LinearGradient> 
                
                </ImageBackground>
            
        </View>
    )
}

const styles = StyleSheet.create({
    imagemBackgroundColor: {
        //backgroundColor: 'rgba(169,169,169, 0.60)', //'rgba(255, 255, 255, 0.62)'
        height: '100%',
        opacity: 0.91, 
                 
    },
    gradiente: { // verificar
        flex: 1,
        
        
    },
    container: {
        flex: 1,
        justifyContent: "center",
        flexDirection: 'column',
       
    },
    actionContainer : {
        //backgroundColor: 'red',
        flexDirection: "column",
        marginTop: '0%',
        height: '50%',
    }, 
    containerTitulo : {
        //backgroundColor: 'purple',
        flexDirection: "column",
        alignItems: "center",
        width: '100%',
    }, 
    imagem: {
        flex: 1,
        resizeMode:"cover",   
        backgroundColor: 'rgba(0,0,0,0)' , 
    },
    titulo: {
        textDecorationLine: "underline ",
        marginTop: '16%',
        fontSize: 40,
        fontFamily: 'AveriaLibre-Bold',
        color: '#419ED7', //#419ED7 
        
    },
    subTitulo: {
        marginTop: 65,
        marginLeft: 50,
        //backgroundColor: 'red',
        marginRight: 20,
        paddingBottom: 42,
        fontSize: 30,
        color: '#419ED7',        
        textAlign:"center",
        fontFamily: 'AveriaLibre-Bold',
    },
    criarContaBotao: {
            width: 160,
            height: 35,
            backgroundColor: '#419ED7', 
            alignItems: "center",
            justifyContent: "center",
            marginTop: '25%',
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
        marginTop: '27%',
        marginLeft: 125,
        borderRadius: 4,
        
    },
    forgotPasswordButtonText: {
        fontWeight:"bold",
        color: 'white',
        textAlign: "center",
    },
    emailInput: {
        fontSize: 14,
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
        paddingLeft: 5,
        elevation: 5,
    
        
    },
    emailText: {
        flex: 0,
        flexDirection: "row",
        marginTop: 5, 
        marginLeft: 25,
        color: "white",
        fontSize: 16,
        fontFamily: 'AveriaLibre-Bold',
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
    containerWarning : {
        marginTop: 2,
        marginLeft: 80,
    },
    txtWarning : {
        backgroundColor: 'blue',
        marginTop: '2%',
        color: 'rgba(253, 121, 121, 1)', 
        fontFamily: 'AveriaLibre-Bold',
    },
    orientacao : {
        //backgroundColor: 'purple',
        width: '100%',
    },
    
    
})


export default SignIn;


// parei em 53: 50 da aula de auth 



