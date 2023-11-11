import { Link } from 'react-router-dom'
import * as S from './styles'
import star from '../../assets/images/estrela.svg'

type Props = {
  id: number
  title: string
  rating: string
  highlight: boolean
  origin: string
  image: string
  description: string
}

const Product = ({
  id,
  title,
  rating,
  highlight,
  origin,
  image,
  description
}: Props) => {
  return (
    <S.Card>
      <S.Image src={image} alt={title} />
      {highlight === true && <S.Highlight>Destaque da semana</S.Highlight>}
      <S.Origin>{origin}</S.Origin>
      <S.Infos>
        <S.MainInfo>
          <S.Title>{title}</S.Title>
          <S.Rating>{rating}</S.Rating>
          <S.Star src={star} />
        </S.MainInfo>
        <S.Description>{description}</S.Description>
        <Link to={`/perfil/${id}`}>
          <S.Button>Saiba mais</S.Button>
        </Link>
      </S.Infos>
    </S.Card>
  )
}

export default Product
