import { styled } from 'styled-components'
import { colors } from '../../styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

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
  background-color: ${colors.pink};
  width: 1024px;
  height: 344px;
  position: relative;
  z-index: 1;
  color: ${colors.white};

  > img {
    margin: 32px 24px 32px 32px;
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
    }

    img {
      margin-left: 664px;
      margin-top: 8px;
      cursor: pointer;
    }
  }
`
export const Button = styled.button`
  color: ${colors.pink};
  background-color: ${colors.beige};
  margin-top: 16px;
  padding: 4px 7px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
`
