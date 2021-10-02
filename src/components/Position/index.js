import {
  PositionContainer,
  PositionCard,
  PositionFixed,
  FixedModalContainer,
  FixedModal,
  FixedModalButton,
  FixedModalCloseButton,
  DropDownContainer,
  DropDownLabel,
  DropDownContent,
  DropDownUl,
  PositionSticky,
  PositionRelative
} from "./positionstyles";

import { useRef } from "react"

function Position() {

  const fixedModalElement = useRef();
  const dropDownContentElement = useRef();

  const showFixedModal = (event)=> {
    console.log(fixedModalElement)
    fixedModalElement.current.style.display = "block";
  }

  const closeFixedModal = (event)=> {
    fixedModalElement.current.style.display = "none";
  }

  return (
    <PositionContainer>
      <PositionCard>
        <mark>position: fixed <br/>(with respect to viewport)</mark>
        <br/>
        <FixedModalButton  onClick={showFixedModal}>Show fixed Modal</FixedModalButton>
        <PositionFixed>
          fixed , bottom
        </PositionFixed>
      </PositionCard>
      <PositionCard>
        <mark> position: relative <br/>
        (moves relative from original position,<br/>
        cannot use to resize element compared to position's static or absolute,<br/>
        e.g. cannot use top and bottom to size element)<br/>
        </mark><br/>
        <DropDownContainer>
          <DropDownLabel>
            position:relative;<br/>
            left: 2em;
          </DropDownLabel>
          <DropDownContent ref={dropDownContentElement}>
            <DropDownUl>
              <li>one</li>
              <li>two</li>
              <li>three</li>
            </DropDownUl>
          </DropDownContent>
        </DropDownContainer>
      </PositionCard>
      <PositionCard>
      <mark>position:sticky; (becomes active with respect to viewport when scrolled) <br/> </mark>
      position:sticky; <br/>
      position:sticky; <br/>
      position:sticky; <br/>
      position:sticky; <br/>
        <PositionSticky>
          position:sticky;<br/>
          top:3em;
        </PositionSticky>
      </PositionCard>
      <PositionCard>
        <mark>position:relative; <br/> </mark>
        position:relative; <br/> 
        position:relative; <br/> 
        position:relative; <br/> 
        position:relative; <br/> 
        position:relative; <br/> 
        <PositionRelative>
          position:relative;<br/>
          top:3em;
        </PositionRelative>
      </PositionCard>
      <FixedModalContainer ref={fixedModalElement}>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        position: fixed;<br/>
        top: 0;<br/>
        bottom: 0;<br/>
        left: 0;<br/>
        right: 0;<br/>
        background-color: rgba(0,0,0,0.5);<br/>
        display: none;
        <FixedModal >
          <h3>fixed modal</h3><br/><br/>
          position: fixed;<br/>
          top:3em;<br/>
          bottom:3em;<br/>
          right: 20%;<br/>
          left: 20%;<br/>
          background-color: var(--green-2-color);<br/>
          <br/><br/><br/>
          <h4>close button css</h4>
          <mark> position: absolute (with respect to closest positioned ancestor)</mark><br/>
          position: absolute;<br/>
          background-color: inherit;<br/>
          font-size: 2rem;<br/>
          top:0;<br/>
          right: 0;<br/>
          border: none;<br/>
          width: 2em;<br/>
          height: 2em;<br/>
          text-indent: 5em;<mark>move text to 5em away</mark><br/>
          overflow: hidden;<mark>hide overflow to hide the text</mark><br/>
          ::after &#123;<br/>
            position: absolute;<mark>create pseudoelement</mark><br/>
            top: 0.2em;<br/>
            right: 0.4em;<br/>
            content: "\\00D7";<mark>unicode for x</mark><br/>
            text-indent: 0;<br/>
          &#125;
          <FixedModalCloseButton onClick={closeFixedModal}>close</FixedModalCloseButton>
        </FixedModal>
      </FixedModalContainer>
    </PositionContainer>
  )
}

export default Position;