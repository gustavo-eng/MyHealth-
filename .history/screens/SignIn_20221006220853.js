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



import { signInWithEmailAndPassword } from "firebase/auth";

//https://emojiterra.com/pt/injecao/
const SignIn = (props) => {
    
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

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

    const authUser = () => {
        props.navigation.navigate('Home') // testanto 
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
                            
                     <Text style={styles.iconeSiringa}>  
                     <Image
                        style={{width: 40, height: 40, marginRight: 8}}
                        source={require('../images/siringa.png')}
                        />
                     
                     MyHealphy </Text>

                    </Text>
                    <View style={styles.orientacao}> 
                        <Text style={styles.subTitulo}> Controle as suas vacinas e fique seguro </Text>
                        
                    </View>    
                    <View style={styles.dados}>
                        <View>
                            <Text style={styles.emailText}> E-mail </Text>
                            <TextInput style={styles.emailInput}></TextInput>
                        </View>
                        <View style={styles.anotherCamp}>
                            {/* referencia ao password */}
                            <Text style={styles.emailText}> Senha </Text>
                            <TextInput style={styles.emailInput} secureTextEntry={true} ></TextInput>
                        </View>
                        <View style={styles.containerWarning}>
                        <Text style={styles.txtWarning}>E-mail e/ou senha inválidos. </Text>
                        </View>
                        
                    </View>

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
    subTitulo: {
        fontStyle: "italic",
        marginTop: 65,
        marginLeft: 50,
        //backgroundColor: 'red',
        marginRight: 20,
        paddingBottom: 42,
        fontSize: 30,
        fontWeight:"bold",
        color: '#419ED7',        
        textAlign:"center",
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
        marginTop: 75,
        marginLeft: 125,
        borderRadius: 4,
        
    },
    forgotPasswordButtonText: {
        fontWeight:"bold",
        color: 'white',
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
        fontSize: 15,
        fontWeight: "bold",
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
        color: '#f44336', 
        fontWeight: "bold",
    },
    orientacao : {
        //backgroundColor: 'purple',
        width: '100%',
    },
    
    
})


export default SignIn;






