import styled from 'styled-components';
import { cores } from '../../styles';
import { TagContainer } from '../Tag/styles';

export const Card = styled.div`
  background-color: ${cores.branca};
  border: 1px solid ${cores.coral};
  position: relative;

  ${TagContainer} {
  margin-right: 8px;
  }
`

export const TituloAvaliacao = styled.div`
  margin: 8px;
  display: flex;
  justify-content: space-between;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-top: 8px;
  display: block;
  color: ${cores.coral};
`

export const Avalicao = styled.div`
  display: flex;
`

export const Estrela = styled.img`
  margin-top: 8px;
  margin-left: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  display: block;
  max-width: 456px;
  margin: 16px 8px;
`

export const Tipos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
