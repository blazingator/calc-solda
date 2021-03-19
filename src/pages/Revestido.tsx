import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Picker} from '@react-native-picker/picker'

import {PickerProvider} from '../contexts/PickerContext'
import PickerContainer from '../components/PickerContainer'
import ResultRevestido from '../components/ResultRevestido'
import data from '../utils/readData'

export function Revestido(){
  const {eletrodo, bitola: {eletrodo: bitola_eletrodo}} = data

  return (
    <PickerProvider>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Solda com eletrodo revestido</Text>

        <PickerContainer
          title="Tipo de eletrodo"
          dataType="eletrodo"
        >
          {eletrodo.map(ele => (
            <Picker.Item key={ele.id} label={ele.tipo} value={ele.tipo}/>
          ))}
        </PickerContainer>
        <PickerContainer
          title="Bitola do eletrodo"
          dataType="bitola"
        >
          {bitola_eletrodo.map(bi => <Picker.Item key={bi.id} label={bi.espessura} value={bi.espessura} />)}
        </PickerContainer>
        <ResultRevestido />
      </View>
    </PickerProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 15
  },
  mainTitle: {
    fontWeight: "700",
    fontSize: 22
  }

 })
