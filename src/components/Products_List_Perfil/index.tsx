import Product_Perfil from '../Product_Perfil'
import { Container, List } from './styles'
import { Order } from '../../pages/Perfil'

export type Props = {
  orders: Order[]
}

const Products_List_Perfil = ({ orders }: Props) => {
  return (
    <div className="container">
      <Container>
        <List>
          {orders.map((order) => (
            <Product_Perfil
              key={order.id}
              descricao={order.descricao}
              imagem={order.foto}
              titulo={order.nome}
              preco={order.preco}
              porcao={order.porcao}
            />
          ))}
        </List>
      </Container>
    </div>
  )
}

export default Products_List_Perfil
