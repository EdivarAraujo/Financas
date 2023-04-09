import React, {useContext, useEffect, useState} from "react";
import * as C from './styles'
import { Header } from "../../components"
import api from "../../services/api"
import { format } from "date-fns"
import { useIsFocused } from "@react-navigation/native"
import { BalanceItem } from "./../../components/index"


export default function Home(){
  const isFocused = useIsFocused()
  const [listBalance, setListBalance] = useState([])
  const [dateMovimensts, setDateMovimensts] = useState(new Date())

  useEffect(() => {
    let isActive = true;

    async function getMoviment(){
      let dateFormated = format(dateMovimensts, 'dd/MM/yyyy')

      const balance = await api.get('/balance', {
        params: {
          date: dateFormated,
        }
      })
      if(isActive){
        setListBalance(balance.data)
      }
    }
    getMoviment()
    
    return () => isActive = false;
  },[isFocused])

  

  return ( 
    <C.Background>
       <Header title="Minhas Movimentações"/>
       <C.ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.tag}
        renderItem={({item}) => (<BalanceItem data={item}/>
       )}
       />
    </C.Background>
  )

}