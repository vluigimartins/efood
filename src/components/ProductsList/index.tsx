import Product from '../Product'
import { Container, List } from './styles'
import Dish from '../../models/Dishes'

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
            titulo={dish.title}
            nota={dish.note}
            destaque={dish.highlight}
            origem={dish.origin}
            imagem={dish.image}
            descricao={dish.description}
          />
        ))}
      </List>
    </Container>
  </div>
)

export default ProductsList
