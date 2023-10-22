import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'

export type Restaurantes = {
  id: number
  destacado: boolean
  tipo: string
  titulo: string
  avaliacao: string
  capa: string
  descricao: string
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  })
  return (
    <>
      <Header />
      <ProductsList restaurantes={restaurantes} />
    </>
  )
}

export default Home
