import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  color: ${colors.beige};
  margin-left: 8px;
  margin-right: 8px;
`

export const OrderContainer = styled.form`
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

  h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .container-button {
    margin-top: 24px;
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

    &.error {
      border: 1px sold red;
    }
  }
`

export const InputsCardName = styled.input`
  width: 228px;
`

export const InputsCardCVV = styled.input`
  width: 87px;
`
