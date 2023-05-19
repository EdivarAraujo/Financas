import React,{ useContext } from "react";
import { Image } from 'react-native'
import { 
   DrawerItemList, 
   DrawerContentScrollView ,
   DrawerItem
} from '@react-navigation/drawer'
import * as C from './styles'
import { AuthContext } from '../../contexts/auth'

export default function CustonDrawer(props){
  const { user, logout } = useContext(AuthContext)

  return (
    <DrawerContentScrollView {...props} > 
      <C.ContainerCuston>
         <Image
           source={require('../../assets/logo.png')}
           style={{width:90, height:90}}
           resizeMode="contain"
         />
         <C.TextDrawer>Bem Vindo</C.TextDrawer>
         <C.TextNameUser numberOfLines={1}> {user && user.name} </C.TextNameUser>
      </C.ContainerCuston>
      <DrawerItemList {...props}/>
      <DrawerItem {...props}
       label="Sair do app"
       onPress={()=> logout()}
      />
    </DrawerContentScrollView>
  )
}


