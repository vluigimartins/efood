import { FooterSection, LogoFace, RedeSocial } from './styles'
import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram-round-svgrepo-com (1) 1.svg'
import facebook from '../../assets/images/facebook-round-svgrepo-com 1.svg'
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.svg'

const Footer = () => (
  <FooterSection>
    <img src={logo} alt="efood" />
    <RedeSocial>
      <li>
        <img src={instagram} alt="Logo instagram" />
      </li>
      <LogoFace>
        <img src={facebook} alt="Logo facebook" />
      </LogoFace>
      <li>
        <img src={twitter} alt="Logo twitter" />
      </li>
    </RedeSocial>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade
      <br /> dos produtos é toda do estabelecimento contratado.{' '}
    </p>
  </FooterSection>
)
export default Footer
