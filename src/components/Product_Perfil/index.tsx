import { useState } from 'react'
import {
  Button,
  Button2,
  Card,
  Imagem,
  Descricao,
  Modal,
  ModalContent,
  Titulo
} from './styles'
import close from '../../assets/images/close.png'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  nome: string
  foto: string
  preco: number
  id: number
  descricao: string
  porcao: string
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Product_Perfil = ({
  descricao,
  foto,
  preco,
  porcao,
  id,
  nome
}: Props) => {
  const [mmodalEstaAberto, setModalEstaAberto] = useState(false)

  const dispatch = useDispatch()
  const addToCart = () => {
    const pedido = {
      foto,
      preco,
      id,
      descricao,
      porcao,
      nome
    }
    dispatch(add(pedido))
    dispatch(open())
  }
  return (
    <>
      <Card>
        <Imagem src={foto} alt={nome} />

        <Titulo>{nome}</Titulo>
        <Descricao>{descricao}</Descricao>
        <Button onClick={() => setModalEstaAberto(true)}>
          Adicionar ao carrinho
        </Button>
      </Card>
      <Modal className={mmodalEstaAberto ? 'visble' : ''}>
        <ModalContent className="container">
          <img src={foto} alt={nome} />
          <div className="details">
            <img
              src={close}
              alt="botão fechar"
              onClick={() => setModalEstaAberto(false)}
            />
            <h1>{nome}</h1>
            <p>
              {descricao} <br />
              <br /> Serve: {porcao.length !== 8 ? `de ${porcao}` : porcao}
            </p>
            <Button2 onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(preco)}
            </Button2>
          </div>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => setModalEstaAberto(false)}
        ></div>
      </Modal>
    </>
  )
}

export default Product_Perfil
