import { Link } from 'react-router-dom'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import vector from '../../assets/images/Vector_Home.png'

const Header = () => (
  <S.Hero>
    <S.Vetor src={vector} alt="vetor" />
    <S.Container>
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>
      <S.Title>
        Viva experiências gastronômicas
        <br /> no conforto da sua casa
      </S.Title>
    </S.Container>
  </S.Hero>
)

export default Header
