import styled from "styled-components";
import { cores } from "../../styles";

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  font-size: 32px;
  color: ${cores.branca};

  .container {
  position: relative;
  }
`

export const NomeRestaurante = styled.h2`
  font-weight: 900;
  position: absolute;
  margin-top: 212px;
`

export const Tipo = styled.p`
  font-weight: 100;
  position: absolute;
  margin-top: 26px;
`
