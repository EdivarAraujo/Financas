import styled from "styled-components/native";
import { getStatusBarHeight} from 'react-native-status-bar-height'

export const Container = styled.View`
  flex: 1;
  background-color: #F0F4FF;
  justify-content: center;
  align-items: center;
`
 export const BackgroundImage = styled.ImageBackground.attrs({
    paddingTop: 0 + getStatusBarHeight()
  })`
  flex: 1;
  height: 100%;
  width: 100%; 
  margin-top: 25%;
  justify-content: center;
  align-items: center;
`;
export const ContainerInput = styled.View`
  flex: 1;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  margin-left: 50px;
`
export const TextInput = styled.Text`
  font-size: 12px;
  color: black;
  text-align: center;
  padding-left: 15px;
`
export const InputDados = styled.TextInput`
  height: 50px;
  width: 80%;
  margin: 12px;
  border-Width: 1px;
  border-radius: 5px;
  padding-left: 15px;   
`
