import React  from 'react'
import {Text,
        View,
        Image,
        StyleSheet,
        TouchableOpacity,
        TextInput,
        
         } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';
import { Modalize } from 'react-native-modalize';
import { useRef } from "react";
import CotacaoButton from '../componentesTelas/CotacaoButton/Cotacao/Cotacao'

const Stack =createStackNavigator()

export default function Home({navigation}){

    const modalizeRef = useRef(null)
    const modalizeAnexos = useRef(null)
    const modalizeInfGerais = useRef(null)
    const modalizeCotacao = useRef(null)

    function cotacao(){
        modalizeCotacao.current?.open()
    }
    function onOpen(){
        modalizeRef.current?.open()
    }
    function onOpenAnexos(){
        modalizeAnexos.current?.open()
    }
    function infGerais(){
        modalizeInfGerais.current?.open()
    }
   

    return(

       <View>     

        <View style={{backgroundColor:'#EEF3F6'}}>
              <View style={styless.viewCabeçalho}>
                
                    <TouchableOpacity style={styless.touchButtonn}
                    onPress={()=>navigation.goBack('Login')}>
                        <Image style={styless.button}
                        source={require('../assets/home/on-off-button.png')}
                        
                        />
                    
                    </TouchableOpacity>
                
            

            
                    <Image style={styless.logo}
                    source={require('../assets/home/Sigaa.png')}
                    />
                   
            </View>

                  {/*Indicadores*/}
                  <View >
                        <View style={stylesIndicadores.viewIndicadores0}>
                    
                            <View style={stylesIndicadores.viewIndicadores1}>
                                <Text style={stylesIndicadores.text}>Indicadores</Text>
                                    <View style={stylesIndicadores.viewIndicadoresContainer} >
                                            
                                        {/*FINANCEIRO */}  
                                        <View  style={stylesIndicadores.viewtouchFinanceiro}>
                                                <TouchableOpacity style={stylesIndicadores.financeiroTouch}
                                                onPress={()=>navigation.navigate('Financeiro')}
                                
                                                >
                                                    <Image style={stylesIndicadores.imageFinanceiro}
                                                    source={require('../assets/home/financial.png')}
                                                    />
                                                <Text style={stylesIndicadores.txtFinanceiro}>Financeiro</Text>
                                                <Text style={stylesIndicadores.numeroFinancas}>10</Text>
                                                </TouchableOpacity>
                                        </View>
                                        {/*PEÇAS VENDIDAS */}
                                        <View style={stylesIndicadores.viewtouchPecasVen}>
                                            <TouchableOpacity style={stylesIndicadores.pecasvendasTouch}
                                            onPress={()=>navigation.navigate('PecasVendidas')}
                                            >

                                                <Image style={stylesIndicadores.imageVendas}
                                                source={require('../assets/home/risk.png')}
                                                />
                                                <Text style={stylesIndicadores.txtVendas}>Peças Vendidas</Text>
                                                <Text style={stylesIndicadores.numerosVendas}>25</Text>
                                            </TouchableOpacity>
                                        </View>

                                        {/*Cotação Respondida */}
                                        <View style={stylesIndicadores.viewtouchCotacaoResp}>
                                            <TouchableOpacity style={stylesIndicadores.cotacaoTouch}
                                            onPress={()=>navigation.navigate('CotacaoResp')}
                                            >
                                                <Image style={stylesIndicadores.imageCotacao}
                                                source={require('../assets/home/thinking.png')}
                                                
                                                />
                                                <Text style={stylesIndicadores.txtCotacao}>Cotação Respon.</Text>
                                                <Text>4</Text>
                                            </TouchableOpacity>
                                        </View>

                                        {/*Vendas Perdidas*/}
                                        <View style={stylesIndicadores.viewtouchuVendasPer}>
                                            <TouchableOpacity style={stylesIndicadores.vendasPerdidasTouch}
                                            onPress={()=>navigation.navigate('Vendasper')}
                                            >
                                                    <Image style={stylesIndicadores.imageVendPerdidas}
                                                    source={require('../assets/home/perdas.png')}
                                                    />
                                                    <Text style={stylesIndicadores.txtVendasPerdidas}>Vendas Perdidas</Text>
                                                    <Text style={stylesIndicadores.numerosVendasPerdidas}>5000</Text>
                                            </TouchableOpacity>
                                        </View>
                                        {/*Solicitação */}
                                        <View style={stylesIndicadores.viewTouchSolicitacao}>
                                            <TouchableOpacity style={stylesIndicadores.vendasAlterTouch}
                                            onPress={()=>navigation.navigate('Alteracao')}
                                            >
                                                 <Image style={stylesIndicadores.imageSolicitacao}
                                                 source={require('../assets/home/troca.png')}
                                                 />
                                                 <Text style={stylesIndicadores.txtSolicitacao}>Alteração/Canc.</Text>
                                                 <Text>15</Text>
                                            </TouchableOpacity>
                                        </View>
                             </View>
                        </View>

                               
                                    
                    </View>  
             </View>


                <View style={{flexDirection:'row',marginHorizontal:160,marginTop:10}}>
                    <Text style={{marginLeft:1,marginTop:17}}>Pesquisar</Text>
                    <View style={{marginTop:-20}}>
                        <TextInput style={{width:145,height:55,borderBottomWidth:0.5,fontSize:12,}}
                        placeholder=''
                        placeholderTextColor='#000'
                        
                        />
                    </View>

                </View>



                <View style={stylesCotacao.baseCotacao0} >
                    <View style={stylesCotacao.baseCotacao1}>
                        <View style={stylesCotacao.informacaoGeral}>
                            <Text style={stylesCotacao.txtPlaca}>GHE-1234</Text> 
                            <Text style={stylesCotacao.txtVeiculo}>Veiculo:Corola </Text>
                         </View>


                            <View style={stylesCotacao.informacoesPrincipal0}>
                                <View>
                                    <View>
                                        <Text>Comprador: Paulo Ricardo</Text>
                                        <Text>Status:</Text>
                                    </View>
                                    <View style={stylesCotacao.view1}>
                                        <Text>Evento:2021-0001</Text>
                                        <Text style={stylesCotacao.txtNumeroCotacao}>Cotação:30331</Text>
                                    </View>

                                    <View style={stylesCotacao.view2}>
                                        <Text>Associação:APVS</Text>
                                        <Text style={stylesCotacao.txtCity}>Cidade:SAO PAULO</Text>
                                    </View>

                                    <View style={stylesCotacao.view3}>
                                        <Text>Oficina:HONDA AUTOR</Text>
                                        <Text style={stylesCotacao.txtCnpj}>CNPJ:26.255/0001-93</Text>
                                    </View>
                            </View> 
                            


                                   
                                  
                        </View>


                            {/*Button  */}
                            <View style={stylesButton.view0}>
                                        <View style={stylesButton.view1}>
                                            <TouchableOpacity style={stylesButton.touchLapis}
                                            onPress={cotacao}>
                                                
                                                <Image style={stylesButton.buttonLapis}
                                                source={require('../assets/cotacao/lapis-de-cor.png')}
                                                />
                                                    
                                                
                                            </TouchableOpacity>
                                        </View>

                                        <View style={stylesButton.view2}>
                                            <TouchableOpacity style={stylesButton.touchClipe}
                                            onPress={onOpenAnexos}
                                            >
                                                <Image style={stylesButton.buttonClipe}
                                                source={require('../assets/cotacao/clipe-de-papel.png')}
                                                />
                                                    
                                                
                                            </TouchableOpacity>
                                        </View>

                                        <View style={stylesButton.view3}>
                                            <TouchableOpacity style={stylesButton.touchFerramenta}
                                            onPress={onOpen}
                                            >
                                                <Image style={stylesButton.buttonFerramenta}
                                                source={require('../assets/cotacao/ferramentas-de-mao.png')}
                                                />
                                                    
                                                
                                            </TouchableOpacity>
                                                  

                                        </View>

                                        <View style={stylesButton.view4}>
                                            <TouchableOpacity style={stylesButton.touchInformacao}
                                            onPress={infGerais}
                                            >
                                                <Image style={stylesButton.buttonInformacao}
                                                source={require('../assets/cotacao/informacao-do-empresario.png')}
                                                />
                                                    
                                                
                                            </TouchableOpacity>
                                            

                                        </View> 
                                          


                                        

                                        
                                           
                                        

                                    </View>
                                    

                            

                    </View>
                </View>

                

                   

        </View>

                        <Modalize ref={modalizeCotacao}
                        snapPoint={500}
                        >
                            
                        <View style={{width:344,height:190,backgroundColor:'#E1E1E1',alignContent:'center',justifyContent:'center',marginHorizontal:25}}>
                        <TouchableOpacity  >
                            <Text style={{fontSize:30,alignSelf:'center'}}>Hello Word</Text>
                        </TouchableOpacity>
                        </View>

                    </Modalize>





                    <Modalize ref={modalizeRef}
                                snapPoint={200}
                                >

                        <View style={{width:344,height:190,backgroundColor:'#E1E1E1',alignContent:'center',justifyContent:'center',marginHorizontal:25}}>
                        <TouchableOpacity  >
                            <Text style={{fontSize:30,alignSelf:'center'}}>Hello Word</Text>
                        </TouchableOpacity>
                        </View>
                        
                    </Modalize>

                    <Modalize ref={modalizeInfGerais}
                                snapPoint={300}
                                >

                        <View style={{width:344,height:190,backgroundColor:'#E1E1E1',alignContent:'center',justifyContent:'center',marginHorizontal:25}}>
                        <TouchableOpacity  >
                            <Text style={{fontSize:30,alignSelf:'center'}}>Hello Word</Text>
                        </TouchableOpacity>
                        </View>
                        
                    </Modalize>


                    <Modalize ref={modalizeAnexos}
                                snapPoint={400}
                                >

                        <View style={{width:344,height:190,backgroundColor:'#E1E1E1',alignContent:'center',justifyContent:'center',marginHorizontal:25}}>
                        <TouchableOpacity  >
                            <Text style={{fontSize:30,alignSelf:'center'}}>Hello Word</Text>
                        </TouchableOpacity>
                        </View>
                        
                    </Modalize>


                   
                    




    </View>
                    
      
    )
}

const styless= StyleSheet.create({
 
    viewCabeçalho:{
    
     width:400,
     height:50,
     backgroundColor:'#EDF4F5',
     flexDirection:'row',

   

    },
    container:{
        flex:1
    },
    touchButtonn:{
      width:45,
      height:45  
    },
    logo:{
        width:80,
        height:80,
        resizeMode:'contain',
        marginHorizontal:120,
        marginTop:-15
    },
    button:{
        width:30,
        height:30,
        marginHorizontal:7,
        marginTop:5
    }



})
const stylesIndicadores= StyleSheet.create({
    viewIndicadores1:{
        
        width:380,
        height:200,
        backgroundColor:'#FFF',
        marginTop:15,
        borderRadius:15,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    viewIndicadores0:{
        
        justifyContent:'center',
        alignItems:'center',
        
    },
    viewIndicadoresContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        
        
    },
    text:{
        fontFamily:'Roboto',
        fontSize:19,
        marginHorizontal:15,
        marginBottom:10
    },
    /*FINANCEIRO */
    viewtouchFinanceiro:{
        width:120,
        height:40,
        backgroundColor:'#C2E9CF',
        borderRadius:10,
        marginHorizontal:5,
        marginBottom:25,
        marginLeft:15

    },
    financeiroTouch:{
        justifyContent:'center',
        alignItems:'center'
    },
    imageFinanceiro:{
        width:30,
        height:30,
        marginLeft:-90,
        
        
    },
    txtFinanceiro:{
        fontSize:12,
        marginTop:-29,
        

    },
    numeroFinancas:{
        margin:2
    },
    /*PEÇAS VENDIDAS */
    viewtouchPecasVen:{
        width:120,
        height:40,
        borderRadius:10,
        backgroundColor:'#4CD47B',
        marginLeft:100
        
    },
    pecasvendasTouch:{
        justifyContent:'center',
        alignItems:'center'
    },
    imageVendas:{
        width:30,
        height:30,
        marginLeft:-90,
    },
    txtVendas:{
        fontSize:12,
        marginTop:-29,
        marginLeft:21
    },
    numerosVendas:{
      margin:2  
    },

    /*COTOÇÃO RESPONDIDAS*/
    viewtouchCotacaoResp:{
        width:120,
        height:40,
        borderRadius:10,
        backgroundColor:'#C1DAFF',
        marginHorizontal:5,
        marginLeft:15

    },
    cotacaoTouch:{
        justifyContent:'center',
        alignItems:'center'
    },
    imageCotacao:{
        width:30,
        height:30,
        marginLeft:-90
    },
    txtCotacao:{
        fontSize:11,
        marginTop:-29,
        marginLeft:25
    },
    /*VENDAS PERDIDAS */
    viewtouchuVendasPer:{
        width:120,
        height:40,
        borderRadius:10,
        backgroundColor:'#ED75DA',
        marginLeft:99
    },
    vendasPerdidasTouch:{
        justifyContent:"center",
        alignContent:'center'
    },
    imageVendPerdidas:{
        width:25,
        height:25,
        margin:2.9
        
    },
    txtVendasPerdidas:{
        fontSize:12,
        marginTop:-29,
        marginLeft:25
    },
    numerosVendasPerdidas:{
        marginHorizontal:40
    },
    /*Solicitacao Alteração/Cancelamento */
    viewTouchSolicitacao:{
        width:120,
        height:40,
        borderRadius:10,
        backgroundColor:'#FEEFA1',
        margin:17,
        marginHorizontal:125
    },
    vendasAlterTouch:{
        justifyContent:'center',
        alignItems:'center'
    },
    imageSolicitacao:{
        width:30,
        height:30,
        marginRight:88,
        marginTop:5,
    },
    txtSolicitacao:{
        fontSize:11,
        marginTop:-29,
        marginLeft:25

    }
})
const stylesCotacao=StyleSheet.create({

    baseCotacao0:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:15
    },
    baseCotacao1:{
        width:341,
        height:181,
        backgroundColor:'#C7F4FF',
        borderRadius:7
    },
    informacaoGeral:{
        width:342,
        height:21,
        backgroundColor:'#FFF',
        
        flexDirection:'row',
    },
    txtPlaca:{
        marginHorizontal:15
    },
    txtVeiculo:{
        marginLeft:55
    },
    informacoesPrincipal0:{
        width:325,
        height:100,
        backgroundColor:'#fff',
        margin:8
    },
    view1:{
        flexDirection:'row'
    },
    txtNumeroCotacao:{
        marginHorizontal:45
    },
    view2:{
        flexDirection:'row'
    },
    txtCity:{
        marginLeft:48
    },
    view3:{
        flexDirection:'row',
    },
    txtCnpj:{
        marginLeft:15
    }
})

const stylesButton=StyleSheet.create({
    
    view0:{
        justifyContent:'center',
        alignContent:'center',
        flexDirection:'row',
        marginHorizontal:10,
        marginTop:10
        

    },
    view1:{
        width:84,
        height:45,
        backgroundColor:'#e1e1e1',
        alignItems:'center',
        padding:10,
        borderRightWidth:0.5
        
       
    },
    view2:{
        width:86,
        height:45,
        alignItems:'center',
        backgroundColor:'#E1E1E1',
        alignItems:'center',
        padding:10,
        borderRightWidth:0.5
        
       
    },
    view3:{
        width:86,
        height:45,
        alignItems:'center',
        backgroundColor:'#E1E1E1',
        alignItems:'center',
        padding:10,
        borderRightWidth:0.7
        
        
    },
    view4:{
        width:86,
        height:45,
        alignItems:'center',
        backgroundColor:'#E1E1E1',
        alignItems:'center',
        padding:10
        
        
    },
    
    buttonLapis:{
        width:20,
        height:20,
        marginHorizontal:21,
        
        

        
    },
    buttonClipe:{
        width:20,
        height:20,
        marginHorizontal:42.5
    },
    buttonFerramenta:{
        width:20,
        height:20,
        marginHorizontal:42.5
    },
    buttonInformacao:{
        width:20,
        height:20,
        marginHorizontal:21
        
    },

    /*Touch */
    touchLapis:{
        
    },
    touchClipe:{

    },
    touchFerramenta:{

    },
    touchInformacao:{
        
    }
})

const styleModalize=StyleSheet.create({

})