import Restaurant from "../Restaurant";

import { Container, List} from './styles'

import italiana from '../../assets/images/italiana.png'
import japonesa from '../../assets/images/japonesa.png'

const RestaurantList = () => {
  return (
  <Container>
    <List>
      <Restaurant
      titulo="Hioki Sushi"
      nota="4,9"
      tipos={["Destaque da semana", "Japonesa"]}
      descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
      imagem={japonesa}
      linkperfil="/perfil"
      />
      <Restaurant
      titulo="La Dolce Vita Trattoria"
      nota="4,6"
      tipos={["Italiana"]}
      descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      imagem={italiana}
      linkperfil="/perfil"
      />
      <Restaurant
      titulo="La Dolce Vita Trattoria"
      nota="4,6"
      tipos={["Italiana"]}
      descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      imagem={italiana}
      linkperfil="/perfil"
      />
      <Restaurant
      titulo="La Dolce Vita Trattoria"
      nota="4,6"
      tipos={["Italiana"]}
      descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      imagem={italiana}
      linkperfil="/perfil"
      />
      <Restaurant
      titulo="La Dolce Vita Trattoria"
      nota="4,6"
      tipos={["Italiana"]}
      descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      imagem={italiana}
      linkperfil="/perfil"
      />
      <Restaurant
      titulo="La Dolce Vita Trattoria"
      nota="4,6"
      tipos={["Italiana"]}
      descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      imagem={italiana}
      linkperfil="/perfil"
      />
    </List>
  </Container>

  )
}

export default RestaurantList
