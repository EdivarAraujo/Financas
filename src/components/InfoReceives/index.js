import React from "react";
import { Modal, Text } from "react-native"
import * as C from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function InforReceives({data,setVisible, visible}){

  console.log(data)

  return (
    <C.ContainerInfor>
      <Modal 
        visible={visible}
        transparent={true}
        style={{justifyContent: 'center', alignItems: 'center'}}  
      >
        <C.ViewModalInfor>
         <C.Infor>
          <C.ButtonExit 
            onPress={setVisible}
            title="fechar">
              <Icon
               name="close"
               size={25}
               color="#121212"
              />
          </C.ButtonExit>

         </C.Infor>
        </C.ViewModalInfor>
      </Modal>
    </C.ContainerInfor>
  )
}