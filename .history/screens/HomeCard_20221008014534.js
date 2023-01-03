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
                            <View style={styles.search}>
                                <View style={styles.pesquisa}> 
                                    <Image
                                        style={styles.iconePesquisa}
                                        source={require('../images/lupa.png')}
                                    />       
                                
                                    <TextInput placeholder="  PESQUISAR VACINA... "
                                        
                                    > oi </TextInput>    
                                </View>    
                                    
                                </View>
                            </View>
                            <View style={styles.containerFlatList}>
                                 
                                    <ScrollView style={styles.scrollView}>
                                        <FlatList 
                                            data={listaVacinas}                              
                                            renderItem={(item, index) => <CardVacina item={item} />}
                                            numColumns={2}
                                            keyExtractor={(item) => item.id}
                                        />
                                    </ScrollView>
                                 
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
        height: "72%",
        
    },
    main: {
        height: '95%',
        backgroundColor: 'purple',   
        marginBottom: 0,     
    },  

    containerPesquisa: {
        marginTop: 17,
        marginLeft: 8,
        //backgroundColor: 'blue',
        flexDirection: "row", // prioridade para os outros elementos 
        alignItems: "center",
        width: '93%',
        height: '10%',
        //marginBottom: 0,
        
    },  
    pesquisa: {
        //margin: 5,
        flexDirection: "row",
        backgroundColor: 'white',
        width: '97%', //width: '93%'
        height: '85%',
        paddingLeft: '4%',
        color: '#419ED7',
        fontWeight: "bold",
        marginLeft: '3%',
    },
    search : {
        backgroundColor: 'pink',
        width: '100%',
        height: '65%',
        flexDirection: "row",
        alignItems: "center",
    },
    iconePesquisa : {
        width: '4%',
        height: '35%',
        position: "absolute",
        opacity: 0.5,
        alignSelf: "center",
        marginLeft: '0.5%',
        //display: "none", // temporario
        //backgroundColor: 'white',
        //marginLeft: 20,
    },
    containerNovaVacina : {
        backgroundColor: 'blue',
        marginTop: '12%',
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