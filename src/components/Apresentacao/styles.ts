import styled from "styled-components";
import { cores } from "../../styles";

export const Imagem = styled.div`
  max-width: 1366px;
  width: 100%;
  height: 280px;
  display: block;
  font-size: 32px;
  color: ${cores.branca};
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::after {
    position: absolute;
    background-color: black;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.50;
    }

  .container {
    z-index: 1;
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
