import { Hero, Titulo } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <Hero>
    <img src={logo} alt="efood" />
    <Titulo>
      Viva experiências gastronômicas
      <br /> no conforto da sua casa
    </Titulo>
  </Hero>
)

export default Header
