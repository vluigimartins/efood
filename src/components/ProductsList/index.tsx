import { Container, List } from './styles'

import { Restaurants } from '../../pages/Home'

import Product from '../Product'

export type Props = {
  restaurants: Restaurants[]
}

const ProductsList = ({ restaurants }: Props) => (
  <div className="container">
    <Container>
      <List>
        {restaurants.map((restaurants) => (
          <Product
            key={restaurants.id}
            title={restaurants.titulo}
            rating={restaurants.avaliacao}
            highlight={restaurants.destacado}
            origin={restaurants.tipo}
            image={restaurants.capa}
            description={restaurants.descricao}
            id={restaurants.id}
          />
        ))}
      </List>
    </Container>
  </div>
)

export default ProductsList
