import styled from "styled-components";

export const TableWrapper = styled.div`
  margin: 0 -1.5rem;
`

export const TableRow = styled.div`
  display: table;
  width: 100%;
  border-spacing: 1.5em;
  
`
export const TableMainCol = styled.div`
  display: table-cell;
  width: 70%;
  background-color: grey;
`

export const TableSideCol = styled.div`
  display: table-cell;
  width: 30%;
  background-color: blue;
  vertical-align: middle;
`
export const FlexRow = styled.div`
  margin-top: 2em;
  display: flex;
  width: 100%;
  
`
export const FlexMainCol = styled.div`
  width: 70%;
  background-color: grey;
`
export const FlexSideCol = styled.div`
  width: 30%;
  background-color: blue;
  height:100px;
  display: flex;
  align-items: center;
  
`
export const FlexEqualCol = styled.div`
  flex: 1 1 0;
  background-color: grey;
  & + & {
    background-color: blue;
  }
`
export const InlineBlock = styled.div`
  display: inline-block;
  background-color: green;
  height: 50px;
  width: 500px;
  vertical-align: middle;
  margin-top: 2em;
`
export const NormalDiv = styled.div`
  padding-top: 2em;
  padding-bottom: 2em;
  background-color: yellow;
  margin-top: 2em;
`