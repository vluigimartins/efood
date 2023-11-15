import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  position: relative;
  margin-bottom: 48px;

  @media (max-width: 768px) and (min-width: 475px) {
    width: 60%;
    transform: translateX(33%);
  }
`

export const Image = styled.img`
  margin-bottom: -5px;
  max-width: 100%;
  width: 472px;
  height: 217px;
`

export const Highlight = styled.div`
  background-color: ${colors.pink};
  color: ${colors.beige};
  padding: 6px 4px;
  position: absolute;
  top: 16px;
  right: 85px;
  font-size: 12px;
  font-weight: 700;
`

export const Origin = styled.div`
  font-size: 12px;
  font-weight: 700;
  width: 61px;
  background-color: ${colors.pink};
  color: ${colors.beige};
  padding: 6px 4px;
  margin-left: 8px;
  position: absolute;
  top: 16px;
  right: 16px;
  text-align: center;
`

export const Infos = styled.div`
  border-right: 1px solid ${colors.pink};
  border-bottom: 1px solid ${colors.pink};
  border-left: 1px solid ${colors.pink};
  width: 100%;
`

export const MainInfo = styled.ul`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
`

export const Title = styled.h2`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 700;
  margin-left: 7px;
`

export const Rating = styled.span`
  margin-top: 8px;
  position: absolute;
  right: 37px;
  font-size: 18px;
  font-weight: 700;
`

export const Star = styled.img`
  margin-top: 8px;
  position: absolute;
  right: 8px;
`

export const Description = styled.p`
  display: block;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 16px 8px;
  min-height: 110px;
`

export const Button = styled.button`
  padding: 4px 6px;
  background-color: ${colors.pink};
  color: ${colors.beige};
  font-size: 14px;
  font-weight: 700;
  border: none;
  margin-left: 8px;
  margin-bottom: 8px;
  cursor: pointer;
`
