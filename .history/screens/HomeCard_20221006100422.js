import React, {useState} from "react";
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
import NovaVacina from "./NovaVacina";
export const listaVacinas = [ // 05/10 
    {
      vacina: 'BCG',
      data: '21/09/2022',
      dose: 1,
      urlImage: 'http://',
      proximaVacina: '20/12/2022',
    },
    
    {
      vacina: 'Hepatite B',
      data: '21/09/2022',
      dose: 1,
      urlImage: 'http://',
      proximaVacina: '23/09/2022',
    },
    {
        vacina: 'DTpa',
        data: '21/09/2022',
        dose: 1,
        urlImage: 'http://',
        proximaVacina: '20/12/2022',
    },
    {
        vacina: 'Sarampo',
        data: '21/09/2022',
        dose: 1,
        urlImage: 'http://',
        proximaVacina: '03/12/2022',
    }, 
    
]
// {{{  PASSAR DADOS PARA LISTA POR ATRIBUTOS INTERNOS A SCREEN HOME  }}}
const HomeCard = (props) => { // App {do professor}
    
    const goToNovaVacina = () => {
        props.navigation.push('NovaVacina')
    }
    console.log(listaVacinas)
    const editarVacinas = () => {
        props.navigation.push('EditarVacina', {dados : listaVacinas})
    }
    return (
            <KeyboardAvoidingView keyboardVerticalOffset={5} behavior={'height'} style={{flex: 1}}>
                <View style={styles.main}>
                    <TouchableOpacity onPress={editarVacinas}> 
                        <View style={styles.containerPesquisa}> 
                            <View style={styles.viewImg}> 
                                    <Image
                                        style={styles.iconePesquisa}
                                        source={require('../images/lupa.png')}
                                    />       
                            </View>
                                <TextInput placeholder="  PESQUISAR VACINA... "
                                        style={styles.pesquisa}
                                >    
                                
                                </TextInput>
                            </View>
                            
                            <FlatList 
                                data={listaVacinas}                                
                                renderItem={(item) => <CardVacina item={item} />}
                                numColumns={2}
                            />
                            <View style= {styles.containerNovaVacina} >
                                <TouchableOpacity style= {styles.btnNovaVacina} onPress={goToNovaVacina}>
                                    <Text style= {styles.txtNovaVicina}> Nova Vacina</Text>
                                </TouchableOpacity>
                        </View>

                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
       
    )
}

const styles = StyleSheet.create({
    main: {
        //backgroundColor: 'purple',   
        marginBottom: 242,     
    },  

    containerPesquisa: {
        marginTop: 18,
        marginLeft: 8,
        //backgroundColor: 'blue',
        flexDirection: "row", // prioridade para os outros elementos 
        alignItems: "center",
        width: '93%',
        height: '10%',
        marginBottom: 1,
        
    },  
    pesquisa: {
        //margin: 5,
        backgroundColor: 'white',
        width: '97%', //width: '93%'
        height: '60%',
        padding: 0,
        paddingVertical: 0,
        paddingLeft: 2,
        color: '#419ED7',
        fontWeight: "bold",
        alignItems: "center",
        marginLeft: 15,
    },
    iconePesquisa : {
        width: 15,
        height: 15,
        position: "absolute",
        padding: 1,
        opacity: 0.5,
        flexDirection: "row",
        display: "none", // temporario
        //backgroundColor: 'white',
        //marginLeft: 20,
    },
    containerNovaVacina : {
        //backgroundColor: 'blue',
        marginTop: 20,
        flexDirection: 'column',
        alignItems: "center",
        height: '10%',
        paddingBottom: 5,
        paddingTop: 10,
       
        //backgroundColor: 'red',
    },
    btnNovaVacina: {
        //backgroundColor: 'purple',
        width: "35%",
        paddingHorizontal: 6,
        flexDirection: "row",
        alignItems: "center",
        height: '100%', 
        

    }, 
    txtNovaVicina: {
        width: '85%',
        paddingTop: 5,
        paddingLeft: 12,
        marginLeft: 20,
        height: 30,
        flexDirection: "column",
        alignSelf:"center",
        backgroundColor: '#37BD6D',
        borderRadius: 6,
        color: 'white',
        fontWeight: "bold",
        elevation: 12,
    },  


    
    
})

export default HomeCard;