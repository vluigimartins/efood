import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.rosa};
  padding: 8px;
  position: relative;
  margin-bottom: 40px;
`

export const Titulo = styled.h3`
  color: ${cores.beje};
  margin-top: 8px;
  font-size: 16px;
  font-weight: 900;
  display: block;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  color: ${cores.beje};
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-bottom: 8px;
`

export const Button = styled.button`
  width: 100%;
  color: ${cores.rosa};
  background-color: ${cores.beje};
  padding: 4px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
`
