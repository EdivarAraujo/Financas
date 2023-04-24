import React, { useContext } from "react";
import * as C from './styles'
import { Header } from "../../components";
import { AuthContext } from '../../contexts/auth'

export default function Profile(){
  const { user, signOut } = useContext(AuthContext)

  return ( 
    <C.Container>
     <Header title="Meu perfil"/>
       <C.Message>Hey, bem vindo de volta.</C.Message>
        <C.Name numberOfLines={1}>
           {user && user.name}
        </C.Name>
        <C.NewLink>
          <C.NewText>Fazer Registro</C.NewText>
        </C.NewLink>
        <C.LogoutButton onPress={() => signOut()} >
          <C.LogoutText>Sair</C.LogoutText>
        </C.LogoutButton>
    </C.Container>
  )

}