import React,{ useState,useEffect } from "react";
import * as C from './styles'
import {StatusBar,Animated,Keyboard} from 'react-native'
import Logo from '../../assets/logoSignIn.png'

export default function SingIn(){

  const [logo] =  useState(new Animated.ValueXY({x: 350, y: 250}));


  useEffect(() => {

    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);  

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow')
    }

  }, []);


    //Teclado Aberto
    function keyboardDidShow () {
      Animated.parallel([
        Animated.timing(logo.y, {
          toValue: (Platform.OS === 'android' ? 150 : 150),
          duration: 0,
          useNativeDriver:false
        }),
        Animated.timing(logo.x, {
          toValue: (Platform.OS === 'android' ? 200 : 200),
          duration: 0,
          useNativeDriver:false
        })
    ]).start();
    }
  
    //Teclado Fechou
    function keyboardDidHide () {
      Animated.parallel([
        Animated.timing(logo.y, {
          toValue: 250,
          duration: 150,
          useNativeDriver:false
        }),
        Animated.timing(logo.x, {
          toValue: 350,
          duration: 150,
          useNativeDriver:false
        })
      ]).start();
    }


  return ( 
    <C.Container>
      <StatusBar hidden={false} translucent={true} backgroundColor='transparent'/>
      <C.BoxLogo>
        <C.Logo 
          style={{ width: logo.x,height: logo.y}}
          source={Logo} />
      </C.BoxLogo>
      <C.ContainerInput>
          <C.TextInput>Usuario</C.TextInput>
            <C.InputDados/>
          <C.TextInput>Senha</C.TextInput>
            <C.InputDados/>
      </C.ContainerInput>

    </C.Container>
  )

}