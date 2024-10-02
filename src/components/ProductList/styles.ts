import styled from "styled-components";
import { cores } from "../../styles";

export const ContainerList = styled.div`
  max-width: 1024px;
  margin: 56px auto;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8)
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  background-color: ${cores.coral};
  display: flex;
  flex-direction: row;
  height: 344px;
`

export const ImagemFood = styled.img`
    width: 280px;
    height: 280px;
    margin: 32px;
`

export const IconFechar = styled.img`
  width: 16px;
  height: 16px;
  margin: 8px;
  cursor: pointer;
`

export const TituloFood = styled.h4`
  color: ${cores.branca};
  font-size: 18px;
  font-weight: 900;
  margin-top: 32px;
`

export const DescFood = styled.p`
  max-width: 656px;
  color: ${cores.branca};
  font-size: 14px;
  font-weight: 400;
  margin-top: 16px;

  p {
  margin-top: 16px;
  }
`

export const ButtonCar = styled.button`
  background-color: ${cores.rosaClaro};
  color: ${cores.coral};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  margin-top: 16px;
  border: none;
  cursor: pointer;
`

export const ModalContainer = styled.div`

`
