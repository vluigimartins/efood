import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import recycle from '../../assets/images/lixeira-de-reciclagem 1.png'

import { RootReducer } from '../../store'
import {
  close,
  remove,
  changeSection,
  setCartVisibility
} from '../../store/reducers/cart'

import { FormatPrice } from '../ProductProfile'
import Delivery from '../Delivery'
import Payment from '../Payment'

const Cart = () => {
  const { isOpen, items, currentSection, isCartVisible } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentValue) => {
      return (accumulator += currentValue.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const handleContinueToDelivery = () => {
    dispatch(changeSection('delivery'))
    dispatch(setCartVisibility(false))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {isCartVisible && (
          <>
            {items.map((item) => (
              <S.CartCard key={item.id}>
                <S.Image src={item.foto} alt={item.nome} />
                <div className="containerCart">
                  <h3>{item.nome}</h3>
                  <p>{FormatPrice(item.preco)}</p>
                </div>
                <S.Recycle src={recycle} onClick={() => removeItem(item.id)} />
              </S.CartCard>
            ))}
            <S.CurrentValue>
              <p>Valor total</p>
              <p>{FormatPrice(getTotalPrice())}</p>
            </S.CurrentValue>

            <S.Button onClick={handleContinueToDelivery}>
              Continuar com a entrega
            </S.Button>
          </>
        )}
        {currentSection === 'delivery' && <Delivery />}
        {currentSection === 'payment' && <Payment />}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
