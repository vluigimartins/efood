import { Link } from 'react-router-dom'

import { Container, Hero, Titulo, Vetor } from './styles'
import logo from '../../assets/images/logo.svg'
import vetor from '../../assets/images/Vector_Home.png'

const Header = () => (
  <Hero>
    <Vetor src={vetor} alt="vetor" />
    <Container>
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>
      <Titulo>
        Viva experiências gastronômicas
        <br /> no conforto da sua casa
      </Titulo>
    </Container>
  </Hero>
)

export default Header
