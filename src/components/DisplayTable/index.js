import {
  TableRow,
  TableMainCol,
  TableSideCol,
  TableWrapper,
  FlexRow,
  FlexMainCol,
  FlexSideCol,
  FlexEqualCol,
  InlineBlock,
  NormalDiv
} from "./displaytablestyles";

function DisplayTable() {

  const rootElement = document.documentElement;
  const stylesRootElement = getComputedStyle(rootElement);
  const rootFontSize = stylesRootElement.getPropertyValue("font-size");

  return (
    <>
      <TableWrapper>
        <TableRow>
          <TableMainCol>1. border-spacing: 1.5em; =&gt; applies to between cells and table borders<br />
            2. inherited font-size:16px from :root declaration<br />
            3. 1.5em takes inherited font-size and returns 24px<br />
            4. use negative margin to remove side border</TableMainCol>
          <TableSideCol>root font-size: {rootFontSize}
            <br /> vertical-align works for display: table-cell</TableSideCol>
        </TableRow>


      </TableWrapper>
      <FlexRow>
        <FlexMainCol>flex main </FlexMainCol>
        <FlexSideCol>flex side<br />
          I can vertical align this flex item by just using display:flex and align-items: center</FlexSideCol>
      </FlexRow>
      <InlineBlock>
        vertical align works for inline and not for inline-block.
      </InlineBlock>
      <NormalDiv>normal div<br />
        Just using padding top and bottom; not setting height ; to achieve vertical centering
      </NormalDiv>
      <FlexRow>
        <FlexEqualCol>
          FlexEqual component
          
        </FlexEqualCol>
        <FlexEqualCol>
          FlexEqual component<br/>
          Using adjacent sibling combinator(+) to only target sibling FlexEqual to change background color
        </FlexEqualCol>
      </FlexRow>
    </>

  )
}

export default DisplayTable;