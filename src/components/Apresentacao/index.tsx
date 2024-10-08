import { Imagem, NomeRestaurante, Tipo } from './styles'

import italiano from '../../assets/images/italiano.png'
import { useEffect, useState } from 'react'
import { RestaurantCapa } from '../RestaurantList'

const Apresentacao = ({id}: {id: number}) => {
  const [perfil, setPerfil] = useState<RestaurantCapa>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
    .then((res) => res.json())
    .then((res) => setPerfil(res))
  }, [id])

  return (
    <Imagem style={{ backgroundImage: `url(${perfil?.capa})`}}>
      <div className='container'>
        <Tipo>{perfil?.tipo}</Tipo>
        <NomeRestaurante>{perfil?.titulo}</NomeRestaurante>
      </div>
      </Imagem>
  )
}

export default Apresentacao
