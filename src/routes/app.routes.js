import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Home, New, Profile, } from "../screens/index"
import { CustonDrawer } from '../components/index'

const AppDrawer = createDrawerNavigator()

export default function AppRoutes(){

  return (
    <AppDrawer.Navigator
      drawerContent={(props) => <CustonDrawer {...props}/>}
      screenOptions={{
        headerShown: false,
        drawerStyle:{
          backgroundColor: '#fff',
          paddingTop: 20
        },
        drawerActiveBackgroundColor: '#5fb74c',
        drawerActiveTintColor: '#fff',

        drawerInactiveBackgroundColor: '#f0f2ff',
        drawerInactiveTintColor: '#121212'
      }}
    >
       <AppDrawer.Screen
         name='Home'
         component={Home}
       />
         <AppDrawer.Screen
         name='Registrar'
         component={New}
       />
          <AppDrawer.Screen
         name='Perfil'
         component={Profile}
       />
       
       
    </AppDrawer.Navigator>
  )
} 