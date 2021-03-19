import React, {useContext} from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import {PickerContext} from '../contexts/PickerContext'

export default function ResultMigMag(){
  const {material, chapa} = useContext(PickerContext)

  return (
    <View style={styles.resultContainer}>
      <View style={styles.result}>
        <Text style={styles.resultTitle}>Corrente Média</Text>
        <Text></Text>
      </View>
      <View style={styles.result}>
        <Text style={styles.resultTitle}>Tensão de solda</Text>
        <Text></Text>
      </View>
      <View style={styles.result}>
        <Text style={styles.resultTitle}>Bitola do arame</Text>
        <Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  resultContainer: {
    backgroundColor: "#ffc000",
    width: "100%",
    height: Dimensions.get("window").height - 320,
    padding: 15,
    justifyContent: "center"
  },
  result: {
    marginVertical: 10,
    padding: 5
  },
  resultTitle: {
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center"
  }
})
