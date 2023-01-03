import React, {useState} from "react";
import {
    View,
    Text, 
    TextInput,
    StyleSheet,
    TouchableOpacity,

} from 'react-native'

import Radio from "../components/Radio";

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../config/firebase";
import { withRepeat } from "react-native-reanimated";


const CriarConta = (props) => {

    const [selected, setSelected] = useState(0)

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [repeatPassword,setReatPassword ] = useState('')
    const [booleanRepeatDiferente, setBooleanRepeatDiferente] = useState(false)
    const [sexo, setSexo]   = useState()
       
    // const fraseNaoConfere = () => { 
    //     return 'slaaa'
    // }

    console.log(() => fraseNaoConfere)
    
    const cadastrarNewUser = () => {
        if (repeatPassword == senha) { // englobar dentro de cadastrarNewUser 
            console.log('repeatPassword == senha') 
        } else {
            console.log('repeatPassword != senha')
            setBooleanRepeatDiferente(true) 
        }
        createUserWithEmailAndPassword(auth, email, senha)
        .then( (userCredential) => {
            console.log("Usuário adicionado com sucesso!")
            props.navigation.navigate('SignIn')
            //props.navigation.pop()
        })
        .catch( (error) => {
            console.log("Ocorreu um erro ao cadastrar usuário")
            console.log("Erro: " + error.message)
        })
        
    }    
    
    return (  
      
         <View style={styles.container}>
                <View style={styles.main}>
                    <Text style={styles.labels}> Nome completo </Text>
                    
                    <Radio 
                        selected={selected} // vai  mostrar a options default
                        alternativas={['Masculino', 'Feminino']} 
                        horizontal={true}
                        rotulo = 'Sexo' 
                        wrap = {10}
                        // PARA entrega, pode nao precisar do alert 
                        onChangeSelect={(alternativa, i) => {
                            setSelected(i)
                        }}
                    />
                    <Text style={styles.labelsBorn}> Data Nascimento </Text> 
                    <Text style={styles.labelsEmail}> E-mail </Text>
                    <Text style={styles.labelsSenha}> Senha </Text>
                    <Text style={styles.labelsRepetir}>   Repetir senha </Text>   
                    <Text style={styles.aviso}>{booleanRepeatDiferente ? `Senha não confere!`: '' }</Text>
                    <TouchableOpacity style={styles.btnCadastrar} onPress={cadastrarNewUser}>
                        <Text style={styles.textoCadastrar}> Cadastrar </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.main}>
                    <TextInput style={styles.inputsNome} />
                    <TouchableOpacity>blz </TouchableOpacity> 
                    <TextInput style={styles.inputsData}></TextInput>
                    <TextInput style={styles.inputsEmail} value={email} onChangeText={setEmail}/>
                    <TextInput style={styles.inputsEmail} value={senha} onChangeText={setSenha} secureTextEntry={true}/> 
                    <TextInput style={styles.inputsRepetirSenha} value={repeatPassword} onChangeText={setReatPassword} secureTextEntry={false} /> 
               </View>
        </View>      
    )
}
 
// precisa dar espacemento margimTop no .container
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        borderColor: 'red',
        marginTop: 90, // aqui vai ser centralizado 
    },
    main: {
       // afim de organizacao
       //backgroundColor: 'blue', 
    },
    aviso: {
        //backgroundColor: 'red',
        color: '#FF8383',
        fontWeight: "bold",
        marginLeft: '25%',
        paddingLeft: 20,
        alignSelf: "flex-end",
        textAlign: "right",      
        
    },
    labels: {
        borderColor: 'red',
        color: 'white',
        //backgroundColor: 'red',
        width: 115,
        marginBottom: 10,
        marginTop: 6,
        fontFamily: 'AveriaLibre-Bold',
        
    },
    labelsRepetir: {
        //backgroundColor: 'purple',
        color: 'white',
        width: 125,
        marginBottom: 10,
        marginTop: 21,
        fontFamily: 'AveriaLibre-Bold',
    },
    labelsBorn: {
        //backgroundColor: 'purple',
        color: 'white',
        width: 125,
        marginBottom: 10,
        marginTop: 10,
        fontFamily: 'AveriaLibre-Bold',
         
    },
    labelsEmail : {
        
        color: 'white',
        //backgroundColor: 'blue',
        width: 52,
        marginBottom: 2,
        marginTop: 15,
        fontFamily: 'AveriaLibre-Bold',
        marginLeft: 59,
    },
    labelsSenha: {
        
        color: 'white',
        //backgroundColor: 'blue',
        width: 52,
        marginBottom: 2,
        marginTop: 19,
        fontFamily: 'AveriaLibre-Bold',
        marginLeft: 59,
    }, 
    inputsNome : {
        //borderColor: 'red',
        backgroundColor: "white",
        width: 210,
        height: 21,
        marginLeft: -125,
        marginTop: 8,
        padding: 0,
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Bold',
    },
    inputsData: {
        borderColor: 'red',
        backgroundColor: "white",
        width: 210,
        height: 21,
        marginLeft: -125,
        marginTop: 45,
        marginTop: 39,
        padding: 0,
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Bold',
    },
    inputsEmail: {
        borderColor: 'red',
        backgroundColor: "white",
        width: 210,
        height: 21,
        marginLeft: -127,
        marginTop: 45,
        marginTop: 19,
        padding: 0,
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Bold',
    }, // adequar com text - E-mail 
    inputsRepetirSenha: {
        
        backgroundColor: "white",
        width: 210,
        height: 21,
        marginLeft: -125,
        marginTop: 45,
        marginTop: 17,
        padding: 0,
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Bold',
    },
    btnCadastrar: {
        backgroundColor: "#49B976",
        width: 100,
        height: 30,
        marginTop: 200,
        marginLeft: 110,
        borderRadius: 3,
        elevation: 5,

        
    },
    textoCadastrar : {
        color: 'white',
        marginLeft: 10,
        marginTop: 5,
        textAlignVertical: "center",
        fontFamily: 'AveriaLibre-Bold',
        paddingRight: 0,
        paddingLeft: 5,
    }

})

export default CriarConta;
