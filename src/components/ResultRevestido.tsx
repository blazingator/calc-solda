import React, { useContext, useState, useEffect } from 'react'
import { View,Text, StyleSheet, Dimensions } from 'react-native'

import {PickerContext} from '../contexts/PickerContext'
import data from '../utils/readData'

export default function ResultRevestido(){
  const { tipoEletrodo, bitolaEletrodo } = useContext(PickerContext)
  const [chapa, setChapa] = useState<string>("")
  const [corrente, setCorrente] = useState<string>("")
  const eletrodoId = data.eletrodo.find(ele => ele.tipo === tipoEletrodo)
  const bitolaId = data.bitola.eletrodo.find(ele => bitolaEletrodo === ele.espessura)

  useEffect(() => {
    if(eletrodoId === null || bitolaId === null){
      throw new Error("Não foi possivel fazer a busca na matriz")
    }

    let corr_cha = data.corrente_chapa.revestido.find(cha => {
      if(bitolaId?.id == cha.bitola_eletrodo && eletrodoId?.id === cha.eletrodo){
        return cha
      }
    })

    let cha = data.espessura_chapa.revestido.find(ch => ch.id === corr_cha?.chapa)

    setChapa(String(cha?.espessura))
    setCorrente(String(corr_cha?.corrente)) 
  }, [tipoEletrodo,bitolaEletrodo])

  return (
    <View style={styles.resultContainer}>

      <View style={styles.result}>
        <Text style={styles.resultTitle}>Corrente média, polaridade do equipamento</Text>
        <Text style={styles.resultText}>{corrente}</Text>
      </View>

      <View style={styles.result}>
        <Text style={styles.resultTitle}>Espessura indicada da chapa</Text>
        <Text style={styles.resultText}>{chapa}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  resultContainer: {
    backgroundColor: "#43d87c",
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
    fontSize: 18,
    textAlign: "center"
  },
  resultText: {
    textAlign: "center",
    marginTop: 5
  }
})
