import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Delivery from '../Delivery'
import { Button, Inputs, InputsNum } from '../Delivery/styles'

import { usePurchaseMutation } from '../../services/api'
import { FormatPrice } from '../ProductProfile'
import { RootReducer } from '../../store'
import { changeSection, clear, close } from '../../store/reducers/cart'

import * as S from './styles'

const Payment = () => {
  const { items, currentSection } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      month: '',
      year: '',
      who: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.number().required('O campo é obrigatório'),
      cvv: Yup.string().required('O campo é obrigatório'),
      month: Yup.string().required('O campo é obrigatório'),
      year: Yup.number().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.month),
              year: Number(values.year)
            }
          }
        },
        delivery: {
          receiver: values.who,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number)
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const closeCart = () => {
    dispatch(close())
  }

  const handleContinueToDelivery = () => {
    dispatch(changeSection('delivery'))
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentValue) => {
      if (currentValue.preco) {
        return (accumulator += currentValue.preco)
      }
      return 0
    }, 0)
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  return (
    <S.Container>
      {isSuccess && data ? (
        <S.OrderContainer onSubmit={form.handleSubmit}>
          <h2>Pedido realizado - {data.orderId}</h2>
          <>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </>
          <Button type="button" onClick={closeCart}>
            Concluir
          </Button>
        </S.OrderContainer>
      ) : (
        <S.PaymentContainer>
          <h2>Pagamento - Valor a pagar {FormatPrice(getTotalPrice())}</h2>
          <Inputs>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={form.values.cardName}
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
                  type="text"
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
            <Button
              type="button"
              onClick={() => form.isValid && form.submitForm()}
            >
              Finalizar pagamento
            </Button>
            <Button onClick={handleContinueToDelivery}>
              Voltar para a edição de endereço
            </Button>
            {currentSection === 'delivery' && <Delivery />}
          </div>
        </S.PaymentContainer>
      )}
    </S.Container>
  )
}

export default Payment
