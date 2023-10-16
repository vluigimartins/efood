import styled from 'styled-components'
import { cores } from '../../styles'

export const Vetor = styled.img`
  height: 186px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
`

export const Container = styled.div`
  position: absolute;
  width: 100%;
  top: 63px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  left: 60px;
  overflow-x: hidden;
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: 900;
`

export const Carrinho = styled.h2`
  font-size: 18px;
  font-weight: 900;
  right: 40px;
  overflow-x: hidden;
`

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
