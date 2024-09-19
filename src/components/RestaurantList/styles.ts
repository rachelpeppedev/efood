import styled from "styled-components";

export const Container = styled.div`
  max-width: 1024px;
  margin: 80px auto;
`

export const List = styled.ul`
  max-width: 1024px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  row-gap: 48px;
`
