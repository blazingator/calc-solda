import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Picker} from '@react-native-picker/picker'

import {PickerProvider} from '../contexts/PickerContext'
import PickerContainer from '../components/PickerContainer'
import ResultMigMag from '../components/ResultMigMag'
import data from '../utils/readData'

export function MigMag(){
  const {espessura_chapa: {migmag}, material} = data

  return (
    <PickerProvider>
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Solda MIG-MAG</Text>

      <PickerContainer title="Material" dataType="material">
        {material.map((mat, index) =>
        <Picker.Item key={index} label={mat} value={mat} />)}
      </PickerContainer>
      <PickerContainer title="Espessura da chapa" dataType="chapa">
        {migmag.map(mmag =>
      <Picker.Item key={mmag.id} label={mmag.espessura} value={mmag.espessura} />)}
      </PickerContainer>

      <ResultMigMag />

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
