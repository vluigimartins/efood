import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  color: ${colors.beige};
  margin-left: 8px;
  margin-right: 8px;

  h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .delivery-details {
    margin-top: 24px;
  }
`

export const Inputs = styled.div`
  label {
    font-size: 14px;
  }

  input {
    display: flex;
    background-color: ${colors.beige};
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 0 8px;
    border: 1px solid ${colors.pink};
    height: 32px;
    width: 100%;
    font-size: 14px;
    font-weight: 700;
  }
`

export const Button = styled.button`
  padding: 4px 82px;
  background-color: ${colors.beige};
  color: ${colors.pink};
  font-size: 14px;
  font-weight: 700;
  border: none;
  margin: 0 8px 8px 0;
  cursor: pointer;
  width: 100%;
`
