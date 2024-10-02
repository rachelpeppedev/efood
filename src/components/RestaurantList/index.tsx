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
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState<RestaurantCapa[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/efood')
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
        tipos={restaurant.destacado ? ['Destaque'] : []}
        descricao={restaurant.descricao}
        imagem={restaurant.cardapio.foto}
        linkperfil={`/perfil/${restaurant.id}`}
        />
      ))}
    </List>
  </Container>

  )
}

export default RestaurantList
