import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"

import {SingIn, SingUp} from "../screens/index"

const AuthStack = createNativeStackNavigator()

export default function AuthRoutes(){

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
         name="SingIn"
         component={SingIn}
         options={{
          headerShown: false
         }}
      />
      <AuthStack.Screen
         name="SingUp"
         component={SingUp}
         options={{
          headerStyle:{
            backgroundColor: "#5fb74c",
            borderBottomWidth: 1,
            borderBottomColor: "#5fb74c",
          },
          headerTintColor: "#fff",
          headerTitle: "Voltar",
          
         }}
      />
    </AuthStack.Navigator>
  )
}