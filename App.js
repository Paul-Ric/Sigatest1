import React from 'react'
import {
  View,
  Text,
 } from 'react-native'

import Login from './componentesTelas/login'
import Home from './componentesTelas/home'
import Financeiro from './componentesTelas/Indicadores/financeiro/financeiro'
import CotacaoResp from './componentesTelas/Indicadores/cotacaorespondida/cotacaoResp'
import PecasVendidas from './componentesTelas/Indicadores/pecasVendidas/pecasVendidas'
import VendasPerdidas from './componentesTelas/Indicadores/vendasPerdidas/vendasPer'
import Alteracao from './componentesTelas/Indicadores/alteracaoCancelamento/alteracao'
import CotacaoButton from './componentesTelas/CotacaoButton/Cotacao/Cotacao'
import AnexosButton from './componentesTelas/CotacaoButton/Anexos/Anexos'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




const Stack = createStackNavigator()

export default function App(){
  return(
    //<Login/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'
      screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Financeiro' component={Financeiro}/>
        <Stack.Screen name='CotacaoResp' component={CotacaoResp}/>
        <Stack.Screen name='PecasVendidas' component={PecasVendidas}/>
        <Stack.Screen name='Vendasper' component={VendasPerdidas}/>
        <Stack.Screen name='Alteracao' component={Alteracao}/>
        <Stack.Screen name='Cotacao' component={CotacaoButton}/>
        <Stack.Screen name ='Anexos' component={AnexosButton}/>
      </Stack.Navigator>
    </NavigationContainer>
   


  )
}





