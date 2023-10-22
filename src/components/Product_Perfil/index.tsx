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

type Props = {
  titulo: string
  descricao: string
  imagem: string
  preco: number
  porcao: string
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Product_Perfil = ({
  titulo,
  descricao,
  imagem,
  preco,
  porcao
}: Props) => {
  const [mmodalEstaAberto, setModalEstaAberto] = useState(false)
  return (
    <>
      <Card>
        <Imagem
          src={imagem}
          alt={titulo}
          onClick={() => setModalEstaAberto(true)}
        />

        <Titulo>{titulo}</Titulo>
        <Descricao>{descricao}</Descricao>
        <Button>Adicionar ao carrinho</Button>
      </Card>
      <Modal className={mmodalEstaAberto ? 'visble' : ''}>
        <ModalContent className="container">
          <img src={imagem} alt={titulo} />
          <div className="details">
            <img
              src={close}
              alt="botão fechar"
              onClick={() => setModalEstaAberto(false)}
            />
            <h1>{titulo}</h1>
            <p>
              {descricao} <br />
              <br /> Serve: {porcao.length !== 8 ? `de ${porcao}` : porcao}
            </p>
            <Button2>Adicionar ao carrinho - {formataPreco(preco)}</Button2>
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
