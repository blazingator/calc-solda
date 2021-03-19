declare module '*.json'

declare type DataType = "eletrodo" | "bitola" | "chapa" | "material"
declare interface Eletrodo {
  id: number
  tipo: string
}

declare interface Bitola {
  espessura: string
  id: number
}

declare interface IData {
  material: Array<string>
  eletrodo: Array<Eletrodo>
  bitola: {
    arame: Array<Bitola>
    eletrodo: Array<Bitola>
  }
  tensao: Array<{
    tensao: string
    id: number
  }>
  corrente_chapa: {
    migmag: Array<{
      corrente: string
      tensao: number
      bitola_arame: number
      chapa: number
      material: string
    }>
    revestido: Array<{
      corrente: string
      eletrodo: number
      bitola_eletrodo: number
      chapa: number
    }>
  }
  espessura_chapa: {
    migmag: Array<{
      espessura: string
      id: number
    }>
    revestido: Array<{
      espessura: string
      id: number
    }>
  }
}
