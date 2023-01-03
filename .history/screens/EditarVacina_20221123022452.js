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
import { useEffect } from 'react';

//FireStore 
import { addDoc,collection,getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db, storage } from "../config/firebase";

// Storage upload de arquivos 
import { launchCamera, launchImageLibrary } from "react-native-image-picker"; 
import { uploadBytes, ref, getDownloadURL, deleteObject } from "firebase/storage"
import { async } from "@firebase/util";


//GeoLocation 
import MapView, {Marker} from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";

//Redux
import { useSelector } from "react-redux";

//Redux
import { useDispatch } from "react-redux";
import { reducerSetLogin } from "../redux/loginSlice";

const EditarVacina = (props) => {
    
   
    const [la, setLa] = useState(useSelector((state) => state.vacina.latitude))
    

    const [selected, setSelected] = useState(useSelector((state) => state.vacina.dose))
    const [modalVisible, setModalVisible] = useState(false) 
    const {setAlterou, alterou} = props.route.params
    
    //Storage 
    const [urlFoto, setUrlFoto] = useState(useSelector((state) => state.vacina.urlImage))
    const [pathFoto, setPathFoto] = useState(null)
    const [imagemSelecionada, setImagemSelecionada] = useState(false)
    
    //Geo Location 
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)



    const getPressedLocation = (e) => { // vai para tela editar  
        setLatitude(e.nativeEvent.coordinate.latitude)
        setLongitude( e.nativeEvent.coordinate.longitude)     
    }

    const showImagePicker = () => {
        console.log('Clicou no "Selecionar imagem..." ')
        launchImageLibrary()
        .then((result) => {
            setImagemSelecionada(true)
            console.log('showImagePicker realizado com sucesso ')
            setUrlFoto(result.assets[0].uri)
        }).catch((error) => {
            console.log('Erro ao carregar galeria ' + error)
            
        }) 
    }
    
    const [date, setDate] = useState(new Date()) 
    const [open, setOpen] = useState(false)
    const [data, setData] = useState(useSelector((state) => state.vacina.data))
    const [proximaData, setProximaData] = useState(useSelector((state) => state.vacina.proximaData))
    const  [nomeVacina, setNomeVacina] = useState(useSelector((state) => state.vacina.vacina))  

    //Teste com  Redux 
    useEffect(() => {
       
        console.log('-----------$$$$ REDUX em Editar Vacina --> NomeVacina --> ')
        console.log(nomeVacina)
        if(props.route.params?.id) {
            
            console.log('\n\n nothing ID --> ')
            console.log(props.route.params.id)
            getDoc(doc(db, "vacinas", props.route.params.id))
            .then((result) => {
                console.log('----- \n\n DENTRO DE getDoc (EditarVacina) carregou os DOC com sucesso -----> ')
                console.log(result.data().vacina)
                setNomeVacina(result.data().vacina)
                setProximaData(result.data().proximaData)
                setData(result.data().data)
                setPathFoto(result.data().pathFoto)
                setLatitude(result.data().latitude)
                setLongitude(result.data().longitude)
                
            }) 
        } 
        
        
    }, [])
    const editar = async (id) => {
        setAlterou(!alterou)
        const dados = await fetch(urlFoto)
        const blob = await dados.blob()
  
        console.warn('Entrou em Editar ----------------')
        uploadBytes(ref(storage, pathFoto), blob)
        .then((result) => {
            console.log('Arquivo alterado com sucesso')             
            updateDoc(doc(db, "vacinas", props.route.params?.id), {
                vacina: nomeVacina,
                data: data, 
                dose: selected, 
                urlImage: urlFoto,
                proximaData: proximaData,
                pathFoto: pathFoto,//filename, 
                latitude : latitude,
                longitude : longitude,
            })
            .then((result) => {
                console.log('\n Vacina Alterada com sucesso !!')
                props.navigation.pop()   
            })
            .catch((erro) => {
                console.log('Nao foi possivel alterar a vacina, ERROR -->')
                console.log(erro)
                console.log('erro em updateDoc')
            })
            
        }).catch((error) => {
            console.log('Ocorreu um erro ao editar ->' + error)
            console.log('erro em uploadBytes')
        })
    } 
    
    const exclusaoObjeto =  (id) => {
        
        
        setAlterou(!alterou) 
        setModalVisible(!modalVisible)
        console.log('DENTROOOO DE EXLUSAOOBJETO ')
        console.log(pathFoto) 
        // 10/11/2022 = pathFoto nao funcionou igual do professor 
        deleteObject(ref(storage, pathFoto)) 
        .then(() => {
            console.log('Objeto deletado com sucesso!! ')
            deleteDoc(doc(db, "vacinas",props.route.params.id))
            .then(() => {
                console.log('Dado deletado com sucesso!')
                props.navigation.pop()    
            })  
            .catch((erro) => {
                console.log('Nao foi possivel deletar o dado')
            }) 
            
        })
        .catch((erro) => {
            console.log('Nao foi possivel deletar o objeto' + erro)
        })
    }
 
    
    console.log(date.toDateString())
    console.log(`Formato da data ${date.toLocaleDateString('pt-br')}`)
    
    
    const [atualData, setAtualData] = useState(false) 
    const currentDate = () => {
        setAtualData(true)
        setOpen(true)  
    }
      
    
    // MODAL DE CONFIRMACAO
    const confirma = () => { 
        setModalVisible(true);   
    }     
    
    
    //const {dose, proximaVacina, vacina} = props.route.params.dados
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
    
                    <Text style={styles.inputDados}>{data ? data : null}</Text> 
                    <Image
                            style={styles.icone}
                            source={require('../images/calender.png')}
                    />
                </TouchableOpacity> 
            </View> 
            <View style={styles.caixaDeDados}>
                <Text style={styles.rotulos}> Vacina </Text>
                <TextInput style={styles.inputDados}  value={nomeVacina} onChangeText={setNomeVacina}/>
            </View>
            <View style={styles.radio}>

                <Radio 
                    
                    rotulo = 'Dose'
                    selected={selected < 0 ? setSelected(3) : selected } // vai  mostrar a options default
                    alternativas={['Dose única','1a. dose', '2a. dose','3a. dose']} 
                    horizontal={true}           

                    onChangeSelect={(alternativa, i) => {
                        setSelected(i)
                    }} 
                    
                />
            </View>
            <View style={styles.selecionaImagem}>
                <Text style={styles.rotulos}> Comprovante </Text>  
                <TouchableOpacity style={styles.imagem} onPress={showImagePicker}>
                    <Text style={styles.textImagem}> Selecionar imagem...</Text>
                </TouchableOpacity>
            </View>
            <Image
                style={{width: 200, height: 85, alignItems: "flex-end", marginLeft: 155 }}        
                //source={require('../images/comprovanteVacina.jpg')}
                source={
                    imagemSelecionada ? 
                        null
                    :   
                        {uri: urlFoto} // vem de useSelector 
                     
                }
            />
            <View style={styles.dataVacina}>
                <Text style={styles.rotulos}> Próxima vacinação </Text>
                <TouchableOpacity style={styles.btnCalender} onPress={() => setOpen(true)} >
               
                    <Text style={styles.inputDados}> {proximaData ? proximaData : null}</Text>
                    <Image
                            style={styles.icone}
                            source={require('../images/calender.png')}
                    />
                </TouchableOpacity>                
            </View>
                <View style= {styles.containerMaps}>
                <MapView 
                    onPress={(e) => getPressedLocation(e)}
                    loadingEnabled={true}
                        region={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.010,
                        longitudeDelta: 0.010
                        }} 
                        style={{flex:1, width: '100%'}} 
                    >
                        <Marker
                            coordinate={{latitude: latitude, longitude:longitude}}
                            pinColor={'#37BD6D'}
                            title={'Posição atual'}
                            
                        />
                </MapView>
                </View>
                <View style= {styles.containerCadastrar} >
                    <TouchableOpacity style= {styles.cadastrar} onPress={editar}> 
                        <Text style= {styles.txtCadastrar}> Salvar alterações</Text>
                    </TouchableOpacity>
                </View> 
                <View style={styles.containerExcluir}>
                        <TouchableOpacity style= {styles.excluir} onPress={confirma}>
                            <Text style= {styles.txtExcluir}>  Excluir </Text>
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
    containerMaps: {
        marginTop: '0.8%',
        marginBottom: -20,
        height: '37.2%',
        width: '99.5%',
        //backgroundColor: 'red',
    },
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
        marginBottom: -25,
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
        marginTop: -50,
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

 