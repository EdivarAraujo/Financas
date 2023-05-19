import React, { useEffect,useState } from "react";
import { Modal, StatusBar } from "react-native"
import * as C from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function InforReceives({data,setVisible, visible = false}){
  const [configStatusBar,setConfigStatusBar] = useState()
  const {
    type,
    date,
    description,
    value
 } = data
 
 const valueFormatado = value.toFixed(2).replace(".",",")

  useEffect(() => {
    if(!visible){
      setConfigStatusBar({
        backgroundColor:'transparent',
        barStyle:"dark-content", 
        translucent:true
      })
    }else{
      setConfigStatusBar({
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        barStyle:"dark-content", 
        translucent:true
      })
    }
  },[visible])

  return (
    <C.ContainerInfor>
      <StatusBar {...configStatusBar}/>
      <Modal 
        animationType="fade"
        visible={visible}
        transparent={true}
      >
      <C.ViewModalInfor>
        <C.Infor>

         {/* <C.ViewInforDescriptionDados>  */}
          {/* <C.ViewButton> */}
            <C.ButtonExit 
              onPress={setVisible}
              title="fechar">
                <Icon
                name="close"
                size={25}
                color="#121212"
                />
            </C.ButtonExit>
           {/* </C.ViewButton>  */}
          {/* </C.ViewInforDescriptionDados> */}

        <C.DescriptionInfor>  
          <C.ViewTitle>
              <C.Title>Data: {date}</C.Title>
            </C.ViewTitle>
        </C.DescriptionInfor>

          <C.DescriptionInfor>
            <C.Description>
              <C.Title>Tipo: {type}</C.Title>
            </C.Description>
          </C.DescriptionInfor>

          <C.DescriptionInfor>
            <C.Description>
              <C.Title>Descrição: {description}</C.Title>
            </C.Description>
          </C.DescriptionInfor>

          <C.DescriptionInfor>
            <C.Description>
              <C.Title>Valor: R$ {valueFormatado}</C.Title>
            </C.Description>
          </C.DescriptionInfor>

         </C.Infor>

        </C.ViewModalInfor>
        
      </Modal>
    </C.ContainerInfor>
  )
}
