import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  close,
  setShowDelivery,
  setShowPayment
} from '../../store/reducers/cart'
import { OrderContainer } from './styles'
import { Container, Button, Inputs } from '../Delivery/styles'
import { RootReducer } from '../../store'

const Payment = () => {
  const { isOpen, showDelivery } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [done, setDone] = useState(false)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const isRealized = () => {
    setDone(!done)
  }

  const handleReturnToDelivery = () => {
    dispatch(setShowDelivery(true))
    dispatch(setShowPayment(false))
  }
  return (
    <Container>
      {done ? (
        <OrderContainer>
          <h2>Pedido realizado - ORDER_ID</h2>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <Button onClick={closeCart}>Concluir</Button>
        </OrderContainer>
      ) : (
        <>
          <h2>Pagamento - Valor a pagar R$ 190,00</h2>
          <Inputs>
            <label htmlFor="nome">Nome no cartão</label>
            <input type="text" />
          </Inputs>
          <Inputs>
            <label htmlFor="cartao">Número do cartão</label>
            <input type="text" />
            <label htmlFor="cvv">CVV</label>
            <input type="number" />
          </Inputs>
          <Inputs>
            <div>
              <label htmlFor="mes">Mês de vencimento</label>
              <input type="text" />
              <label htmlFor="ano">Ano de vencimento</label>
              <input type="number" />
            </div>
          </Inputs>
          <div className="dadosEntrega">
            <Button onClick={isRealized}>Finalizar pagamento</Button>
            {showDelivery && (
              <Button onClick={handleReturnToDelivery}>
                Voltar para a entrega
              </Button>
            )}
          </div>
        </>
      )}
    </Container>
  )
}

export default Payment
