import { useDispatch } from 'react-redux'

import { Button, Container, Inputs } from './styles'
import { setShowDelivery, setShowPayment } from '../../store/reducers/cart'

const Delivery = () => {
  const dispatch = useDispatch()

  const handleProceedToPayment = () => {
    dispatch(setShowPayment(true))
    dispatch(setShowDelivery(false))
  }

  return (
    <Container>
      <div className="cart">
        <h2>Entrega</h2>
        <Inputs>
          <label htmlFor="quem">Quem irá receber</label>
          <input type="text" />
        </Inputs>
        <Inputs>
          <label htmlFor="endereco">Endereço</label>
          <input type="text" />
        </Inputs>
        <Inputs>
          <label htmlFor="cidade">Cidade</label>
          <input type="text" />
        </Inputs>
        <Inputs>
          <div className="localizacao">
            <label htmlFor="cep">CEP</label>
            <input type="text" />
            <label htmlFor="numero">Número</label>
            <input type="number" />
          </div>
        </Inputs>
        <Inputs>
          <label htmlFor="complemento">Complemento (opcional)</label>
          <input type="text" />
        </Inputs>
        <div className="delivery-details"></div>
      </div>
      <Button onClick={handleProceedToPayment}>Ir para o pagamento</Button>
    </Container>
  )
}
export default Delivery
