import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useFormik } from 'formik'

import * as S from './styles'

import { RootReducer } from '../../store'
import { changeSection, close } from '../../store/reducers/cart'

import Delivery from '../Delivery'
import { Container, Button, Inputs, InputsNum } from '../Delivery/styles'
import { FormatPrice } from '../ProductProfile'

const Payment = () => {
  const { items, currentSection } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [done, setDone] = useState(false)
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      name: '',
      cardNumber: '',
      cvv: '',
      month: '',
      year: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  useEffect(() => {
    // Remova a lógica de mudança de seção do useEffect
  }, [currentSection, dispatch])

  const closeCart = () => {
    dispatch(close())
  }

  const isRealized = () => {
    setDone(!done)
  }

  const handleContinueToDelivery = () => {
    dispatch(changeSection('delivery'))
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentValue) => {
      return (accumulator += currentValue.preco!)
    }, 0)
  }

  return (
    <Container onSubmit={form.handleSubmit}>
      {done ? (
        <S.OrderContainer>
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
        </S.OrderContainer>
      ) : (
        <S.PaymentContainer>
          <h2>Pagamento - Valor a pagar {FormatPrice(getTotalPrice())}</h2>
          <Inputs>
            <label htmlFor="name">Nome no cartão</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.values.name}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
          </Inputs>
          <S.InputsCard>
            <div className="row-number">
              <div>
                <label htmlFor="cardNumber">Número do cartão</label>
                <S.InputsCardName
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>
              <div>
                <label htmlFor="cvv">CVV</label>
                <S.InputsCardCVV
                  type="number"
                  id="cvv"
                  name="cvv"
                  value={form.values.cvv}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>
            </div>
          </S.InputsCard>
          <InputsNum>
            <div className="row-number">
              <div>
                <label htmlFor="month">Mês de vencimento</label>
                <input
                  type="text"
                  id="month"
                  name="month"
                  value={form.values.month}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>
              <div>
                <label htmlFor="year">Ano de vencimento</label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  value={form.values.year}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </div>
            </div>
          </InputsNum>
          <div className="container-button">
            <Button onClick={isRealized}>Finalizar pagamento</Button>
            <Button onClick={handleContinueToDelivery}>
              Voltar para a edição de endereço
            </Button>
            {currentSection === 'delivery' && <Delivery />}
          </div>
        </S.PaymentContainer>
      )}
    </Container>
  )
}

export default Payment
