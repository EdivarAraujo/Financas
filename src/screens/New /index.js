import React,{useState} from "react";
import * as C from './styles'
import {Header, InputValues, RegisterTypes} from '../../components'
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import api from '../../services/api'
import { format } from 'date-fns'
import { useNavigation } from '@react-navigation/native'

export default function New(){
  const navigation = useNavigation()
 
  const [labelInput,setLabelInput] = useState('')
  const [valueInput,setValueInput] = useState('')
  const [type,setType] = useState('receita')

  
  function headleSubmit(){
    Keyboard.dismiss();

    if(isNaN(parseFloat(valueInput)) || type === null ){
     alert('Preencha todos os campos')
     return 
    }
    Alert.alert(
      'Confirmando dados',
      `Tipo: ${type} - Valor: ${parseFloat(valueInput)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd('Cadastrado')

        }
      ]
    )
  }

    async function handleAdd(){
      Keyboard.dismiss()
      await api.post('/receive', {
        description: labelInput,
        value: Number(valueInput),
        type: type,
        date: format(new Date(), 'dd/MM/yyyy')
      })
      setLabelInput('')
      setValueInput('')
      navigation.navigate('Home')
    }

  return(
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
      <C.Background>
        <Header title="Registrando"/>
        <C.AreaValues>
          <InputValues
            text="Descrição"
            bgColor= 'black'
            placeholder="Descrição desse registro"
            value={labelInput}
            onChangeText={(text) => setLabelInput(text)}
          />
          <InputValues
            text="Valor"
            bgColor= 'black'
            placeholder="Valor desejado"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={(text) => setValueInput(text)}
          />
           <RegisterTypes
            type={type}
            sendTypeChanged={(item) => setType(item)}
           />
          <C.SubmitButton onPress={headleSubmit}>
            <C.SubmitText>Registrar</C.SubmitText>
          </C.SubmitButton>
        </C.AreaValues>
      </C.Background>
    </TouchableWithoutFeedback>
  )
}