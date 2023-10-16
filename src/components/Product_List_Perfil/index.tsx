import Order from '../../models/Orders'
import Product_Perfil from '../Product_Perfil'
import { Container, List } from './styles'

export type Props = {
  orders: Order[]
}

const Products_List_Perfil = ({ orders }: Props) => (
  <div className="container">
    <Container>
      <List>
        {orders.map((order) => (
          <Product_Perfil
            key={order.id}
            description={order.description}
            image={order.image}
            title={order.title}
          />
        ))}
      </List>
    </Container>
  </div>
)

export default Products_List_Perfil
