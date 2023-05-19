import styled from "styled-components/native";

export const ContainerBackground = styled.SafeAreaView`
 flex: 1;
 background-color: #fff;
`
export const ListBalance = styled.FlatList`
 max-height: 190px;
`
export const  Area = styled.View`
 margin-top: 24px;
 background-color: #fff;
 border-top-left-radius: 15px;
 border-top-right-radius: 15px;
 flex-direction: row;
 padding-top: 14px;
 padding-left: 14px;
 padding-right: 14%;
 align-items: baseline;
`
export const ButtonCalendar = styled.TouchableOpacity``

export const Title = styled.Text`
 margin-left: 4px;
 color: #121212;
 margin-bottom: 14px;
 font-size: 18px;
 font-weight: bold;
`
export const List = styled.FlatList`
 flex: 1;
 background-color: #fff;
 /* position: relative; */
`
export const ContainerButton = styled.View` 
 justify-content: flex-end;
 align-items: flex-end;
 margin-right: 20px;
 margin-bottom: auto;
`
export const ButtonAddSpent = styled.TouchableOpacity`
 position: absolute;
 width: 80px;
 height: 80px;
 background-color: #3b3dbf;
 border-radius: 50px;
 align-items: center;
 justify-content: center;
`