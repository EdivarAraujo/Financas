import styled from "styled-components/native";

export const RegisterContainer = styled.View`
flex-direction: row;
padding-left: 6%;
padding-right: 6%;
width: 100%;
justify-content: space-between;
align-items: center;
`
export const RegisterTypeButton = styled.TouchableOpacity`
background-color: ${({checked}) => checked ? "#fff" : "#e7e7e7"};
width: 47%;
justify-content: center;
align-items: center;
flex-direction: row;
height: 45px;
border-radius: 4px;
border-width: 1.5px;
border-color: ${({checked}) => checked ? "#3b3dbf" : "transparent"};
margin-bottom: 14px;
margin-top: 15px;
`
export const RegisterLabel = styled.Text`
margin-left: 8px;
font-size: 17px;
`