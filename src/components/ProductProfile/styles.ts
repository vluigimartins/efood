import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.pink};
  padding: 8px;
  position: relative;
  margin-bottom: 40px;

  img {
    opacity: 1;
    width: 1000%;
  }

  @media (max-width: 768px) and (min-width: 475px) {
    width: 60%;
    transform: translateX(33%);
  }
`

export const Image = styled.img`
  max-width: 100%;
  width: 304px;
  height: 167px;
`

export const Title = styled.h3`
  color: ${colors.beige};
  margin-top: 8px;
  font-size: 16px;
  font-weight: 900;
  display: block;
  margin-bottom: 8px;
`

export const Description = styled.p`
  color: ${colors.beige};
  font-size: 14px;
  line-height: 22px;
  display: block;
  height: 180px;

  @media (max-width: 768px) {
    height: 130px;
  }
`

export const Button = styled.button`
  width: 100%;
  color: ${colors.pink};
  background-color: ${colors.beige};
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
  background-color: ${colors.pink};
  width: 1024px;
  height: 344px;
  position: relative;
  z-index: 1;
  color: ${colors.white};

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
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    width: 500px;
    height: 75%;
    overflow-x: hidden;

    p {
      margin-left: 100px;
      max-width: 65%;
      margin-bottom: 15px;
    }
  }

  @media (max-width: 475px) {
    height: 98%;
    width: 90%;

    p {
      max-width: 100%;
      margin-bottom: 50px;
      font-size: 12px;
      margin-left: 32px;
    }
  }
`

export const CloseImg = styled.img`
  margin-left: 664px;
  margin-top: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 8px;
  }
`

export const Button2 = styled.button`
  color: ${colors.pink};
  background-color: ${colors.beige};
  margin-top: 16px;
  padding: 4px 7px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
`
