import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import vector from '../../assets/images/Vector_Perfil.png'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

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
          <img src={logo} alt="efood" />
        </Link>
        <S.Cart onClick={openCart}>
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
