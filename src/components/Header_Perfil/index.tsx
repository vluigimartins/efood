import { Link } from 'react-router-dom'
import { Carrinho, Container, Titulo, Vetor } from './styles'
import logo from '../../assets/images/logo.svg'
import vetor from '../../assets/images/Vector_Perfil.png'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/indesx'

const Header_Perfil = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <Vetor src={vetor} alt="vetor" />
      <Container>
        <Titulo>Restaurantes</Titulo>
        <Link to="/">
          <img src={logo} alt="efood" />
        </Link>
        <Carrinho onClick={openCart}>
          {items.length} produto(s) no carrinho
        </Carrinho>
      </Container>
    </>
  )
}

export default Header_Perfil
