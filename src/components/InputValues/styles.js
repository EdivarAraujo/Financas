import styled from 'styled-components/native';

export const ContainerInput = styled.View`
  width: 90%;
  align-items: center;
  margin: 1%;
  justify-content: center;
`;
export const FildInpult = styled.TextInput`
  width: 97%;
  height: 60px;
  color: #000;
  border: 1px solid #d9d9d9;
  padding: 1% 5%;
  text-align: left;
  font-size: 18px;
  border-radius: 5px;
  background-color: #fff;
`;
export const TextComponent = styled.Text.attrs({
  paddingVertical: 4
})`
  color: #fff;
  width: 95%;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
`;
export const RequiredTextView = styled.View` 
  width: 100%;
  align-items: flex-start;
  padding: 0% 0% 2% 2%;  
  margin: 0;
`;
export const RequiredText = styled.Text`
  color: #ff0000;
  font-size: 14px;
`