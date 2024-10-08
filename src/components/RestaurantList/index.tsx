import Restaurant from "../Restaurant";

import { Container, List} from './styles'

import { useEffect, useState } from "react";

export type RestaurantCapa = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    map: any;
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const RestaurantList = () => {
  const [destaque, setDestaque] = useState('Destaque da semana')
  const [restaurants, setRestaurants] = useState<RestaurantCapa[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
    .then((res) => res.json())
    .then((res) => setRestaurants(res))
  }, [])

  return (
  <Container>
    <List>
      {restaurants.map((restaurant) => (
        <Restaurant
        key={restaurant.id}
        titulo={restaurant.titulo}
        nota={restaurant.avaliacao.toString()}
        tipos={restaurant.destacado ? [destaque, restaurant.tipo] : [restaurant.tipo]}
        descricao={restaurant.descricao}
        imagem={restaurant.capa}
        linkperfil={`/perfil/${restaurant.id}`}
        />
      ))}
    </List>
  </Container>

  )
}

export default RestaurantList
