import React, {useState} from 'react'
import {View, Text, TouchableOpacity, Modal, StyleSheet, Linking, Alert} from 'react-native'
import { Feather } from '@expo/vector-icons'
import Constants from 'expo-constants'

export default function ModalSobre(){
  const [modalVisible, setModalVisible] = useState(false)
  const licenseURl = "https://www.gnu.org/licenses/gpl-3.0.pt-br.html"
  
  async function handlePress(){
    const supported = await Linking.canOpenURL(licenseURl)
    if(supported)
      await Linking.openURL(licenseURl)
    else
      Alert.alert("Não foi possivel abrir o navegador")
  }

  return(
    <>
    <TouchableOpacity
      onPress={() => setModalVisible(!modalVisible)}
      style={styles.helpButton}>
      <Feather name="help-circle" size={28} />
    </TouchableOpacity>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Desenvolvido por Vinicius Domingos</Text>

          <Text style={styles.modalHeader}>Repositório</Text>
           <TouchableOpacity onPress={handlePress}>
             <Text style={{...styles.modalText, color: "#367af5"}}><Feather name="github" size={22}/> Github</Text>
          </TouchableOpacity>

          <Text style={styles.modalHeader}>Licença</Text>
          <TouchableOpacity onPress={handlePress}>
            <Text style={{...styles.modalText, color: "#367af5"}}>GNU GPL-3.0</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.closeModal} onPress={() => setModalVisible(false)}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </View>

        
      </View>
    </Modal>
  </>
  )
}

const styles = StyleSheet.create({
  helpButton: {
    marginTop: Constants.statusBarHeight + 7,
    width: 28, height: 28,
    alignSelf: "flex-end",
    margin: 5 
  },
  
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    textAlign: "center"
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 10
  },
  closeModal: {
    marginTop: 15
  }
})
