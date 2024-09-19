import styled from "styled-components";
import { cores } from "../../styles";

export const FooterContainer = styled.footer`
  height: 298px;
  background-color: ${cores.rosa};
  text-align: center;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 40px;
`

export const RedesSociais = styled.div`
  list-style: none;
  margin-top: 32.5px;

  img {
    margin-right: 8px;
  }
`

export const TextoEfood = styled.h4`
  max-width: 480px;
  width: 100%;
  font-weight: 400;
  font-size: 10px;
  margin: 80px auto;
`
