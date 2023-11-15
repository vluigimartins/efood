import { useDispatch } from 'react-redux'
import { useState } from 'react'

import * as S from './styles'

import close from '../../assets/images/close.png'
import { add, open } from '../../store/reducers/cart'

type Props = {
  nome: string
  foto: string
  preco: number
  id: number
  descricao: string
  porcao: string
}

export const FormatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const ProductProfile = ({
  descricao,
  foto,
  preco,
  porcao,
  id,
  nome
}: Props) => {
  const [modalIsOpen, setmodalIsOpen] = useState(false)

  const dispatch = useDispatch()
  const addToCart = () => {
    const order = {
      foto,
      preco,
      id,
      descricao,
      porcao,
      nome
    }
    dispatch(add(order))
    dispatch(open())
  }
  return (
    <>
      <S.Card>
        <S.Image src={foto} alt={nome} />

        <S.Title>{nome}</S.Title>
        <S.Description>{descricao}</S.Description>
        <S.Button onClick={() => setmodalIsOpen(true)}>
          Adicionar ao carrinho
        </S.Button>
      </S.Card>
      <S.Modal className={modalIsOpen ? 'visble' : ''}>
        <S.ModalContent className="container">
          <img src={foto} alt={nome} />
          <div className="details">
            <S.CloseImg
              src={close}
              alt="botão fechar"
              onClick={() => setmodalIsOpen(false)}
            />
            <h1>{nome}</h1>
            <p>
              {descricao} <br />
              <br /> Serve:{' '}
              {porcao && porcao.length !== 8 ? `de ${porcao}` : porcao}
            </p>
            <S.Button2 onClick={addToCart}>
              Adicionar ao carrinho - {FormatPrice(preco)}
            </S.Button2>
          </div>
        </S.ModalContent>
        <div className="overlay" onClick={() => setmodalIsOpen(false)}></div>
      </S.Modal>
    </>
  )
}

export default ProductProfile
