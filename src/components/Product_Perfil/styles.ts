import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.rosa};
  padding: 8px;
  position: relative;
  margin-bottom: 40px;

  img {
    opacity: 1;

    &:hover {
      opacity: 0.75;
      transition: opacity 0.5s ease;
      cursor: pointer;
    }
  }
`

export const Imagem = styled.img`
  max-width: 100%;
  width: 304px;
  height: 167px;
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
  height: 180px;
`

export const Button = styled.button`
  width: 100%;
  color: ${cores.rosa};
  background-color: ${cores.beje};
  padding: 4px;
  font-size: 14px;
  font-weight: 700;
  margin-top: 8px;
  border: none;
  cursor: pointer;
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.visble {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${cores.rosa};
  width: 1024px;
  height: 344px;
  position: relative;
  z-index: 1;
  color: ${cores.branco};

  > img {
    margin: 32px 24px 32px 32px;
    width: 280px;
    height: 280px;
  }

  .details {
    height: 100%;

    h1 {
      margin-top: 6px;
      font-size: 18px;
      font-weight: 900;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      margin-top: 16px;
      margin-right: 32px;
      height: 175px;
    }

    img {
      margin-left: 664px;
      margin-top: 8px;
      cursor: pointer;
    }
  }
`

export const Button2 = styled.button`
  color: ${cores.rosa};
  background-color: ${cores.beje};
  margin-top: 16px;
  padding: 4px 7px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
`
