import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  padding: 4px, 6px;
  background-color: ${cores.rosa};
  color: ${cores.bejeClaro};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const ButtonLink = styled(Link)`
  padding: 4px, 6px;
  background-color: ${cores.rosa};
  color: ${cores.bejeClaro};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
