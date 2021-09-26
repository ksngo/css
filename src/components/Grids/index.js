import {
  GridContainer,
  GridItem1,
  GridItem2,
  GridItem3,
  GridItem4,
  GridItem5,
  GridItem6,
  GridItem7,
  GridContainer2,
  GridItemOne,
  GridItemTwo,
  GridItemThree,
  GridItemFour,
  GridItemFive,
  GridItemSix,
  GridItemSeven,
  GridContainer3,
  GridContainer4,
  GridSmall,
  GridBig,
  GreyDiv
} from "./styles.js";

function Grids() {
  return (
    <>
      <h3>Classifying by gridlines</h3>
      <GridContainer>
        display: grid;<br />
        grid-template-columns: repeat(4,1fr); <br />
        NOTE:4 or autofill or autofit<br />
        grid-template-rows: repeat(4,minmax(50px,1fr));<br />
        grid-gap: 2em;<br />
        padding: 2em;<br />
        background-color: grey;<br />
        <GridItem1>1<br />
          grid-column: 1/3;<br />
          grid-row: 1/3;<br />
          background-color: yellow;</GridItem1>
        <GridItem2>2</GridItem2>
        <GridItem3>3</GridItem3>
        <GridItem4>4</GridItem4>
        <GridItem5>5</GridItem5>
        <GridItem6>6</GridItem6>
        <GridItem7>7</GridItem7>
      </GridContainer>
      <br />
      <h3>Classifying by grid areas</h3>
      <GridContainer2>
        display: grid;<br />
        grid-template-areas: <br />
        &emsp;"one one three four"<br />
        &emsp;"one one five five"<br />
        &emsp;"two two five five"<br />
        &emsp;"two two six seven";<br />
        grid-template-columns: repeat(4,1fr);<br />
        grid-template-rows: repeat(4,1fr);<br />
        grid-gap: 2em;<br />
        padding: 2em;<br />
        background-color: grey;<br />
        <GridItemOne>1<br />
          grid-area: one;<br />
          background-color: yellow;</GridItemOne>
        <GridItemTwo>2</GridItemTwo>
        <GridItemThree>3</GridItemThree>
        <GridItemFour>4</GridItemFour>
        <GridItemFive>5</GridItemFive>
        <GridItemSix>6</GridItemSix>
        <GridItemSeven>7</GridItemSeven>
      </GridContainer2>
      <br />
      <h3>Classifying with grid placement Algo through e.g. auto-fill,minmax, grid-auto-rows </h3>
      <GreyDiv>
        display: grid;<br />
        <mark>grid-template-columns: repeat(auto-fill, minmax(200px,1fr));</mark><br />
        <mark>grid-auto-rows: 1fr;</mark><br />
        grid-gap: 1em;<br />
        padding: 1em;<br />
        background-color: grey;<br />
      </GreyDiv>
      <GridContainer3>

        <GridBig>1.Big<br />
          background-color: pink;<br />
          grid-row: span 2;<br />
          grid-column: span 2;<br />
        </GridBig>
        <GridSmall>2.Small<br />
          background-color: yellow;<br />
        </GridSmall>
        <GridSmall>3.Small</GridSmall>
        <GridBig>4.Big</GridBig>
        <GridBig>5.Big</GridBig>
        <GridSmall>6.Small-</GridSmall>
        <GridSmall>7.Small</GridSmall>
      </GridContainer3>
      <br />
      <h3>Comparison with grid-auto-flow: dense</h3>
      <GreyDiv>
        display: grid;<br />
        <mark>grid-template-columns: repeat(auto-fill, minmax(200px,1fr));</mark><br />
        <mark>grid-auto-rows: 1fr;</mark><br />
        grid-gap: 1em;<br />
        <mark>grid-auto-flow: dense;</mark><br />
        padding: 1em;<br />
        background-color: grey;<br />
      </GreyDiv>
      <GridContainer4>

        <GridBig>1.Big<br />
          background-color: pink;<br />
          grid-row: span 2;<br />
          grid-column: span 2;<br />
        </GridBig>
        <GridSmall>2.Small<br />
          background-color: yellow;<br />
        </GridSmall>
        <GridSmall>3.Small</GridSmall>
        <GridBig>4.Big</GridBig>
        <GridBig>5.Big</GridBig>
        <GridSmall>6.Small-</GridSmall>
        <GridSmall>7.Small</GridSmall>
      </GridContainer4>
    </>
  )
}

export default Grids;