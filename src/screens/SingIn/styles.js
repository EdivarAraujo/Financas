import styled from "styled-components/native";
import { getStatusBarHeight} from 'react-native-status-bar-height'
import { Animated } from "react-native";


export const Container = styled.View`
  flex: 1;
`
export const BoxLogo = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
 export const Logo = styled(Animated.Image).attrs({
    paddingTop: 0 + getStatusBarHeight(),
    resizeMode: 'contain',
  })`
  margin-top: 25%;
  justify-content: center;
  align-items: center;
`;
export const ContainerInput = styled.View`
  flex: 2;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  /* margin-left: 50px; */
  justify-content: center;
`
export const TextInput = styled.Text`
  font-size: 18px;
  color: black;
  text-align: center;
  /* padding-left: 15px; */
`
export const InputDados = styled.TextInput`
  height: 50px;
  width: 80%;
  margin: 12px;
  border-Width: 1px;
  border-radius: 5px;
  padding-left: 15px;   
`
export const ImageLogo = styled.Image.attrs({
  resizeMode: 'stretch',
})`
   width: 50;
   height: 200;
`
