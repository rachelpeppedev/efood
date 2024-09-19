import { HeroContainer, Titulo, Logo} from  './styles'

import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const Hero = () => (
  <HeroContainer style={{ backgroundImage: `url(${fundo})`}}>
    <Logo src={logo} alt="EFOOD"/>
    <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
  </HeroContainer>

)

export default Hero
