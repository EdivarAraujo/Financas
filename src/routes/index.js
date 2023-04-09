import React, {useContext} from "react";
import {View, ActivityIndicator } from 'react-native'
import { AuthContext } from "../contexts/auth"
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import * as C from './styled' 

export default function Routes() {
  const { signed, loading } = useContext(AuthContext)

  if(loading){
    return (
      <C.ViewLoading>
        <ActivityIndicator size="large" color="#131313"/>
      </C.ViewLoading>
    )
  }

  return(
    signed ? <AppRoutes/> : <AuthRoutes/>
    )
  
}