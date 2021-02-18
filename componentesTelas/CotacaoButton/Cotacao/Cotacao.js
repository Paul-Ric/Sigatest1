import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Modalize } from 'react-native-modalize';
import { useRef } from "react";



export default function Financeiro({navigation}){
    const modalizeCotacao = useRef(null)
    function cotacao(){
        modalizeCotacao.current?.open()
    }
    return(
        <View>
        <Modalize ref={modalizeCotacao}
        snapPoint={500}
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