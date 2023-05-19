import React, { useContext } from "react";
import * as C from './styles'
import { Header } from "../../components";
import { AuthContext } from '../../contexts/auth'
import { useNavigation  } from "@react-navigation/native"

export default function Profile(){
  const { user, logout } = useContext(AuthContext)
  const navigation = useNavigation()

  return ( 
    <C.Container>
     <Header title="Meu perfil"/>
       <C.Message>Hey, bem vindo de volta.</C.Message>
        <C.Name numberOfLines={1}>
           {user && user.name}
        </C.Name>
        <C.NewLink onPress={() => navigation.navigate('Registrar')} >
          <C.NewText>Fazer Registro</C.NewText>
        </C.NewLink>
        <C.LogoutButton onPress={() => logout()} >
          <C.LogoutText>Sair</C.LogoutText>
        </C.LogoutButton>
    </C.Container>
  )

}