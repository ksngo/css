import styled from "styled-components";
import cardcss from "../../assets/cardcss.png";
import cardhtml from "../../assets/cardhtml.png";
import cardjs from "../../assets/cardjs.png";

const TransformContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  background-color: var(--palette-2-milk);
  
`
const TransformItem = styled.div`
  flex: 0 0 30%;
  border: 0.5px solid var(--palette-2-yellow);
  border-radius: 0.25em;
  display: grid;
  grid-template-rows: 1fr auto;
  margin: 1em;
`

const TransformItemBig = styled.div`
  flex: 0 0 60%;
  border: 0.5px solid var(--palette-2-yellow);
  border-radius: 0.25em;
  display: flex;
  flex-flow: row nowrap;
  margin: 1em;
`

const TransformLabel = styled.div`
  grid-row: 1/2;
  background-color: var(--palette-2-orange);
  font-size: 0.85em;
`
const TransformLabelFlex = styled(TransformLabel)`
  flex: 1 1 1%;
  display: flex;
  flex-flow: row nowrap;
`

const TransformContent = styled.div`
  padding: 1em;
  grid-row: 2/3;
  background-image: radial-gradient(var(--palette-2-milk), var(--palette-2-yellow));
  display: flex;
  flex-flow: row wrap;
`
const TransformContentCustom = styled.div`
  flex: 1 1 1%
  padding: 1em;
  background-image: radial-gradient(var(--palette-2-milk), var(--palette-2-yellow));
`

const TransformTest1 = styled.div`
  margin: auto;
  width: 40px;
  height: 40px;
  background-color: var(--palette-2-red);
  transform: rotate(15deg);
`
const TransformTest2 = styled(TransformTest1)`
  transform: translate(30px, 30px);
`
const TransformTest3 = styled(TransformTest1)`
  transform: scale(1.5);
`
const TransformTest4 = styled(TransformTest1)`
  transform: skew(15deg);
`
const TransformTest5 = styled(TransformTest1)`
  transform-origin: left bottom;
`
const TransformTest6 = styled(TransformTest3)`
  transform-origin: right top;
`
const TransformTest7 = styled(TransformTest4)`
  transform-origin: left center;
`

const TransformTest8 = styled.div`
  margin: auto;
  width: 40px;
  height: 40px;
  background-color: var(--palette-2-red);
  transition: background-color .5s linear;
  transform: rotate(15deg) translate(30px, 30px) scale(1.5) skew(15deg);
  :hover {
    background-color: transparent;
  }

`

const Label = styled.div`
  margin-left: 50px;
  line-height: 50px;
  text-align: center;
  background-color: var(--palette-2-milk);
`;
const TransformTest9 = styled.div`
  margin: auto;
  width: 50px;
  height: 50px;
  background-color: var(--palette-2-red);
`;

const TransformTest9Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space around;
  & ${Label}:hover + ${TransformTest9} {
    background-color: white;
    transform: scale(1.3);
  }
`

const Label2 = styled.div`
  margin-left: 50px;
  line-height: 50px;
  text-align: center;
  background-color: var(--palette-2-milk);
  z-index:10;
`;
const TransformTest10 = styled.div`
  margin: auto;
  width: 50px;
  height: 50px;
  background-color: var(--palette-2-red);
  opacity:0;
  transform: translate(-1em);
  transition: opacity 0.4s linear,
    transform 0.4s cubic-bezier(0.2, 0.9, 0.3, 1.3);
`;
const TransformTest10Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space around;
  & ${Label2}:hover + ${TransformTest10} {
    opacity:1;
    transform: translate(0);
  }
`

const TransformTest11 = styled.div`
  margin: auto;
  width: 1px;
  height: 1px;
  background-color: var(--palette-2-red);
  transform: perspective(500px) translateZ(479px);
`

const TransformTest12 = styled.div`
  margin: auto;
  width: 30px;
  height: 30px;
  background-color: var(--palette-2-red);
  transform: perspective(100px) rotateY(70deg);
  
`

const TransformTest13 = styled.div`
  margin: auto;
  width: 30px;
  height: 30px;
  background-color: var(--palette-2-red);
  transform: perspective(100px) rotateX(70deg);
`

const TransformTest14 = styled.div`
  margin: auto;
  width: 100px;
  height: 50px;
  background-color: var(--palette-2-red);
  transform: perspective(100px) rotateY(130deg);
`
const TransformTest15 = styled(TransformTest14)`
  transform: perspective(100px) rotateY(130deg);
  backface-visibility: hidden;
`

const TransformTest16 = styled.div`
  perspective: 600px;
  height: 300px;
  width: 200px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s;
  &.flip {
    transform: rotateY(180deg);
  }
`

const Card = styled.div`
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  
`

const Card1 = styled(Card)`
  background-color: var(--palette-2-red);
`

const Card2 = styled(Card)`
  background-color: var(--palette-2-milk);
  transform: rotateY(180deg);
`
const ImageCss = styled.div`
  margin: 1em;
  width: 280px;
  height: 400px;
  background-image: url(${cardcss});
  background-size: contain;
  background-repeat: no-repeat;
`
const ImageHtml = styled.div`
  margin: 1em;
  width: 300px;
  height: 200px;
  background-image: url(${cardhtml});
  background-size: contain;
  background-repeat: no-repeat;
`
const ImageJs = styled.div`
  margin: 1em;
  width: 300px;
  height: 200px;
  background-image: url(${cardjs});
  background-size: contain;
  background-repeat: no-repeat;
`

export {
  TransformContainer,
  TransformItem,
  TransformItemBig,
  TransformLabel,
  TransformLabelFlex,
  TransformContent,
  TransformContentCustom,
  TransformTest1,
  TransformTest2,
  TransformTest3,
  TransformTest4,
  TransformTest5,
  TransformTest6,
  TransformTest7,
  TransformTest8,
  TransformTest9Wrapper,
  TransformTest9,
  Label,
  TransformTest10Wrapper,
  TransformTest10,
  Label2,
  TransformTest11,
  TransformTest12,
  TransformTest13,
  TransformTest14,
  TransformTest15,
  TransformTest16,
  Card1,
  Card2,
  ImageCss,
  ImageHtml,
  ImageJs
};