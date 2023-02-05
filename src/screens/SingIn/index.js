import React from "react";
import * as C from './styles'
import {StatusBar} from 'react-native'
import logo from '../../assets/logoSignIn.png'



export default function SingIn(){

  return ( 
    <C.Container>
      <StatusBar translucent={true} backgroundColor='transparent'/>
      <C.BackgroundImage source={logo}>

      </C.BackgroundImage>
    </C.Container>
  )

}