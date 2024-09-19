import { Imagem, NomeRestaurante, Tipo } from './styles'

import italiano from '../../assets/images/italiano.png'

const Apresentacao = () => (
  <Imagem style={{ backgroundImage: `url(${italiano})`}}>
    <div className='container'>
      <Tipo>Italiana</Tipo>
      <NomeRestaurante>La Dolce Vita Trattoria</NomeRestaurante>
    </div>
    </Imagem>

)

export default Apresentacao
