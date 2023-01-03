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
    {
        id: 1,  
        vacina: 'Hepatite B',
        data: '21/09/2022',
        dose: 1,
        urlImage: 'http://',
        proximaVacina: '23/09/2022',
      },
      {  
        id: 3,
        vacina: 'Sarampo',
        data: '21/09/2022',
        dose: 0,
        urlImage: 'http://',
        proximaVacina: '03/12/2022',
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
        id: 3,
        vacina: 'Sarampo',
        data: '21/09/2022',
        dose: 0,
        urlImage: 'http://',
        proximaVacina: '03/12/2022',
    }, 
    {
        id: 1,  
        vacina: 'Hepatite B',
        data: '21/09/2022',
        dose: 1,
        urlImage: 'http://',
        proximaVacina: '23/09/2022',
      },
      
    
]

const HomeCard = (props) => { 

    const goToNovaVacina = () => {
        props.navigation.push('NovaVacina')
    }
   

    const editarVacinas = () => {
        props.navigation.push('EditarVacina', {dados : listaVacinas[2]})
    }

    return (
            <KeyboardAvoidingView keyboardVerticalOffset={5} behavior={'height'} style={{flex: 1}}>
                <View style={styles.main}>
                    <View > 
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
                            <View style={styles.containerFlatList}>
                                 <SafeAreaView>
                                    <ScrollView style={styles.scrollView}>
                                        <FlatList 
                                            
                                            data={listaVacinas}                              
                                            renderItem={(item, index) => <CardVacina item={item} />}
                                            numColumns={2}
                                            keyExtractor={(item) => item.id}
                                            
                                            
                                        />
                                    </ScrollView>
                                    </SafeAreaView>
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
        
    },
    scrollView : {
        backgroundColor: 'yellow',
    },
    main: {
        backgroundColor: 'purple',   
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
        backgroundColor: 'blue',
        marginTop: '15%',
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
        paddingVertical: '3%',
        height: 30,
        alignSelf:"center",
        backgroundColor: '#37BD6D',
        borderRadius: 6,
        color: 'white',
        fontWeight: "bold",
        textAlign: "center",
        elevation: 12,
    },  


    
    
})

export default HomeCard;