import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Cart from '../Cart'

import { usePurchaseMutation } from '../../services/api'
import {
  DeliveryData,
  changeSection,
  setCartVisibility,
  setDeliveryData
} from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import * as S from './styles'

const Delivery = () => {
  const { currentSection, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const [purchase] = usePurchaseMutation()
  const dispatch = useDispatch()

  const handleDeliverySubmit = (values: DeliveryData) => {
    dispatch(setDeliveryData(values))
    dispatch(changeSection('payment'))
  }

  const form = useFormik({
    initialValues: {
      who: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      who: Yup.string().required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string().required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string()
    }),
    onSubmit: (values) => {
      // handleDeliverySubmit(deliveryData)
      purchase({
        delivery: {
          receiver: values.who,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.complement
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
      // dispatch(
      //   setDeliveryData({
      //     receiver: values.who,
      //     address: {
      //       description: values.address,
      //       city: values.city,
      //       zipCode: values.cep,
      //       number: Number(values.number),
      //       complement: values.complement
      //     }
      //   })
      // )
    }
  })

  const handleContinueToPayment = () => {
    dispatch(changeSection('payment'))
  }

  const handleContinueToCart = () => {
    dispatch(changeSection('cart'))
    dispatch(setCartVisibility(true))
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <S.Container onSubmit={form.handleSubmit}>
      <div className="cart">
        <h2>Entrega</h2>
        <S.Inputs>
          <label htmlFor="who">Quem irá receber</label>
          <input
            type="text"
            id="who"
            name="who"
            value={form.values.who}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('who') ? 'error' : ''}
          />
        </S.Inputs>
        <S.Inputs>
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            id="address"
            name="address"
            value={form.values.address}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('address') ? 'error' : ''}
          />
        </S.Inputs>
        <S.Inputs>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            name="city"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('city') ? 'error' : ''}
          />
        </S.Inputs>
        <S.InputsNum>
          <div className="location">
            <div>
              <label htmlFor="cep">CEP</label>
              <input
                type="text"
                id="cep"
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cep') ? 'error' : ''}
              />
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <input
                type="number"
                id="number"
                name="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('number') ? 'error' : ''}
              />
            </div>
          </div>
        </S.InputsNum>
        <S.Inputs>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            type="text"
            id="complement"
            name="complement"
            value={form.values.complement}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputHasError('complement') ? 'error' : ''}
          />
        </S.Inputs>
        <div className="container-button"></div>
        <S.Button type="button" onClick={handleContinueToPayment}>
          Continuar para o Pagamento
        </S.Button>
        <S.Button onClick={handleContinueToCart}>
          Voltar para o carrinho
        </S.Button>
        {currentSection === 'cart' && <Cart />}
      </div>
    </S.Container>
  )
}

export default Delivery
