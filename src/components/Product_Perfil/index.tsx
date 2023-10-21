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
  title: string
  description: string
  image: string
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
  title,
  description,
  image,
  preco,
  porcao
}: Props) => {
  const [mmodalEstaAberto, setModalEstaAberto] = useState(false)
  return (
    <>
      <Card>
        <Imagem
          src={image}
          alt={title}
          onClick={() => setModalEstaAberto(true)}
        />

        <Titulo>{title}</Titulo>
        <Descricao>{description}</Descricao>
        <Button>Adicionar ao carrinho</Button>
      </Card>
      <Modal className={mmodalEstaAberto ? 'visble' : ''}>
        <ModalContent className="container">
          <img src={image} alt={title} />
          <div className="details">
            <img
              src={close}
              alt="botão fechar"
              onClick={() => setModalEstaAberto(false)}
            />
            <h1>{title}</h1>
            <p>
              {description} <br />
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
