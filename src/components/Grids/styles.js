import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(4,minmax(50px,1fr));
  grid-gap: 2em;
  padding: 2em;
  background-color: grey;
`
export const GridItem1 = styled.div`
  grid-column: 1/3;
  grid-row: 1/3;
  background-color: yellow;
`
export const GridItem2 = styled.div`
  grid-column: 1/3;
  grid-row: 3/5;
  background-color: pink;
`
export const GridItem3 = styled.div`
  grid-column: 3/4;
  grid-row: 1/2;
  background-color: yellow;
`
export const GridItem4 = styled.div`
  grid-column: 4/5;
  grid-row: 1/2;
  background-color: yellow;
`
export const GridItem5 = styled.div`
  grid-column: 3/5;
  grid-row: 2/4;
  background-color: yellow;
`
export const GridItem6 = styled.div`
  grid-column: 3/4;
  grid-row: 4/5;
  background-color: yellow;
`
export const GridItem7 = styled.div`
  grid-column: 4/5;
  grid-row: 4/5;
  background-color: yellow;
`

export const GridContainer2 = styled.div`
  display: grid;
  grid-template-areas: "one one three four"
                       "one one five five"
                       "two two five five"
                       "two two six seven";
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(4,1fr);
  grid-gap: 2em;
  padding: 2em;
  background-color: grey;
`
export const GridItemOne = styled.div`
  grid-area: one;
  background-color: yellow;
`
export const GridItemTwo = styled.div`
  grid-area: two;
  background-color: pink;
`
export const GridItemThree = styled.div`
  grid-area: three;
  background-color: yellow;
`
export const GridItemFour = styled.div`
  grid-area: four;
  background-color: yellow;
`
export const GridItemFive = styled.div`
  grid-area: five;
  background-color: yellow;
`
export const GridItemSix = styled.div`
  grid-area: six;
  background-color: yellow;
`
export const GridItemSeven = styled.div`
  grid-area: seven;
  background-color: yellow;
`
export const GridContainer3 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1em;
  padding: 1em;
  background-color: grey;
`
export const GridContainer4 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1em;
  grid-auto-flow: dense;
  padding: 1em;
  background-color: grey;
`
export const GridSmall = styled.div`
  background-color: yellow;
`
export const GridBig = styled.div`
  background-color: pink;
  grid-row: span 2;
  grid-column: span 2;
`
export const GreyDiv = styled.div`
  background-color: grey;
`