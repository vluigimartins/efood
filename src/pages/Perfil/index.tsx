import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Products_List_Perfil from '../../components/Products_List_Perfil'
import Header_Perfil from '../../components/Header_Perfil'
import HeroPerfil from '../../components/Hero_Perfil/indesx'

export type Order = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Perfil = () => {
  const { id } = useParams()
  const [orderTypes, setOrderTypes] = useState<Order[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setOrderTypes(res.cardapio))
  }, [id])

  if (!orderTypes) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header_Perfil />
      <HeroPerfil />
      <Products_List_Perfil orders={orderTypes} />
    </>
  )
}

export default Perfil
