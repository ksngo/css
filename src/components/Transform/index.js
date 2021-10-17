import {
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
} from "./styles.js";

import { useRef } from "react";
function Transform() {

  const cardRef = useRef();

  const flipCard = (event) => {
    cardRef.current.classList.toggle("flip");
  }
  return (
    <TransformContainer>
      <TransformItem>
        <TransformLabel>
          transform: rotate(15deg);<br />
          <hr />
          transform: translate(30px, 30px);<br />
          <hr />
          transform: scale(1.5);<br />
          <hr />
          transform: skew(15deg);
        </TransformLabel>
        <TransformContent>
          <TransformTest1 />
          <TransformTest2 />
          <TransformTest3 />
          <TransformTest4 />
        </TransformContent>
      </TransformItem>
      <TransformItem>
        <TransformLabel>
          transform: rotate(15deg);<br />
          transform-origin: left bottom;<br />
          <hr />
          transform: scale(1.5);<br />
          transform-origin: right top;<br />
          <hr />
          transform: skew(15deg);<br />
          transform-origin: left center;
        </TransformLabel>
        <TransformContent>
          <TransformTest5 />
          <TransformTest6 />
          <TransformTest7 />
        </TransformContent>
      </TransformItem>
      <TransformItem>
        <TransformLabel>
          transform: rotate(15deg) translate(30px, 30px) scale(1.5) skew(15deg);<br />
          background-color: var(--palette-2-red);<br />
          transition: background-color .5s linear;<br />
          :hover &#123; background-color: transparent &#125;
        </TransformLabel>
        <TransformContent>
          <TransformTest8 />
        </TransformContent>
      </TransformItem>
      <TransformItem>
        <TransformLabel>
          $&#123;hello&#125;:hover + $&#123;box2&#125; &#123;<br />
          background-color: white;<br />
          transform: scale(1.3);&#125;<br />
          <mark>! unable to target box1</mark>
        </TransformLabel>
        <TransformContent>
          <TransformTest9Wrapper>
            <TransformTest9>box1</TransformTest9>
            <Label>Hello</Label>
            <TransformTest9>box2</TransformTest9>
          </TransformTest9Wrapper>
        </TransformContent>
      </TransformItem>
      <TransformItem>
        <TransformLabel>
          box2 &#123;<br />
          opacity:0;<br />
          transform: translate(-1em);<br />
          transition: opacity 0.4s linear,<br />
          &emsp;transform 0.4s cubic-bezier(0.2, 0.9, 0.3, 1.3);&#125;<br />
          <hr />
          wrapper&#123;<br />
          $&#123;hello&#125;:hover + $&#123;box2&#125; &#123;<br />
          &emsp;opacity:1;<br />
          &emsp;transform: translate(0);&#125;<br />
          &#125;

        </TransformLabel>
        <TransformContent>
          <TransformTest10Wrapper>
            <TransformTest10>box1</TransformTest10>
            <Label2>Hello</Label2>
            <TransformTest10>box2</TransformTest10>
          </TransformTest10Wrapper>
        </TransformContent>
      </TransformItem>
      <TransformItem>
        <TransformLabel>

        </TransformLabel>
        <TransformContent>
          <ul>
            <li>Favour transform over positioning or sizing</li>
            <li>Transform target the composite layer but positioning need browser to calculate
              the document flow.</li>
            <li>In composite stage, two properties, opacity and transform, when changed
              , has much faster rendering time.
            </li>
          </ul>
        </TransformContent>
      </TransformItem>
      <TransformItem>
        <TransformLabel>
          width: 1px;<br />
          height: 1px;<br />
          transform: perspective(500px) translateZ(479px);<br />
          <mark>500px from z plane, moves 479px towards viewer from z plane</mark>
          <hr />
          width: 30px; height: 30px; <br />
          transform: perspective(100px) rotateY(70deg);<br />
          <hr />
          width: 30px; height: 30px; <br />
          transform: perspective(100px) rotateX(70deg);<br />
          <hr />
          transform: perspective(100px) rotateY(130deg);<br />
          <hr />
          transform: perspective(100px) rotateY(130deg);<br />
          backface-visibility: hidden;
        </TransformLabel>
        <TransformContent>
          <TransformTest11 />
          <TransformTest12 />
          <TransformTest13 />
          <TransformTest14>Reverse?</TransformTest14>
          <TransformTest15>Reverse?</TransformTest15>
        </TransformContent>
      </TransformItem>
      <TransformItemBig>
        <TransformLabelFlex>
          <ImageHtml />
          <ImageCss />
          <ImageJs />
        </TransformLabelFlex>
        <TransformContentCustom>
          <TransformTest16 ref={cardRef}>
            <Card1 onClick={flipCard}>1</Card1>
            <Card2 onClick={flipCard}>2</Card2>
          </TransformTest16>
        </TransformContentCustom>
      </TransformItemBig>
      {/* <TransformItem>
        <TransformLabel>
+        </TransformLabel>
        <TransformContent>
          abc
        </TransformContent>
      </TransformItem> */}
    </TransformContainer>
  )
}

export default Transform;