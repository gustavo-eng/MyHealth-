import React, {useEffect, useState} from "react";
import {     
    View,
    Text, 
    StyleSheet,
    FlatList,
    TextInput,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    SafeAreaView,
} from 'react-native';

import CardVacina from "../components/CardVacina";

export const listaVacinas = [ 
    {
      id: 0,  
      vacina: 'BCG',
      data: '21/09/2022',
      dose: 2,
      urlImage: 'http://',
      proximaVacina: '20/12/2022',
    },
    
    {
      id: 1,  
      vacina: 'Hepatite B',
      data: '21/09/2022',
      dose: 1,
      urlImage: 'http://',
      proximaVacina: '23/09/2022',
    },
    {
        id: 2,
        vacina: 'DTpa',
        data: '21/09/2022',
        dose: 3,
        urlImage: 'http://',
        proximaVacina: '20/12/2022',
    },
    {  
        id: 3,
        vacina: 'Sarampo',
        data: '21/09/2022',
        dose: 0,
        urlImage: 'http://',
        proximaVacina: '03/12/2022',
    },
     
]

//Redux 
import { useSelector } from "react-redux";

//FireStore 
import { db } from "../config/firebase";
import {collection, doc, onSnapshot, query} from 'firebase/firestore'

const HomeCard = (props) => { 
    const [busca, setBusca] = useState('') 
    //fireStore
    const q = query(collection(db, "vacinas"))
    
    //Teste Redux
    const email = useSelector((state) => state.login.email)
    const password = useSelector((state) => state.login.password)
    const identificador = useSelector((state) => state.login.id)

    useEffect(() => {
        console.log('\n \n aqui sera printado os dados de login vindo do redux \n \n')
        console.log(`email - ${email}, Senha: ${password} e id = ${identificador}`)
        onSnapshot(q, (result) => {
            const listaDeVacinas = []
            result.forEach((doc) => { // poderia ser qualquer coisa alem de doc 
                listaDeVacinas.push({ 
                    id: doc.id,
                    data: doc.data().data,
                    dose: doc.data().dose,
                    proximaData: doc.data().proximaData,
                    urlImage: doc.data().urlImage, // pode NAO PRECISAR E TRAVAR O SISTEMA !!
                    vacina: doc.data().vacina,   
                }) 
            })
            setVacinas(listaDeVacinas)
          
             
        })
    }, [])

    //fireStore 
    const [vacinas, setVacinas] = useState([])
    const goToNovaVacina = () => {
        props.navigation.push('NovaVacina')
    } 
   
    return (
            <KeyboardAvoidingView keyboardVerticalOffset={5} behavior={'height'} style={{flex: 1}}>
                <View style={styles.main}>
                    <View > 
                        <View style={styles.containerPesquisa}> 
                            <View style={styles.search}>
                                <View style={styles.pesquisa}> 
                                    <Image 
                                        style={styles.iconePesquisa}
                                        source={require('../images/lupa.png')}
                                    />       
                                    <TextInput placeholder="  PESQUISAR VACINA..." style={styles.textoEntrada} value={busca} onChangeText={setBusca}/>    
                                </View>    
                                     
                                </View>
                            </View>
                            <View style={styles.containerFlatList}>
                                 
                                    <View style={styles.scrollView}>
                                        <FlatList 
                                            //data={vacinas}                               
                                            data={
                                                vacinas.filter((vacina) => {
                                                    if (vacina.vacina.includes(busca)) {
                                                        return vacina 
                                                    } 
                                                })
                                            }
                                            renderItem={(item, index) => <CardVacina item={item} navigation={props.navigation} keyExtractor={(item) => item.id}/>}
                                            numColumns={2} 
                            
                                        /> 
                                    </View>
                                 
                            </View> 
                            <View style= {styles.containerNovaVacina} >
                                <TouchableOpacity style= {styles.btnNovaVacina} onPress={goToNovaVacina}>
                                    <Text style= {styles.txtNovaVicina}>Nova Vacina</Text>
                                </TouchableOpacity>
                            </View>

                    </View>

                </View>
            </KeyboardAvoidingView>
       
    )
}

const styles = StyleSheet.create({
    containerFlatList : {
        //backgroundColor: 'red',
        //height: '60%',
    },
    scrollView : {
        //backgroundColor: 'yellow',
        height: "78%",
        
    },
    main: {
        height: '95%',
        //backgroundColor: 'purple',        
    },  

    containerPesquisa: {
        marginTop: '2%',
        alignSelf: "center",
        //backgroundColor: 'blue',
        flexDirection: "row", // prioridade para os outros elementos 
        alignItems: "center",
        width: '95%',
        height: '10%',
        //marginBottom: 0,
        
    },  
    textoEntrada : {
        //backgroundColor: 'black',
        padding: 0,
        width: '100%',
        color: '#419ED7',
        fontFamily: 'AveriaLibre-Bold', 
        marginLeft: '2%',
        fontSize: 18,
        paddingLeft: 8,
    },
    pesquisa: {
        //margin: 5,
        flexDirection: "row",
        backgroundColor: 'white',
        width: '97%', //width: '93%'
        height: '75%',
        paddingLeft: '4%',
        color: '#419ED7',
        fontFamily: 'AveriaLibre-Bold',
        marginLeft: '2%',
        borderRadius: 2,
        padding: 0,
    },
    search : {
        //backgroundColor: 'pink',
        width: '100%',
        height: '78%',
        flexDirection: "row",
        alignItems: "center",
    },
    iconePesquisa : {
        width: '4%',
        height: '32%',
        position: "absolute",
        opacity: 0.5,
        alignSelf: "center",
        marginLeft: '0.9%',
        padding: 10,  // pode se alterar 
        //display: "none", // temporario
        //backgroundColor: 'white',
        //marginLeft: 20,
    },
    containerNovaVacina : {
        //backgroundColor: 'blue',
        marginTop: '5%',
        flexDirection: 'column',
        alignItems: "center",
        height: '10%',
        //paddingBottom: 5,
        //paddingTop: 10,
       
        //backgroundColor: 'red',
    },
    btnNovaVacina: {
        //backgroundColor: 'purple',
        width: "35%",
        flexDirection: "column",
        alignItems: "center",
        height: '100%', 
        

    }, 
    txtNovaVicina: {
        width: '85%',
        paddingVertical: '3.5%',
        height: 30,
        alignSelf:"center",
        backgroundColor: '#37BD6D',
        borderRadius: 6,
        color: 'white',
        //fontWeight: "bold",
        textAlign: "center",
        elevation: 12,
        fontFamily: 'AveriaLibre-Bold',
    },  


    
    
})

export default HomeCard;