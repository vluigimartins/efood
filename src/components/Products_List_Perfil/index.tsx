import { Order } from '../../pages/Perfil'
import Product_Perfil from '../Product_Perfil'
import { Banner, Container, List, TituloBanner, TituloPerfil } from './styles'
import banner from '../../assets/images/macarrao_banner.png'

export type Props = {
  orders: Order[]
}

const Products_List_Perfil = ({ orders }: Props) => (
  <>
    <Banner>
      <img src={banner} alt="Macarrao" />
    </Banner>
    <TituloBanner>titulo</TituloBanner>
    <TituloPerfil>La Dolce Vita Trattoria</TituloPerfil>
    <div className="container">
      <Container>
        <List>
          {orders.map((order) => (
            <Product_Perfil
              key={order.id}
              description={order.descricao}
              image={order.foto}
              title={order.nome}
              preco={order.preco}
              porcao={order.porcao}
            />
          ))}
        </List>
      </Container>
    </div>
  </>
)

export default Products_List_Perfil
