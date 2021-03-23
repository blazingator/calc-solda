import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tabs = createMaterialTopTabNavigator()

import {Revestido, MigMag } from './src/pages'
import ModalSobre from './src/components/ModalSobre'

export default function App() {  
  return (
    <NavigationContainer>
      <ModalSobre />
      <Tabs.Navigator>
        <Tabs.Screen name="Revestido" component={Revestido} />
        <Tabs.Screen name="MigMag" component={MigMag} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}


