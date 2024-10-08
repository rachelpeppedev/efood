import { ButtonContainer } from "../Button/styles"
import { DescPrato, NomePrato, Pratos } from "./styles"

export type Props = {
  imagem: string
  nome: string
  descricao: string
  id: number
}

const Product = ({ imagem, nome, descricao}: Props) => (
  <div className="container">
    <Pratos>
      <img src={imagem} alt={nome} />
      <NomePrato>{nome}</NomePrato>
      <DescPrato>{descricao}</DescPrato>
      <ButtonContainer type="button">Adicionar ao carrinho</ButtonContainer>
    </Pratos>
  </div>
)

export default Product
