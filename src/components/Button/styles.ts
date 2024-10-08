import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";


export const ButtonContainer = styled.button`
  background-color: ${cores.coral};
  color: ${cores.rosaClaro};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  display: inline-block;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.coral};
  color: ${cores.rosaClaro};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  display: inline-block;
  text-decoration: none;
  border: none;
  cursor: pointer;
  margin-bottom: 8px;
  margin-left: 8px;
`
