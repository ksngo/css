import { BasicContainer, BasicDiv, BasicInput } from "./styles";

function AttributeSelectors() {

  return (
    <BasicContainer>
      <BasicDiv>
        input &#123;<br />
        :not([type=text]&#123;<br />
        background-color: cyan;&#125;<br />
        &#125;<br />
        <BasicInput type="text" />
      </BasicDiv>
      <BasicDiv>
        <BasicInput type="date" />
      </BasicDiv>
      <BasicDiv>

      </BasicDiv>
      <BasicDiv>

      </BasicDiv>
    </BasicContainer>
  )
}

export default AttributeSelectors;