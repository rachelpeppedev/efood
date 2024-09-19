import styled from "styled-components";
import { cores } from "../../styles";
import { ButtonContainer } from "../Button/styles";

export const Pratos = styled.div`
  background-color: ${cores.coral};
  color: ${cores.branca};
  max-width: 320px;
  margin-top: 56px;
  padding: 8px;

  ${ButtonContainer} {
  width: 304px;
  border: none;
  background-color: ${cores.rosaClaro};
  color: ${cores.coral};
  font-size: 14px;
  font-weight: 700;
  margin-top: 8px;
  }
`
export const Imagem = styled.img`

`
export const NomePrato = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-top: 8px;
`
export const DescPrato = styled.p`
  max-width: 304px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 8px;
`
