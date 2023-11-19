import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Restaurants } from '../../pages/Home'

import * as S from './styles'

const HeroPerfil = () => {
  const { id } = useParams()
  const [restaurants, setRestaurants] = useState<Restaurants>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [id])

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <S.Banner>
        <img src={restaurants.capa} />
      </S.Banner>
      <div className="container">
        <S.BannerTitle className="containerBanner">
          {restaurants.titulo}
        </S.BannerTitle>
        <S.ProfileTitle>{restaurants.tipo}</S.ProfileTitle>
      </div>
    </>
  )
}

export default HeroPerfil
