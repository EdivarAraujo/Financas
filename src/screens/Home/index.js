import React, {useEffect, useState} from "react";
import * as C from './styles'
import {  Modal, ScrollView } from 'react-native'
import { Header, HistoricoList, CalendarModal } from "../../components"
import api from "../../services/api"
import { format } from "date-fns"
import { useIsFocused } from "@react-navigation/native"
import Icon from "react-native-vector-icons/MaterialIcons";
import { BalanceItem } from "./../../components/index"
import { useNavigation } from '@react-navigation/native'



export default function Home(){
  const isFocused = useIsFocused()
  const [listBalance, setListBalance] = useState([])
  const [moviments,setMoviments] = useState([])
  const [dateMoviments, setDateMoviments] = useState(new Date())
  const [modalVisible, setModalVisible] = useState(false)

  const navigation = useNavigation()

  useEffect(() => {
    let isActive = true;

    async function getMoviment(){
      let date = new Date(dateMoviments)
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000
      let dateFormated = format(onlyDate, "dd/MM/yyyy")


      const receives = await api.get('/receives', {
        params: {
          date: dateFormated,
        }
      })

      const balance = await api.get('/balance', {
        params: {
          date: dateFormated,
        }
      })
      if(isActive){
        setMoviments(receives.data)
        setListBalance(balance.data)
      }
    }
    getMoviment()
    
    return () => isActive = false;
  },[isFocused, dateMoviments]);

  async function handleDeleteItem(id){

    try {
      await api.delete('/receives/delete',{
        params:{
          item_id: id,
        }
      })
      setDateMoviments(new Date(dateFormated))
    } catch (error) {
      console.log(error)
    }
    moviments
  }

  function filterDateMoviments(dateSelected){
    setDateMoviments(dateSelected)
  }

  return ( 
    <C.ContainerBackground>
       <Header title="Minhas Movimentações"/>
       <C.ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.tag}
        renderItem={({item}) => <BalanceItem data={item}/>}
       />
       <C.Area>
         <C.ButtonCalendar onPress={() => setModalVisible(true)} >
           <Icon
             name="event"
             color="#121212"
             size={30}
           />
         </C.ButtonCalendar>
         <C.Title>Ultimas Movimentações</C.Title>
       </C.Area>
         <Modal visible={modalVisible} animationType="fade" transparent={true} >
            <CalendarModal 
             setVisible={() => setModalVisible(false)}
             handleFilter={filterDateMoviments}
             />
         </Modal>
        
         <C.List
           data={moviments}
           keyExtractor={item => item.id}
           renderItem={({item}) => <HistoricoList data={item} deleteItem={handleDeleteItem}/> } 
           showsHorizontalScrollIndicator={false}
           contentContainerStyle={{paddingBottom:20}}
         />
         <C.ContainerButton>
           <C.ButtonAddSpent onPress={() => navigation.navigate('Registrar')} >
            <Icon
              name="add"
              color="#fff"
              size={50}
            />
           </C.ButtonAddSpent>
         </C.ContainerButton>
    </C.ContainerBackground>
  )

}