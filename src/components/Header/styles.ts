import styled from "styled-components";
import { cores } from "../../styles";
import fundo from '../../assets/images/fundo.png'

export const HeaderContainer = styled.header`
  background-image: url(${fundo});
  width: 100%;
  height: 186px;


  .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
`

export const LinkRestaurantes = styled.a`
  font-size: 18px;
  text-decoration: none;
  font-weight: 900;
  color: ${cores.coral};
  margin-top: 40px;
`

export const LogoI = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 40px;
`

export const ItensCarrinho = styled.p`
  font-size: 18px;
  font-weight: 900;
  margin-top: 40px;
`
