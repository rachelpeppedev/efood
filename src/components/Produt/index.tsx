import { ButtonContainer } from "../Button/styles"
import { DescPrato, Imagem, NomePrato, Pratos } from "./styles"

export type Props = {
  imagem: string
  nome: string
  descricao: string
  id: number
}

const Product = ({ imagem, nome, descricao}: Props) => {
    const getDescricao = (descricao: string) => {
      if (descricao.length > 118) {
        return descricao.slice(0, 115) + '...'
      }
      return descricao
    }
    return (
    <div className="container">
      <Pratos>
        <Imagem src={imagem} alt={nome} />
        <NomePrato>{nome}</NomePrato>
        <DescPrato>{getDescricao(descricao)}</DescPrato>
        <ButtonContainer type="button">Adicionar ao carrinho</ButtonContainer>
      </Pratos>
    </div>
  )
}

export default Product
