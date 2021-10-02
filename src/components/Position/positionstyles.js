import styled from "styled-components";

const PositionContainer = styled.div`
  display: flex;
  background-color: var(--primary-color);
  flex-flow: row nowrap;
  justify-content: space-around;
  min-height: 200vh;
  
`

const PositionCard = styled.div`
  background-color: var(--white-color);
  width: 300px;
  height: 300px;
`
const PositionFixed = styled.div`
  position: fixed;
  bottom: 2em;
`

const FixedModal = styled.div`
  position: fixed;
  top:3em;
  bottom:3em;
  right: 20%;
  left: 20%;
  background-color: var(--green-2-color);
`
const FixedModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.5);
  display: none;
`

const FixedModalButton = styled.button`
  border: none;
  color: white;
  background-color: var(--purple-button);
  width: auto;
  padding: 4px 8px;
`
const FixedModalCloseButton = styled.button`
  position: absolute;
  background-color: inherit;
  font-size: 2rem;
  top:0;
  right: 0;
  border: none;
  width: 2em;
  height: 2em;
  text-indent: 5em;
  overflow: hidden;
  ::after {
    position: absolute;
    top: 0.2em;
    right: 0.4em;
    content: "\\00D7";
    text-indent: 0;
  }
`

const DropDownContainer = styled.div`
  background-color: var(--grey-color);
  position: relative;
  left: 2em;
`

const DropDownLabel = styled.div`
  padding: 4px 8px;
  ::before {
    content:"\\25BC";
    position: absolute;
    bottom: 1em;
    right: 3em;
  }
  ::after {
    position: absolute;
    content:"";
    border: 1em solid;
    border-color: black transparent transparent;
    right: 1em;
    top:1em;
  }
  :hover {
    ::after {
      border-color: transparent transparent black;
      top: 0.3em;
    }
  }
`
const DropDownContent = styled.div`
  position: absolute;
  top: 3em;
  display: none;
  color: var(--grey-color);
  ${DropDownContainer}:hover & {
    display: block;
  }
`

const DropDownUl = styled.ul`
  list-style: none;
`

const PositionSticky = styled.div`
  position: sticky;
  top: 3em;
  background-color: var(--grey-color);

`
const PositionRelative = styled.div`
  position: relative;
  top: 3em;
  background-color: var(--grey-color);
`

export {
  PositionContainer,
  PositionCard,
  PositionFixed,
  FixedModalContainer,
  FixedModal,
  FixedModalButton,
  FixedModalCloseButton,
  DropDownContainer,
  DropDownContent,
  DropDownLabel,
  DropDownUl,
  PositionSticky,
  PositionRelative
};