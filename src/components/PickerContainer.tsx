import React,{ ReactNode, useContext } from 'react'
import { View, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import { PickerContext } from '../contexts/PickerContext'

interface PickerContainerProps{
  title: string
  children: ReactNode
  dataType: DataType
}

export default function PickerContainer({title, children, dataType}: PickerContainerProps){

  const {tipoEletrodo, bitolaEletrodo, chapa, material, setOptionValue} = useContext(PickerContext)

  return (
    <View style={{width: "100%", marginVertical: 10}}>
      <Text>{title}</Text>
      <Picker
        mode="dropdown"
        selectedValue={
          dataType === "eletrodo" ? tipoEletrodo 
          : dataType === "bitola" ? bitolaEletrodo 
          : dataType === "chapa" ? chapa 
          : material
        }
        onValueChange={(itemValue,itemIndex) => {
          setOptionValue(String(itemValue), dataType)
        }}
      >
        {children}
      </Picker>
    </View>
  )
}
