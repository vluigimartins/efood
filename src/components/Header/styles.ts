import styled from 'styled-components'

export const Hero = styled.header`
  background-size: cover;
`
export const Vetor = styled.img`
  width: 100%;

  @media (max-width: 768px) {
    height: 250px;
  }
`
export const Container = styled.div`
  position: absolute;
  top: 64px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 100%;
`

export const Title = styled.h1`
  margin-top: 139px;
  font-size: 36px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    margin-top: 40px;
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`
