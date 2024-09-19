import Product from "../Produt";
import { ContainerList, List } from "../ProductList/styles";

import pizza from "../../assets/images/pizza.png"

const ProductList = () => {
  return (
    <ContainerList>
      <List>
        <Product
        imagem={pizza}
        nome="Pizza Marguerita"
        descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />
        <Product
        imagem={pizza}
        nome="Pizza Marguerita"
        descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />
        <Product
        imagem={pizza}
        nome="Pizza Marguerita"
        descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />
        <Product
        imagem={pizza}
        nome="Pizza Marguerita"
        descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />
        <Product
        imagem={pizza}
        nome="Pizza Marguerita"
        descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />
        <Product
        imagem={pizza}
        nome="Pizza Marguerita"
        descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />
      </List>
    </ContainerList>
  )
}

export default ProductList
