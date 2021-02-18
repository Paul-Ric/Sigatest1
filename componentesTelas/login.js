import React from 'react'
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './home';



  export default function Login({navigation}){


   
    return(
  
  
      
      
      
        <View style={styles.container} >
          
          <Image style={styles.logo}
          source={require('../assets/home/Sigaa.png')}
          />
          
                  <View style={styles.areLogin}>
                      <Image style={styles.imgInput}
                          source={require('../assets/login/user.png')}
                          />
                        <TextInput style={{fontSize:18}}
                        placeholder='Digite seu Login'
                        placeholderTextColor='#000'
                        
                      />
                      
                  </View>     
                    
              
                  <View style={styles.areLogin}>
                      <Image style={styles.imgInput}
                          source={require('../assets/login/padlock.png')}
                          />
                        <TextInput style={{fontSize:18}}
                        placeholder='Digite sua Senha'
                        placeholderTextColor='#000'
                        
                        />
                  </View>
  
                <Text style={{margin:30}}> Esqueceu sua Senha ? Clique Aqui</Text>
  
  
  
                <View style={styles.buttonView}  >
                  <TouchableOpacity style={styles.button1}
                  onPress={()=>navigation.navigate('Home')}
                  >
                    <Text style={styles.buttonText}>
                      
                      ENTRAR
                    </Text>
                  </TouchableOpacity>
                  
                </View>
  
  
                
                <Text style={{marginTop:25}}>Acesso com Biometria</Text>
                <View style={styles.biometriaView}>
                
                  <TouchableOpacity >
                    <Image style={styles.biometria}
                    source={require('../assets/login/fingerprint.png')}
                    />
                      
                  </TouchableOpacity>
                </View>
  
         
  
        </View>
      
    )
  }


  const styles=StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#EEF3F6'
    },
    logo:{
      marginBottom:50,
      width:220,
      height:100,
      resizeMode:"contain"
    },
    imgInput:{
      width:30,
      height:30
    },
    areLogin:{
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center',
      backgroundColor:'#FFF',
      marginTop:20,
      width:370,
      height:50,
      borderRadius:20,
      paddingHorizontal:10,
      
      
      shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
  
        elevation: 10,
    },
    button1:{
      backgroundColor:'#ABDDE3',
      width:257,
      height:50,
      borderRadius:15,
  
  
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
  
      elevation: 11,
    },
    buttonText:{
      paddingTop:13,
      paddingLeft:93,
      fontSize:19,
      
      
    },
    buttonView:{
      marginTop:50
  
    },
    biometria:{
      width:85,
      height:93,
      
      
    },
    biometriaView:{
      marginBottom:-100
     
    }
  
  
  
  })  

  const Stack = createStackNavigator()
 