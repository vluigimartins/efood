import {
  CartCard,
  CartContainer,
  Overlay,
  SideBar,
  Image,
  ValorTotal,
  Button,
  Lixeira
} from './styles'

import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/indesx'

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Product_Perfil'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {items.map((item) => (
          <CartCard key={item.id}>
            <Image src={item.foto} alt={item.nome} />
            <div className="containerCart">
              <h3>{item.nome}</h3>
              <p>{formataPreco(item.preco)}</p>
            </div>
            <Lixeira src={lixeira} onClick={() => removeItem(item.id)} />
          </CartCard>
        ))}
        <ValorTotal>
          <p>Valor total</p>
          <p>{formataPreco(getTotalPrice())}</p>
        </ValorTotal>
        <Button>Continuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
