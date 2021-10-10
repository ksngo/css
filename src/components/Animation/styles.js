import styled from "styled-components";

export const AnimateContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  background-color: var(--palette-2-milk);
  
`
export const AnimateItem = styled.div`
  flex: 0 1 30%;
  border: 0.5px solid var(--palette-2-yellow);
  border-radius: 0.25em;
  display: grid;
  grid-template-rows: 1fr auto;
  margin: 1em;
`

export const AnimateLabel = styled.div`
  grid-row: 1/2;
  background-color: var(--palette-2-orange);
  font-size: 0.85em;
`
export const AnimateContent = styled.div`
  padding: 1em 0;
  grid-row: 2/3;
  background-image: radial-gradient(var(--palette-2-milk), var(--palette-2-yellow));
`