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
import moment from "moment";
import { types } from "@babel/core";
const NovaVacina = (props) => {

    const [selected, setSelected] = useState(0)
    
    const [date, setDate] = useState(new Date()) // nativo do componente
    const [open, setOpen] = useState(false)
    const [data, setData] = useState('')
    const [proximaData, setProximaData] = useState('')

    // diferenciacao entre data atual e proxima data
    const [atualData, setAtualData] = useState(false)
    const currentDate = () => {
        setAtualData(true)
        setOpen(true)
    }

    

    return (
        <View style={styles.container}>
            { (open)? (
                <DatePicker
                modal={true}
                open={open}
                date={date}
                mode="date"
                textColor="#3F92C5" 
                title={ atualData ? 'Alterar data atual da vacina ' : 'Próxima vacina'}
                locale='pt-br'
                              
                //is24hourSource="device"
                onConfirm={(date) => {
                  setOpen(false) // alterar aqui para diferenca
                  setDate(date) 
                  if(atualData) { 
                     //setData((date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()))
                     setData(date.toLocaleDateString('pt-br'))
                     setAtualData(false)
                  } else {
                     setProximaData(date.toLocaleDateString('pt-br'))
                  }
                  
                }}

                onCancel={() => {             
                    setOpen(false)
                }}   
              />
              ): null
                    
            }
           <View style={styles.dataVacina}>
                <Text style={styles.rotulos}> Data de Vacinação</Text>
                <TouchableOpacity style={styles.btnCalender} onPress={currentDate}>
                    <Text style={styles.inputDados}>{data}</Text>
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
                <TouchableOpacity style={styles.btnCalender} onPress={() => setOpen(true)}>
                    <Text style={styles.inputDados}>{proximaData}</Text>
                    <Image
                            style={styles.icone}
                            source={require('../images/calender.png')}
                    />
                </TouchableOpacity>                
           </View>
           <View style= {styles.containerCadastrar} >
                <TouchableOpacity style= {styles.cadastrar} >
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
        fontFamily: 'AveriaLibre-Bold',
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
        height: 21, 
        backgroundColor: 'white', 
        position: "absolute",
        alignSelf: "flex-end",
        marginLeft: 175,    
        opacity: 0.6,  
        
    },
    btnCalender : {
        flexDirection: "row",
        
        
    }
})

export default NovaVacina; 

