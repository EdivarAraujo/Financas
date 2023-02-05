import styled from "styled-components/native";
import { getStatusBarHeight} from 'react-native-status-bar-height'
import img from '../../assets/logoDrawer.png';

export const Container = styled.View`
 flex: 1;
 background-color: '#F0F4FF';
 justify-content: center;
 align-items: center;
`
export const TextTela = styled.Text`
 font-size: 12px;
 color: black;
`
 export const BackgroundImage = styled.ImageBackground.attrs({
    paddingTop: 0 + getStatusBarHeight()
  })`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;
  width: 100%;
  padding-bottom: 40%;
`;
