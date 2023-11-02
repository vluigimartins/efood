import styled from 'styled-components'

export const Vetor = styled.img`
  height: 186px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
`

export const Container = styled.div`
  position: absolute;
  left: 50%;

  transform: translate(-50%, 0);
  width: 1024px;
  top: 63px;
  display: flex;
  align-items: center;
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: 900;
  margin-right: 341px;
`

export const Carrinho = styled.h2`
  position: absolute;
  right: 0;
  font-size: 18px;
  font-weight: 900;
  overflow-x: hidden;
  cursor: pointer;
`
