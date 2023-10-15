import {
  Card,
  Descricao,
  Destaque,
  Nota,
  Origem,
  Titulo,
  Infos,
  Estrela,
  Button,
  InfoPrincipal,
  Imagem
} from './styles'
import estrela from '../../assets/images/estrela.svg'

type Props = {
  titulo: string
  nota: string
  destaque: boolean
  origem: string
  imagem: string
  descricao: string
}

const Product = ({
  titulo,
  nota,
  destaque,
  origem,
  imagem,
  descricao
}: Props) => (
  <Card>
    <Imagem src={imagem} alt={titulo} />
    <Destaque>{destaque}</Destaque>
    <Origem>{origem}</Origem>
    <Infos>
      <InfoPrincipal>
        <Titulo>{titulo}</Titulo>
        <Nota>{nota}</Nota>
        <Estrela src={estrela} />
      </InfoPrincipal>
      <Descricao>{descricao}</Descricao>
      <Button>Saiba mais</Button>
    </Infos>
  </Card>
)

export default Product
