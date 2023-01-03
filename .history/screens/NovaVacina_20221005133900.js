import React, {useState} from "react";
import {
    View, 
    Text,
    TextInput,
    StyleSheet, 
    TouchableOpacity,
    Image,
    

} from 'react-native';

import Radio from "../components/Radio";
import DatePicker from "react-native-date-picker";
import { listaVacinas } from "./HomeCard";

const NovaVacina = (props) => {

    const [selected, setSelected] = useState(0)

    // teste de comparacao 
    let d1 = new Date()

    if(listaVacinas[0].proximaVacina < d1.getDate('pt-br')){
        console.log(` ${listaVacinas[0].proximaVacina} e menor que ${d1.toLocaleString('pt-br')}`)
    } else {
        console.log(` ${listaVacinas[0].proximaVacina} e MAIOR que ${d1.toLocaleString('pt-br')}`)
    } 
    // Date picker 

    const goToCriarConta = () => { // apenas para teste
        props.navigation.navigate('ProximasVacinas') 
    } 

    return (
        <View style={styles.container}>
           <View style={styles.dataVacina}>
                <Text style={styles.rotulos}> Data de Vacinação</Text>
                <TouchableOpacity style={styles.btnCalender}>
                    <Text style={styles.inputDados}> data formatada aqui </Text>
                    <Image
                            style={styles.icone}
                            source={require('../images/calender.png')}
                    />
                </TouchableOpacity>
           </View> 
           <View style={styles.caixaDeDados}>
                <Text style={styles.rotulos}> Vacina </Text>
                <TextInput style={styles.inputDados}> calendario </TextInput>
           </View>
           <View style={styles.radio}>
                <Radio 
                    rotulo = 'Dose'
                    selected={selected} // vai  mostrar a options default
                    alternativas={['1a. dose', '2a. dose','3a. dose', 'Dose única']} 
                    horizontal={true} 
                    // PARA entrega, pode nao precisar do alert 
                    onChangeSelect={(alternativa, i) => {
                        setSelected(i)
                    }}
                    
                />
            </View>
            <View style={styles.selecionaImagem}>
                <Text style={styles.rotulos}> Comprovante </Text>
                <TouchableOpacity style={styles.imagem}>
                    <Text style={styles.textImagem}> Selecionar imagem...</Text>
                </TouchableOpacity>
           </View>
           <Image
                style={{width: 200, height: 85, alignItems: "flex-end", marginLeft: 155 }}
                      source={require('../images/comprovanteVacina.jpg')}
            />
            <View style={styles.dataVacina}>
                <Text style={styles.rotulos}> Próxima vacinação </Text>
                <TouchableOpacity style={styles.btnCalender}>
                    <Text style={styles.inputDados}> data formatada aqui </Text>
                    <Image
                            style={styles.icone}
                            source={require('../images/calender.png')}
                    />
                </TouchableOpacity>                
           </View>
           <View style= {styles.containerCadastrar} >
                <TouchableOpacity style= {styles.cadastrar} onPress={goToCriarConta}>
                    <Text style= {styles.txtCadastrar}> Cadastrar </Text>         
                </TouchableOpacity>
           </View>           
           
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        //backgroundColor: 'blue',
        marginTop: 50,
        flex: 1, 
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection:"column", 
         
        
    },
    caixaDeDados: {
        marginBottom: 10,
        marginTop: 8,
        //backgroundColor: 'red',
        marginRight: 3,
        flexDirection: "row",
        alignContent:"center",
        
    },
    dataVacina: {
        marginBottom: 10,
        marginTop: 6,
        marginLeft: 10,
        //backgroundColor: 'red',
        flexDirection: "row",
        alignContent:"center",
        alignSelf: "flex-start",
    },
    selecionaImagem: {
        marginBottom: 10,
        marginTop: 15,
        //backgroundColor: 'red',
        marginRight: 3,
        flexDirection: "row",
        alignContent:"center",
    },

    rotulos: {
        //flexDirection:"row",
        fontWeight: "bold",
        color: 'white',
        marginRight: 8,
    },
    inputCalender: {
        //flexDirection:"row",
        backgroundColor: 'white',
        width: 160,
        height: 25,
        padding: 0,

    },
    inputDados : {
        flexDirection:"row",
        backgroundColor: 'white',
        width: 200,
        height: 25,
        padding: 3,
        color: '#3F92C5',   
        fontWeight: "bold",    
        
    },  
    radio:{
        marginLeft: 70,
        marginRight: 2,
    },
    imagem : {
        backgroundColor: '#419ED7',
        borderRadius: 4,
        elevation: 6,
    }, 
    textImagem: {
        color: 'white',
        fontWeight: "bold",
        margin: 2,
    },
    cadastrar : {
        marginTop: '35%',
        backgroundColor: '#37BD6D',     
        borderRadius: 3,
        elevation: 4, 
        
    },
    txtCadastrar : {
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingVertical: 8,

    },
    containerCadastrar: {
        flexDirection: "column",
        height: '100%',
    },
    icone : {
        width: 20, 
        height: 20, 
        backgroundColor: 'white', 
        position: "absolute",
        alignSelf: "flex-end",
        marginLeft: 175,      
        
    },
    btnCalender : {
        flexDirection: "row",
    }
})

export default NovaVacina; 

