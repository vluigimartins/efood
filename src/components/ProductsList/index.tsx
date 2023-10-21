import { Dish } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  dishes: Dish[]
}

const ProductsList = ({ dishes }: Props) => (
  <div className="container">
    <Container>
      <List>
        {dishes.map((dish) => (
          <Product
            key={dish.id}
            titulo={dish.titulo}
            nota={dish.avaliacao}
            destaque={dish.destacado}
            origem={dish.tipo}
            imagem={dish.capa}
            descricao={dish.descricao}
            id={dish.id}
          />
        ))}
      </List>
    </Container>
  </div>
)

export default ProductsList
