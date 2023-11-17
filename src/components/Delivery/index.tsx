import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'

import * as S from './styles'
import { changeSection, setCartVisibility } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { useEffect } from 'react'
import Cart from '../Cart'

const Delivery = () => {
  const { currentSection } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      who: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  useEffect(() => {
    // Remova a lógica de mudança de seção do useEffect
  }, [currentSection, dispatch])

  const handleContinueToPayment = () => {
    dispatch(changeSection('payment'))
  }

  const handleContinueToCart = () => {
    dispatch(changeSection('cart'))
    dispatch(setCartVisibility(true))
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
              />
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <input
                type="text"
                id="number"
                name="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
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
          />
        </S.Inputs>
        <div className="container-button"></div>
        <S.Button onClick={handleContinueToPayment}>
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
