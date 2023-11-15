import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 56px;
  margin-bottom: 120px;
`

export const List = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
