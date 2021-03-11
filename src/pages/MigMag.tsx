import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export function MigMag(){
  return (
    <View style={styles.container}>
      <Text>Solda MIG-MAG</Text>
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
