import styled from "styled-components";

export const BasicContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  background: grey;
`
export const BasicDiv = styled.div`
  background: pink;
  width: 50;
  flex: 0 1 46%;
  margin: 10px;
  padding: 10px;
`
export const BasicInput = styled.input`
  width: 100%;
  :not([type=text]) {
    background-color: cyan;
  }
`