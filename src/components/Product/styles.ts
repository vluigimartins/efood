import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  position: relative;
  margin-bottom: 48px;
`

export const Imagem = styled.img`
  margin-bottom: -5px;
`
export const Destaque = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.beje};
  padding: 6px 4px;
  position: absolute;
  top: 16px;
  right: 85px;
  font-size: 12px;
  font-weight: 700;
`
export const Origem = styled.div`
  font-size: 12px;
  font-weight: 700;
  width: 61px;
  background-color: ${cores.rosa};
  color: ${cores.beje};
  padding: 6px 4px;
  margin-left: 8px;
  position: absolute;
  top: 16px;
  right: 16px;
  text-align: center;
`
export const Infos = styled.div`
  border-right: 1px solid ${cores.rosa};
  border-bottom: 1px solid ${cores.rosa};
  border-left: 1px solid ${cores.rosa};
`

export const InfoPrincipal = styled.ul`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
`

export const Titulo = styled.h2`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 700;
  margin-left: 7px;
`

export const Nota = styled.span`
  margin-top: 8px;
  position: absolute;
  right: 37px;
  font-size: 18px;
  font-weight: 700;
`

export const Estrela = styled.img`
  margin-top: 8px;
  position: absolute;
  right: 8px;
`

export const Descricao = styled.p`
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 16px 8px;
`

export const Button = styled.button`
  padding: 4px 6px;
  background-color: ${cores.rosa};
  color: ${cores.beje};
  font-size: 14px;
  font-weight: 700;
  border: none;
  margin-left: 8px;
  margin-bottom: 8px;
  cursor: pointer;
`
