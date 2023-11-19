import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import logo from '../../assets/images/logo.svg'
import vector from '../../assets/images/Vector_Perfil.png'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'

const HeaderProfile = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <S.Vector src={vector} alt="vetor" />
      <S.Container>
        <S.Title>Restaurantes</S.Title>
        <Link to="/">
          <img
            src={logo}
            alt="efood"
            title="Clique aqui para voltar a página inicial"
          />
        </Link>
        <S.Cart onClick={openCart} title="Clique aqui para ver o carrinho">
          {items.length} produto(s) no carrinho
        </S.Cart>
        <S.CartMobile onClick={openCart}>
          {items.length}
          <AiOutlineShoppingCart size={40} />
        </S.CartMobile>
      </S.Container>
    </>
  )
}

export default HeaderProfile
