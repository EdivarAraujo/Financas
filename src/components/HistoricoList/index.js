import React, { useState } from "react";
import * as C from './styles'
import { Alert, TouchableWithoutFeedback, ScrollView } from "react-native"
import Icon from "react-native-vector-icons/Feather";
import {InforReceives} from "../../components"

export default function HistoricoList({data, deleteItem}){
  const [visible, setVisible] = useState(false)
  const { type, value, id } = data
 
 function handleDeleteItem(){
   Alert.alert(
    'Atenção',
    'Voce tem certeza que deseja deletar esse registro ??',
     [
      {
        text: 'Cancelar',
        style: 'cancel',   
      },
      {
        text: 'Confirmar',
        onPress: () => deleteItem(id),
      }
     ]
   )
 }

 function onCloseModal(){
  setVisible(false)
 }

  return (
   <TouchableWithoutFeedback 
      onPress={() => setVisible(true)}
      onLongPress={() => handleDeleteItem()}>
      <C.Container>
        <C.Tipo>
          <C.IconView tipo={type} >
            <Icon
              name={type  === 'despesa' ?  'arrow-down' : 'arrow-up'} 
              size={20}
              color="#fff"
            />
            <C.TipoText> {type} </C.TipoText>
          </C.IconView>
        </C.Tipo>
      
      <C.ValorText>
          R$ {value}
      </C.ValorText>
     
      <InforReceives 
        visible={visible}
        setVisible={onCloseModal}
        data={data}
        />
      </C.Container>
   </TouchableWithoutFeedback>
  )
}