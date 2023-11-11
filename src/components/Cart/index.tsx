import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import recycle from '../../assets/images/lixeira-de-reciclagem 1.png'
import {
  close,
  remove,
  setShowDelivery,
  setShowPayment
} from '../../store/reducers/cart'
import { FormatPrice } from '../ProductProfile'
import Delivery from '../Delivery'

const Cart = () => {
  const { isOpen, items, showDelivery, showPayment } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const handleDeliveryClick = () => {
    console.log("Botão 'Continuar com a entrega' clicado")
    dispatch(setShowDelivery(true))
    dispatch(setShowPayment(false))
  }

  const handlePaymentClick = () => {
    dispatch(setShowPayment(true))
    dispatch(setShowDelivery(false))
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentValue) => {
      return (accumulator += currentValue.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
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
        {showDelivery ? (
          <>
            <S.Button onClick={() => dispatch(setShowDelivery(false))}>
              Voltar para a entrega
            </S.Button>
          </>
        ) : showPayment ? (
          <S.Button onClick={() => dispatch(setShowPayment(false))}>
            Voltar para a área de pagamento
          </S.Button>
        ) : (
          <>
            <S.Button onClick={handleDeliveryClick}>
              Continuar com a entrega
            </S.Button>
          </>
        )}

        {showDelivery && (
          <S.Button onClick={handlePaymentClick}>Ir para pagamento</S.Button>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
