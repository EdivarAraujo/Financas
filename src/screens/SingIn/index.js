import React from "react";
import * as C from './styles'
import {StatusBar} from 'react-native'
import logo from '../../assets/logoSignIn.png'



export default function SingIn(){

  return ( 
    <C.Container>
      <StatusBar hidden={false} translucent={true} backgroundColor='transparent'/>
        <C.BackgroundImage source={logo}></C.BackgroundImage>
      <C.ContainerInput>
          <C.TextInput>Usuario:</C.TextInput>
            <C.InputDados/>
          <C.TextInput>Senha:</C.TextInput>
            <C.InputDados/>
      </C.ContainerInput>

    </C.Container>
  )

}