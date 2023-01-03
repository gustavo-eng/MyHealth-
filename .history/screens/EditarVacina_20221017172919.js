import React, {useState} from "react";
import {
    View, 
    Text,
    TextInput,
    StyleSheet, 
    TouchableOpacity,
    Image,
    Modal,
    Pressable,
} from 'react-native';


import Radio from "../components/Radio";
import DatePicker from "react-native-date-picker";
import { listaVacinas } from "./HomeCard";

const EditarVacina = (props) => {
    console.log('executando date picker ')
    const [selected, setSelected] = useState((props.route.params.dados.dose) - 1 )
    const [modalVisible, setModalVisible] = useState(false)
    
    // DatePicker 
    const [date, setDate] = useState(new Date()) // nativo do componente
    const [open, setOpen] = useState(false)
    const [data, setData] = useState('')
    const [proximaData, setProximaData] = useState('')
    
    console.log(date.toDateString())
    console.log(`Formato da data ${date.toLocaleDateString('pt-br')}`)
   
    
    const [atualData, setAtualData] = useState(false)
    const currentDate = () => {
        setAtualData(true)
        setOpen(true)
    }
    
    const exclusaoObjeto = () => {
        console.log('Dentro de exclusaoObjeto --------------------------------')
        
        setModalVisible(!modalVisible)
    }
    
  
    const backHome = () => { // fase de teste para navegacao
        console.log('testando')
        props.navigation.pop()
    }
    
    // MODAL DE CONFIRMACAO
    const confirma = () => {
        setModalVisible(true);
        // listaVacinas.pop(props.route.params.dados.id -  1) // https://www.delftstack.com/pt/howto/javascript/javascript-remove-object-from-array/#:~:text=e%20filter()%20.-,Use%20o%20m%C3%A9todo%20splice()%20para%20remover%20um%20objeto%20de,adicionando%20novos%20elementos%20no%20local.
        // //console.log(props.route.params.dados.id) RETORNA UM VALOR INT   
        //listaVacinas.splice(listaVacinas.length - props.route.params.dados.id,1)
         console.log('-----------------  LISTA -----------------')
        // console.log(props.route.params.dados.id)
        listaVacinas.splice(props.route.params.dados.id, 1)
         console.log(listaVacinas)
    } 
    
    
    
    const {dose, proximaVacina, vacina} = props.route.params.dados
    
    
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
            

              <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    
                    <View style={styles.centeredView}>
                    
                                       
                    <View style={styles.modalView}>

                        <Text style={styles.modalText}>Tem certeza que deseja remover essa vacina ? </Text>
                        <View style={styles.containerBTNs}>
                            <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <TouchableOpacity onPress={exclusaoObjeto}>    
                                <Text style={styles.textStyle}>SIM</Text>
                            </TouchableOpacity>    
                            </Pressable>
                            <Pressable
                            style={[styles.button, styles.buttonCloseCancel]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyleCancel}>CANCELAR</Text>
                            </Pressable>
                        </View>
                    </View>
                    </View>
                </Modal>
            <View style={styles.dataVacina}>
                <Text style={styles.rotulos}>Data de Vacinação</Text>
                <TouchableOpacity style={styles.btnCalender} onPress={currentDate}>
    
                    <Text style={styles.inputDados}>{data ? data : props.route.params.dados.data}</Text> 
                    <Image
                            style={styles.icone}
                            source={require('../images/calender.png')}
                    />
                </TouchableOpacity>
            </View> 
            <View style={styles.caixaDeDados}>
                <Text style={styles.rotulos}> Vacina </Text>
                <TextInput style={styles.inputDados}>{props.route.params.dados.vacina}</TextInput>
            </View>
            <View style={styles.radio}>

                <Radio 
                    
                    rotulo = 'Dose'
                    selected={selected < 0 ? setSelected(3) : selected } // vai  mostrar a options default
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
                <TouchableOpacity style={styles.btnCalender} onPress={() => setOpen(true)} >
               
                    <Text style={styles.inputDados}> {proximaData ? proximaData : proximaVacina}</Text>
                    <Image
                            style={styles.icone}
                            source={require('../images/calender.png')}
                    />
                </TouchableOpacity>                
            </View>
            <View style= {styles.containerCadastrar} >
                <TouchableOpacity style= {styles.cadastrar} onPress={backHome}>
                    <Text style= {styles.txtCadastrar}> Salvar alterações </Text>
                    
                </TouchableOpacity>
            </View> 
            <View style={styles.containerExcluir}>
                    <TouchableOpacity style= {styles.excluir} onPress={confirma}>
                        <Text style= {styles.txtExcluir}>  Excluir</Text>
                        <Image 
                            style={styles.iconeTrash}
                            source={require('../images/trash.png')} 
                        />   
                    </TouchableOpacity>
                    
            </View>
        
        
     </View>
    )
}
const styles = StyleSheet.create({
    dateContainer: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: "center",
        justifyContent: "center",
    },
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
        fontFamily: 'AveriaLibre-Bold',   
        fontSize: 16,
        
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
        fontFamily: 'AveriaLibre-Bold',
        margin: 2,
    },
    cadastrar : {
        marginTop: '7%',
        backgroundColor: '#37BD6D',     
        borderRadius: 3,
        elevation: 6, 
        
    },
    txtCadastrar : {
        color: 'white',
        fontFamily: 'AveriaLibre-Bold',
        paddingHorizontal: 20,
        paddingVertical: 8,

    },
    containerCadastrar: {
        flexDirection: "column",
        //height: '50%',
        //backgroundColor: 'blue',
    },
    icone : {
        width: 20, 
        height: 20, 
        backgroundColor: 'white', 
        position: "absolute",
        alignSelf: "center",
        marginLeft: 175,     
        opacity: 0.45, 
        
    },
    iconeTrash : {
        marginTop: 5,
        width: 20, 
        height: 18,
        position: "absolute",    
        padding: 0,
        
        
    },
    btnCalender : {
        flexDirection: "row",
    },
    containerExcluir : { // view 
        
        flexDirection: "column",
        justifyContent:"flex-end",
        alignItems: "center",
        height: '20%',
        width: '36%',
        //backgroundColor: 'gray',
        
    },
    excluir :{ // touchableOpacity
        marginTop: '7%',
        alignItems: "flex-start",
        backgroundColor: '#FD7979',     
        borderRadius: 2,
        elevation: 4,
        paddingTop: 4,
        height: 30,
        width: 83, 
    },
    txtExcluir : { // text
        color: 'white', 
        fontFamily: 'AveriaLibre-Bold',
        paddingHorizontal: 14,       
        marginTop: 2,
        textAlign: "center",
    },
    centeredView: { // apartir daqui 
        flex: 1,
        //backgroundColor: 'gray',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        //width: 200,
      },
      modalView: {
        backgroundColor: 'gray',
        flexDirection: "column",
        margin: 0,
        backgroundColor: "white",
        borderRadius: 6,
        padding: 15, //mudando 
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: 250,
      },
      button: {
        borderRadius: 5,
        padding: 4,
        elevation: 2,
        width: 100,
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        //flexDirection: "row",
        backgroundColor: "#FF8383",
        margin: 2,
      },
      buttonCloseCancel: {
        backgroundColor: "#3F92C5",
        margin: 2,
      },
      textStyle: {
        color: "white",
        textAlign: "center",
        fontFamily: 'AveriaLibre-Bold',
      },
      textStyleCancel : {
        color: "white",
        fontFamily: 'AveriaLibre-Bold',
        textAlign: "center",
      },
      modalText: {
        marginBottom: 15,
        //flexDirection: "column",
        textAlign: "center",
        color: '#FD7979',
        fontFamily: 'AveriaLibre-Bold',
      },
      avisoModal : {
        backgroundColor: 'blue',
      },
      containerBTNs: {
        flexDirection: "row",
        //backgroundColor: 'blue',
        width: '100%',
        paddingLeft: 6,
      },    

})

export default EditarVacina;

/* 
// remove element at certain index without changing original
let arr = [0,1,2,3,4,5]
console.log('Arr original')
console.log(arr)
let newArr = [...arr]
arr.splice(1,1)//remove 1 element from index 1 (indice do elemento a ser excluido, quantidade de elementos)
console.log(arr) // [0,1,2,3,4,5]

*/