import { Button, Card, Descricao, Titulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Product_Perfil = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Button>Adicionar ao carrinho</Button>
  </Card>
)

export default Product_Perfil
