import styled from 'styled-components'
import { colors } from '../../styles'

export const OrderContainer = styled.div`
  h2 {
    font-size: 16px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 24px;
  }
`

export const PaymentContainer = styled.div`
  .row-number {
    display: flex;
    justify-content: space-between;
  }
`

export const InputsCard = styled.div`
  label {
    font-size: 14px;
  }

  input {
    display: flex;
    background-color: ${colors.beige};
    margin-top: 8px;
    margin-bottom: 8px;
    border: 1px solid ${colors.pink};
    height: 32px;
    font-size: 14px;
    font-weight: 700;
    padding: 0 8px;
    height: 32px;
  }
`

export const InputsCardName = styled.input`
  width: 228px;
`

export const InputsCardCVV = styled.input`
  width: 87px;
`
