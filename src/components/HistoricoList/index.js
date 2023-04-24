import React from "react";
import * as C from './styles'
import { Alert, TouchableWithoutFeedback } from "react-native"
import Icon from "react-native-vector-icons/Feather";

export default function HistoricoList({data, deleteItem}){
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

  return (
   <TouchableWithoutFeedback onLongPress={() => handleDeleteItem()}>
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

      </C.Container>
   </TouchableWithoutFeedback>
  )
}