import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'

export type Dish = {
  id: number
  destacado: boolean
  tipo: string
  titulo: string
  avaliacao: string
  capa: string
  descricao: string
}

const Home = () => {
  const [dishTypes, setDishTypes] = useState<Dish[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setDishTypes(res))
  })
  return (
    <>
      <Header />
      <ProductsList dishes={dishTypes} />
    </>
  )
}

export default Home
