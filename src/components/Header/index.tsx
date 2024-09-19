import { HeaderContainer, ItensCarrinho, LinkRestaurantes, LogoI } from "./styles"

import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderContainer>
    <div className="container">
      <LinkRestaurantes href="/">Restaurantes</LinkRestaurantes>
      <LogoI src={logo} alt="EFOOD" />
      <ItensCarrinho>0 produto(s) no carrinho</ItensCarrinho>
    </div>
  </HeaderContainer>

)

export default Header
