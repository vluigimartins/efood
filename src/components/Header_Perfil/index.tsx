import {
  Banner,
  Carrinho,
  Container,
  Header,
  Titulo,
  TituloBanner,
  TituloPerfil,
  Vetor
} from './styles'
import logo from '../../assets/images/logo.svg'
import vetor from '../../assets/images/Vector_Perfil.png'
import banner from '../../assets/images/macarrao_banner.png'
import { Link } from 'react-router-dom'

const Header_Perfil = () => (
  <>
    <Header>
      <Vetor src={vetor} alt="vetor" />
      <Container>
        <Titulo>Restaurantes</Titulo>
        <Link to="/">
          <img src={logo} alt="efood" />
        </Link>
        <Carrinho>0 produto(s) no carrinho</Carrinho>
      </Container>
    </Header>
    <Banner>
      <img src={banner} alt="Macarrao" />
    </Banner>
    <TituloBanner>Italiana</TituloBanner>
    <TituloPerfil>La Dolce Vita Trattoria</TituloPerfil>
  </>
)

export default Header_Perfil
