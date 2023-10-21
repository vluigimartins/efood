import { Link } from 'react-router-dom'
import { Carrinho, Container, Titulo, Vetor } from './styles'
import logo from '../../assets/images/logo.svg'
import vetor from '../../assets/images/Vector_Perfil.png'
import { Order } from '../../pages/Perfil'

export type Props = {
  orders: Order[]
}

const Header_Perfil = () => {
  return (
    <>
      <Vetor src={vetor} alt="vetor" />
      <Container>
        <Titulo>Restaurantes</Titulo>
        <Link to="/">
          <img src={logo} alt="efood" />
        </Link>
        <Carrinho>0 produto(s) no carrinho</Carrinho>
      </Container>
    </>
  )
}

export default Header_Perfil
