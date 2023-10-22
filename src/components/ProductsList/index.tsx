import { Restaurantes } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  restaurantes: Restaurantes[]
}

const ProductsList = ({ restaurantes }: Props) => (
  <div className="container">
    <Container>
      <List>
        {restaurantes.map((restaurante) => (
          <Product
            key={restaurante.id}
            titulo={restaurante.titulo}
            nota={restaurante.avaliacao}
            destaque={restaurante.destacado}
            origem={restaurante.tipo}
            imagem={restaurante.capa}
            descricao={restaurante.descricao}
            id={restaurante.id}
          />
        ))}
      </List>
    </Container>
  </div>
)

export default ProductsList
