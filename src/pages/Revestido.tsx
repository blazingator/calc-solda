import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export function Revestido(){
  return (
    <View style={styles.container}>
      <Text>Eletrodo revestido</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})
