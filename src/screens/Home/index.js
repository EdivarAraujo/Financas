import React, {useContext, useEffect, useState} from "react";
import * as C from './styles'
import { Header, HistoricoList } from "../../components"
import api from "../../services/api"
import { format } from "date-fns"
import { useIsFocused } from "@react-navigation/native"
import Icon from "react-native-vector-icons/MaterialIcons";
import { BalanceItem } from "./../../components/index"


export default function Home(){
  const isFocused = useIsFocused()
  const [listBalance, setListBalance] = useState([])
  const [moviments,setMoviments] = useState([])
  const [dateMovimensts, setDateMovimensts] = useState(new Date())

  useEffect(() => {
    let isActive = true;

    async function getMoviment(){
      let dateFormated = format(dateMovimensts, 'dd/MM/yyyy')

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
  },[isFocused, dateMovimensts])

  async function handleDeleteItem(id){

    try {
      await api.delete('/receives/delete',{
        params:{
          item_id: id,
        }
      })
      setDateMovimensts(new Date())
    } catch (error) {
      console.log(error)
    }
  }

  

  return ( 
    <C.Background>
       <Header title="Minhas Movimentações"/>
       <C.ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.tag}
        renderItem={({item}) => <BalanceItem data={item}/>}
       />
       <C.Area>
         <C.ButtonCalendar>
           <Icon
             name="event"
             color="#121212"
             size={30}
           />
         </C.ButtonCalendar>
         <C.Title>Ultimas Movimentações</C.Title>
       </C.Area>
         <C.List
           data={moviments}
           keyExtractor={item => item.id}
           renderItem={({item}) => <HistoricoList data={item} deleteItem={handleDeleteItem}/> } 
           showsHorizontalScrollIndicator={false}
           contentContainerStyle={{paddingBottom:20}}
         />
    </C.Background>
  )

}