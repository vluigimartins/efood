import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  padding-top: 32px;
`
export const CartCard = styled.div`
  background-color: ${cores.beje};
  margin: 0 8px 16px 8px;
  display: flex;
  align-items: center;
  width: 344px;
  height: 100px;

  .containerCart {
    height: 100%;
    width: 100%;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 33px;
  }
`

export const Image = styled.img`
  width: 80px;
  height: 80px;
  margin: 8px 8px 12px 8px;
`

export const Lixeira = styled.img`
  margin-top: 76px;
  margin-right: 8px;
  cursor: pointer;
`

export const ValorTotal = styled.p`
  color: ${cores.beje};
  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  margin: 24px 8px 16px 8px;
`
export const Button = styled.button`
  margin: 0 8px;
  padding: 4px 95px 4px 93px;
  background-color: ${cores.beje};
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
`
