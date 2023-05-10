import React, { useState } from "react";
import * as C from './styles'
import { TouchableWithoutFeedback } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars'
import {ptBR} from './localeCalendar'

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

export default function CalendarModal({setVisible, handleFilter}){
  const [dateNow, setDateNow] = useState(new Date())
  const [markeddates, setMarkedDates ] = useState({})

  function handleOnDayPress(date){
    setDateNow(new Date(date.dateString))

    let markedDay = {}

    markedDay[date.dateString] = {
      selected: true,
      selectedColor: '#3b3dbf',
      textColor: '#fff'
    }

     setMarkedDates(markedDay)
  }
  
  function handleFilterDate(){
    handleFilter(dateNow)
    setVisible()
  }

  return(
    <C.Container>
      <TouchableWithoutFeedback onPress={setVisible} >
        <C.ViewCalendar></C.ViewCalendar>
      </TouchableWithoutFeedback>

      <C.ModaContent>
        <Calendar
         onDayPress={handleOnDayPress}
         markedDates={markeddates}
         enableSwipeMonths={true}
         theme={{
          todayTextColor: '#ff0000',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#fff'
         }}
        />

        <C.ButtonFilter onPress={handleFilterDate}>
          <C.ButtonFilterText>Filtrar</C.ButtonFilterText>
        </C.ButtonFilter>
      </C.ModaContent>
    </C.Container>
  )
}