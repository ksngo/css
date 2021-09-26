import styled from "styled-components";

export const FloatContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: yellow;
  ::after {
    clear: both;
    display: block;
    content: " pseudoblock clears all floats and appear at bottom of the four floats ";
  }
`
export const FloatContainer2 = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: yellow;
  overflow: auto;
`

export const FloatContainer3 = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: yellow;
`
export const FloatContainer4 = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: yellow;
  ::before,::after {
    display: block;
    content: " pseudoblock for ::before and ::after ...only ::after pseudoblock has clear:block and it moves to below all floats ";
  }
  ::after {
    clear: both;
  }
`

export const FloatMedia = styled.div`
  background-color: blue;
  width: 40%;
  margin: 2px 2px;
  float: left; 
`

export const Clear = styled.div`
  clear: both;
  display: block;
  content: " ";
`

export const FloatImage = styled.img`
  width: 50px;
  height: 50px;
  float: left;
`
export const FloatContent = styled.div`
  background-color: pink;
`
export const FloatContent2 = styled.div`
  background-color: pink;
  overflow: auto;
`