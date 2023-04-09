import React, {useContext, useState} from "react";
import * as C from './styles'
import { Platform, ActivityIndicator } from "react-native"
import {AuthContext} from "../../contexts/auth"
import { InputValues } from "../../components/index"

export default function SingUp(){
   const { signUp, loadingAuth } = useContext(AuthContext)
   const [nome, setNome] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState(false)

   function handleSignUp(){
    if(!nome || !email || !password){
      setError(true)
    }else{
      setError(false)
    } 
    signUp(nome, email, password)
   }


  return ( 
   <C.Background>
      <C.Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
     <InputValues
        error={error && !nome}
        placeholder={'Insira seu email'}
        type="text"
        text="Nome"
        value={nome}
        onChangeText={(value) => {setEmail(value)}}
      />
      <InputValues
        error={error && !email}
        placeholder={'Insira seu email'}
        type="text"
        text="Email"
        value={email}
        onChangeText={(value) => {setEmail(value)}}
      />
      <InputValues
        error={error && !password}
        placeholder={'Insira seu email'}
        type="text"
        text="Senha"
        value={password}
        onChangeText={(value) => {setEmail(value)}}
      />
    <C.SubmitButton onPress={handleSignUp}> 
       {
         loadingAuth ? (
         <ActivityIndicator size={20} color= "#fff"/>
         ) : (
            <C.SubmitText>Cadastrar</C.SubmitText>
         )
       }
    </C.SubmitButton>
      </C.Container>
   </C.Background>
  )

}