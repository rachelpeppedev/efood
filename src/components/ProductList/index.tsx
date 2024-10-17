import { useEffect, useState } from "react";

import Product from "../Produt";
import { ContainerList, ImagemFood, IconFechar, List, Modal, ModalContainer, ModalContent, TituloFood, DescFood, ButtonCar } from "../ProductList/styles";
import { RestaurantCapa } from "../RestaurantList"

import fechar from '../../assets/images/fechar.png'
import { useParams } from "react-router-dom";

const ProductList = () => {
  const {id} = useParams()

  const [perfil, setPerfil] = useState<RestaurantCapa>()

  const [modalEstaAberto, setModalEstaAberto] = useState(false);

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
    .then((res) => res.json())
    .then((res) => setPerfil(res))
  }, [id])

  if (!perfil) {
    return <h3>Carregando...</h3>
  }

  return (
      <>
      <ContainerList>
        <List>
        {perfil.cardapio.map((item: any) =>(
          <li key={item.id} onClick={() => {setModalEstaAberto(true);
          }}>
            <Product
            id={item.id}
            imagem={item.foto}
            nome={item.nome}
            descricao={item.descricao}
            />
          </li>
        ))}
        </List>
      </ContainerList>

      <Modal className={modalEstaAberto ? 'visivel' : ''}>
          <ModalContent key={perfil.cardapio.id} className="container">
                <ImagemFood src={perfil.cardapio.foto} alt="imagem"/>
                <ModalContainer>
                  <TituloFood>{perfil.cardapio.nome}</TituloFood>
                  <DescFood>{perfil.cardapio.descricao}
                  <p>Serve: {perfil.cardapio.porcao}</p>
                  </DescFood>
                  <ButtonCar type="button">Adicionar ao carrinho - {perfil.cardapio.preco}</ButtonCar>
                </ModalContainer>

          <IconFechar onClick={() => setModalEstaAberto(false)} src={fechar} alt="fechar"/>
        </ModalContent>
        <div onClick={() => setModalEstaAberto(false)} className="overlay"></div>
      </Modal>
    </>
  )
}

export default ProductList
