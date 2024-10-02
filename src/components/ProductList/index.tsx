import Product from "../Produt";
import { ContainerList, ImagemFood, IconFechar, List, Modal, ModalContainer, ModalContent, TituloFood, DescFood, ButtonCar } from "../ProductList/styles";

import pizza from "../../assets/images/pizza.png"
import fechar from '../../assets/images/fechar.png'
import { useEffect, useState } from "react";
import { RestaurantCapa } from "../RestaurantList";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const {id} = useParams()

  const [modalEstaAberto, setModalEstaAberto] = useState(false);

  const [produto, setProduto] = useState<RestaurantCapa>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/efood/${id}`)
    .then((res) => res.json())
    .then((res) => setProduto(res))
  }, [id])

  return (
      <>
      <ContainerList>
        <List>
          {produto && (
            <Product
            imagem={produto.cardapio.foto}
            nome={produto.cardapio.nome}
            descricao={produto.cardapio.descricao}
            />

          )}
        </List>
      </ContainerList>

      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <ImagemFood src={pizza} />
          <ModalContainer>
            <TituloFood>Pizza Marguerita</TituloFood>
            <DescFood>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.
            <p>Serve: de 2 a 3 pessoas</p>
            </DescFood>
            <ButtonCar type="button">Adicionar ao carrinho - R$ 60,90</ButtonCar>
          </ModalContainer>
          <IconFechar src={fechar} alt="fechar"/>
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default ProductList
