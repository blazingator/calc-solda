import React, {useContext, useEffect, useState} from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import {PickerContext} from '../contexts/PickerContext'
import data from '../utils/readData'

export default function ResultMigMag(){
  const [corrente, setCorrente] = useState<string>("")
  const [tensao, setTensao] = useState<string>("")
  const [bitola, setBitola] = useState<string>("")

  const {material, chapa} = useContext(PickerContext)
  const selectedChapa = data.espessura_chapa.migmag.find(cha => cha.espessura === chapa)

  useEffect(() => {
    if(selectedChapa === null || material === null){
      throw Error("Não foi possivel fazer a busca na matriz de dados")
    }

    const corr_cha = data.corrente_chapa.migmag.find(mm => mm.material === material && mm.chapa === selectedChapa?.id)
    const tensaoSolda = data.tensao.find(t => t.id === corr_cha?.tensao)
    const bitolaArarme = data.bitola.arame.find(b => b.id === corr_cha?.bitola_arame)

    setBitola(String(bitolaArarme?.espessura))
    setTensao(String(tensaoSolda?.tensao))
    setCorrente(String(corr_cha?.corrente))
  }, [material, chapa])

  return (
    <View style={styles.resultContainer}>
      <View style={styles.result}>
        <Text style={styles.resultTitle}>Corrente Média</Text>
        <Text style={styles.resultText}>{corrente}</Text>
      </View>
      <View style={styles.result}>
        <Text style={styles.resultTitle}>Tensão de solda</Text>
        <Text style={styles.resultText}>{tensao}</Text>
      </View>
      <View style={styles.result}>
        <Text style={styles.resultTitle}>Bitola do arame</Text>
        <Text style={styles.resultText}>{bitola}</Text>
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
  },
  resultText: {
    textAlign: "center",
    marginTop: 5
  }
})
