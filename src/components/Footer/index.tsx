import { FooterContainer, Logo, RedesSociais, TextoEfood } from "./styles"

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'


const Footer = () => (
  <FooterContainer>
    <div className="container">
      <Logo src={logo} alt="EFOOD" />
        <RedesSociais>
            <img src={instagram} alt="Instagram" />
            <img src={facebook} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
        </RedesSociais>
        <TextoEfood>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
        </TextoEfood>
    </div>
  </FooterContainer>
)

export default Footer
