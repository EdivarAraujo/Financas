//provider prover todas as informações para todas as telas, para poder usar funcionalidades em qualquer que seja o local da aplicação
import React, {createContext, useState, useEffect} from 'react';
import { Alert } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import api from "../services/api"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Toast from 'react-native-toast-message'

export const AuthContext = createContext({})

export default function AuthProvider({children}) {
   const [user, setUser] = useState(null)
   const [loadingAuth, setLoadingAuth] = useState(false)
   const [loading, setLoading] = useState(true)

   const navigation = useNavigation()

   const showToast = (type, text) => {
    Toast.show({
      type: type,
      text1: text,
    });

  }

  //verificar se tem algum token salvo na aplicação
  useEffect(() => {
    async function loadStorage() {
     const storageUser = await AsyncStorage.getItem('@finToken')

     if(storageUser){
      const response = await api.get('/me',{
        headers:{
          "Authorization": `Bearer ${storageUser}`
        }
      })
      .catch(() => {
        setUser(null)
      })
      
      api.defaults.headers['Authorization'] = `Bearer ${storageUser}`
      setUser(response.data)
      setLoading(false)
     }
     setLoading(false)
    }
    
    loadStorage()
  },[])


  //função para cadastrar usuario
  async function signUp(nome, email, password) {
    setLoadingAuth(true)
    try {
      const response = await api.post('/users', {
        name: nome,
        email: email,
        password: password
      })
      setLoadingAuth(false)
      navigation.goBack()
       

    } catch (error) {
      showToast('error', error.message)
      console.log("Erro ao cadastrar", error)
      setLoadingAuth(false)
    }
 }

 //função para logar usuario
 async function signIn(email, password){
   setLoadingAuth(true)
   
   try {
     const response = await api.post( '/login',{
      email: email,
      password: password
     })
     const { id, name, token } = response.data;
     const data = {
      id,
      name,
      token,
      email
     }
     await AsyncStorage.setItem('@finToken', token)

     api.defaults.headers['Authorization'] = `Bearer ${token}`
     
     setUser({
      id,
      name,
      email
     })
     showToast('success', `Bem vindo ${name}`);
     setLoadingAuth(false)

    
   } catch (error) {
      console.log("Erro ao tentar logar", error)
      setLoadingAuth(false)
   }
 }

//função para delogar usuario
 async function signOut(){
  await AsyncStorage.clear()
  .then(() => {
    setUser(null)
  })
 }

 function logout(){
  Alert.alert(
   'Atenção',
   'Voce tem certeza que deseja sair ??',
    [
     {
       text: 'Cancelar',
       style: 'cancel',   
     },
     {
       text: 'Confirmar',
       onPress: () => signOut(),
     }
    ]
  )
}

   return (
     <AuthContext.Provider value={{
      signed: !!user,
      user, 
      loadingAuth,
      loading,
      signUp,
      signIn,  
      logout,
      showToast
      }}>
       {children}
       <Toast/>
     </AuthContext.Provider>

   )
}