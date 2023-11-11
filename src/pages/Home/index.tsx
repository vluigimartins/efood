import { useEffect, useState } from 'react'

import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'

export type Restaurants = {
  id: number
  destacado: boolean
  tipo: string
  titulo: string
  avaliacao: string
  capa: string
  descricao: string
}

const Home = () => {
  const [restaurants, setRestaurantes] = useState<Restaurants[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  })
  return (
    <>
      <Header />
      <ProductsList restaurants={restaurants} />
    </>
  )
}

export default Home
