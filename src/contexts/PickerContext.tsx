import React, {createContext, useState, ReactNode} from 'react'

interface PickerContextData{
  setOptionValue: (value: string, dataType: DataType) => void
  tipoEletrodo: string
  bitolaEletrodo: string
  chapa: string
  material: string
}

interface PickerContextProps{
  children: ReactNode
}

export const PickerContext = createContext({} as PickerContextData)

export function PickerProvider({children}: PickerContextProps){
  const [tipoEletrodo, setTipoEletrodo] = useState<string>("")
  const [bitolaEletrodo, setBitolaEletrodo] = useState<string>("")
  const [chapa, setChapa] = useState<string>("")
  const [material, setMaterial] = useState<string>("")

  function setOptionValue(value: string, dataType: DataType){
    if(dataType === "eletrodo"){
      setTipoEletrodo(value)
    }else if(dataType === "bitola"){
      setBitolaEletrodo(value)
    }else if(dataType === "chapa"){
      setChapa(value)
    }else{
      setMaterial(value)
    }
  }

  return (
    <PickerContext.Provider value={{
      setOptionValue,
      tipoEletrodo, bitolaEletrodo,
      chapa, material
    }}>
      {children}
    </PickerContext.Provider>
  )
}
