import { useState } from 'react'

import { Button, Modal, ModalContent } from './styles'

import pizzaLarge from '../../assets/images/Pizza_grande.png'
import close from '../../assets/images/close.png'

const Choose = () => {
  const [mmodalIsOpen, setModalIsOpen] = useState(false)

  return (
    <Modal className={mmodalIsOpen ? 'visble' : ''}>
      <ModalContent className="container">
        <img src={pizzaLarge} alt="pizza" />
        <div className="details">
          <img src={close} alt="botão fechar" />
          <h1>Pizza Marguerita</h1>
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião. <br />
            <br /> Serve: de 2 a 3 pessoas
          </p>
          <Button>Adicionar ao carrinho - R$ 60,90</Button>
        </div>
      </ModalContent>
      <div className="overlay"></div>
    </Modal>
  )
}

export default Choose
