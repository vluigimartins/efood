import styled from 'styled-components'

export const Vector = styled.img`
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

  @media (max-width: 768px) {
    width: 700px;
    transform: translate(0, 0);
    left: 35px;
  }

  @media (max-width: 475px) {
    width: 330px;
    left: 18px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 900;
  margin-right: 341px;

  @media (max-width: 768px) {
    margin-right: 200px;
  }

  @media (max-width: 475px) {
    margin-right: 15px;
  }
`

export const Cart = styled.h2`
  position: absolute;
  right: 0;
  font-size: 18px;
  font-weight: 900;
  overflow-x: hidden;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`
export const CartMobile = styled.h2`
  align-items: center;
  display: none;
  overflow-x: hidden;

  @media (max-width: 768px) {
    margin-left: 200px;
    display: flex;
  }

  @media (max-width: 475px) {
    margin-left: 30px;
  }
`
