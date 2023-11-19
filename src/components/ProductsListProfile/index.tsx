import Product_Perfil from '../ProductProfile'
import { Order } from '../../pages/Profile'

import { Container, List } from './styles'

export type Props = {
  orders: Order[]
}

const ProductsListProfile = ({ orders }: Props) => {
  return (
    <div className="container">
      <Container>
        <List>
          {orders.map((order) => (
            <Product_Perfil
              key={order.id}
              descricao={order.descricao}
              foto={order.foto}
              nome={order.nome}
              preco={order.preco}
              porcao={order.porcao}
              id={order.id}
            />
          ))}
        </List>
      </Container>
    </div>
  )
}

export default ProductsListProfile
