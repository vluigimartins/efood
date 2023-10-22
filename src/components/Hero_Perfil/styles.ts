import styled from 'styled-components'
import { cores } from '../../styles'

export const Banner = styled.div`
  filter: brightness(50%);
  margin: -4px;
  img {
    height: 280px;

    width: 100%;
    overflow: hidden;
  }
`

export const TituloBanner = styled.h1`
  position: absolute;
  top: 210px;
  margin-left: 170px;
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 100;
`

export const TituloPerfil = styled.h1`
  position: absolute;

  top: 399.75px;
  margin-left: 170px;
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 900;
`
