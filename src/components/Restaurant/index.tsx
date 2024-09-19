import { ButtonLink } from "../Button/styles";

import { Card, Titulo, Descricao, TituloAvaliacao, Avalicao, Estrela, Tipos } from './styles'

import estrela from '../../assets/images/estrela.png'

import { TagContainer } from "../Tag/styles";

type Props = {
  titulo: string;
  nota: string;
  tipos: string[]
  descricao: string;
  imagem: string;
  linkperfil: string;
}

const Restaurant = ({titulo, nota, tipos, descricao, imagem, linkperfil}: Props) => (
  <Card>
    <img src={imagem} alt={titulo} />
    <Tipos>
      {tipos.map(tipo => <TagContainer key={tipo}>{tipo}</TagContainer> )}
    </Tipos>
    <TituloAvaliacao>
      <Titulo>{titulo}</Titulo>
      <Avalicao>
      <Titulo>{nota}</Titulo>
      <Estrela src={estrela} alt="estrela" />
      </Avalicao>
    </TituloAvaliacao>
    <Descricao>{descricao}</Descricao>
    <ButtonLink type="link" to={linkperfil}>Saiba mais</ButtonLink>
  </Card>
)

export default Restaurant
