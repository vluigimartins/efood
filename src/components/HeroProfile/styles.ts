import styled from 'styled-components'
import { colors } from '../../styles'

export const Banner = styled.div`
  filter: brightness(50%);
  margin: -4px;

  img {
    height: 280px;
    width: 100%;
    overflow: hidden;
  }
`

export const BannerTitle = styled.h2`
  position: absolute;
  top: 210px;
  color: ${colors.white};
  font-size: 32px;
  font-weight: 100;
`

export const ProfileTitle = styled.h2`
  position: absolute;

  top: 399.75px;
  color: ${colors.white};
  font-size: 32px;
  font-weight: 900;
`
