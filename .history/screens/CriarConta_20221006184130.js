import React, {useState} from "react";
import {
    View,
    Text, 
    TextInput,
    StyleSheet,
    TouchableOpacity,

} from 'react-native'

import Radio from "../components/Radio";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

/*
Promisse eh assincrona, entao precisa tratar o retorno com .then(), .catch()  e ou .finally()
*/

const CriarConta = (props) => {

    const [selected, setSelected] = useState(0)

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [sexo, setSexo]   = useState()


    const cadastrarNewUser = () => {
        createUserWithEmailAndPassword(auth, email, senha)
        .then( (userCredential) => { 
            console.log('Usuário adicionado com sucesso')
            console.log(JSON.stringify(userCredential))
        })
        .catch( (error) => {
            console.log('Ocorreu um erro ao cadastrar')
            console.log("Error" + error.message)
        })
        props.navigation.navigate('SignIn')
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
                    <Text style={styles.labels}> Data Nascimento </Text> 
                    <Text style={styles.labelsEmail}> E-mail </Text>
                    <Text style={styles.labelsSenha}> Senha </Text>
                    <Text style={styles.labels}>     Repetir senha </Text>   
                    <Text style={styles.aviso}>Senha não confere!</Text>
                    <TouchableOpacity style={styles.btnCadastrar} onPress={cadastrarNewUser}>
                        <Text style={styles.textoCadastrar}> Cadastrar </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.main}>
                    <TextInput style={styles.inputsNome}> nome </TextInput>
                    <TextInput style={styles.inputsData}> nascimento datePicker </TextInput>
                    <TextInput style={styles.inputsEmail} value={email} onChangeText={setEmail}/>
                    <TextInput style={styles.inputsEmail} value={senha} onChangeText={setSenha} secureTextEntry={true}/> 
                    <TextInput style={styles.inputsRepetirSenha}>repetir senha "pente fino"</TextInput> 
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
        
    },
    aviso: {
        color: '#FF8383',
        fontWeight: "bold",
        marginLeft: '25%',
        paddingLeft: 20,
        alignSelf: "flex-end",
        
    },
    labels: {
        borderColor: 'red',
        color: 'white',
        //backgroundColor: 'red',
        width: 115,
        marginBottom: 10,
        marginTop: 7.5,
        fontWeight:"bold",
    },
    labelsEmail : {
        borderColor: 'red',
        color: 'white',
        //backgroundColor: 'blue',
        width: 52,
        marginBottom: 10,
        marginTop: 10,
        fontWeight:"bold",
        marginLeft: 59,
    },
    labelsSenha: {
        borderColor: 'red',
        color: 'white',
        //backgroundColor: 'blue',
        width: 52,
        marginBottom: 10,
        marginTop: 10,
        fontWeight:"bold",
        marginLeft: 59,
    }, 
    inputsNome : {
        borderColor: 'red',
        backgroundColor: "white",
        width: 210,
        height: 21,
        marginLeft: -125,
        marginTop: 8,
        padding: 0,
        color: '#3F92C5',
        fontWeight: "bold",
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
        fontWeight: "bold",
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
        fontWeight: "bold",
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
        fontWeight: "bold",
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
        fontWeight: "bold",
        paddingRight: 0,
        paddingLeft: 5,
    }

})

export default CriarConta;
