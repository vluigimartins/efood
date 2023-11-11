import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ProductsListProfile from '../../components/ProductsListProfile'
import HeaderProfile from '../../components/HeaderProfile'
import HeroProfile from '../../components/HeroProfile/indesx'

export type Order = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Profile = () => {
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
      <HeaderProfile />
      <HeroProfile />
      <ProductsListProfile orders={orderTypes} />
    </>
  )
}

export default Profile
