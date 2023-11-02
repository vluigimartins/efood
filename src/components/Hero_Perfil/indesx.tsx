import { Banner, TituloBanner, TituloPerfil } from './styles'
import { Restaurantes } from '../../pages/Home'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const HeroPerfil = () => {
  const { id } = useParams()
  const [restaurantes, setRestaurantes] = useState<Restaurantes>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [id])

  if (!restaurantes) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Banner>
        <img src={restaurantes.capa} />
      </Banner>
      <div className="container">
        <TituloBanner className="containerBanner">
          {restaurantes.tipo}
        </TituloBanner>
        <TituloPerfil>{restaurantes.titulo}</TituloPerfil>
      </div>
    </>
  )
}

export default HeroPerfil
