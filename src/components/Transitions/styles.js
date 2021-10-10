import styled from "styled-components";

export const TransContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  background-color: var(--palette-2-milk);
  
`
export const TransItem = styled.div`
  flex: 0 1 30%;
  border: 0.5px solid var(--palette-2-yellow);
  border-radius: 0.25em;
  display: grid;
  grid-template-rows: 1fr auto;
  margin: 1em;
`

export const TransLabel = styled.div`
  grid-row: 1/2;
  background-color: var(--palette-2-orange);
  font-size: 0.85em;
`
export const TransContent = styled.div`
  padding: 1em 0;
  grid-row: 2/3;
  background-image: radial-gradient(var(--palette-2-milk), var(--palette-2-yellow));
`

export const TransButton = styled.button`
  display: block;
  margin:auto;
  background-color: var(--palette-2-red);
  margin-top: .5em;
  width: 100px;
  height: 50px;
  border: none;
  color: white;
  text-shadow: 1px 1px grey;
  transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  transition-delay: 0s;
  :hover {
    background-color: var(--palette-2-orange);
  }
  :active {
    background-color: var(--palette-2-yellow);
  }
`

export const NormalButton = styled.button`
  display: block;
  margin: auto;
  background-color: var(--palette-2-red);
  margin-top: .5em;
  width: 100px;
  height: 50px;
  border: none;
  color: white;
  text-shadow: 1px 1px grey;
  :hover {
    background-color: var(--palette-2-orange);
  }
  :active {
    background-color: var(--palette-2-yellow);
  }
`

export const TransStepsButton = styled.button`
  display: block;
  margin:auto;
  background-color: var(--palette-2-red);
  margin-top: .5em;
  width: 100px;
  height: 50px;
  border: none;
  color: white;
  text-shadow: 1px 1px grey;
  transition: all 0.2s steps(5,start) 0s;
  :hover {
    background-color: var(--palette-2-orange);
  }
  :active {
    background-color: var(--palette-2-yellow);
  }
`
export const DropdownContainer = styled.div`
  position: relative;
  width: auto;
`
export const Dropdown = styled.div`
  height: 20px;
  background-color: var(--palette-2-red);
  transition: opacity 0.2s ease 0s,
    visibility 0s ease 0s;
  &.menu-open {
    transition: opacity 0.2s ease 0s,
    visibility 0s ease 0.2s;
  }
  :after {
    content: "";
    position: absolute;
    top: 5px;
    right: 5px;
    border: 0.5em solid;
    border-color: black transparent transparent;
  }
  
`

export const DropdownMenu = styled.div`
  position: absolute;
  top: 1.5em;
  list-style: none;
  opacity: 0;
  visibility: hidden;
  &.menu-open {
    opacity: 1;
    visibility: visible;
  }
`

export const Dropdown2 = styled.div`
  height: 20px;
  background-color: var(--palette-2-red);
  :after {
    content: "";
    position: absolute;
    top: 5px;
    right: 5px;
    border: 0.5em solid;
    border-color: black transparent transparent;
  }
  
`

export const DropdownMenu2 = styled.div`
  position: absolute;
  top: 1.5em;
  list-style: none;
  height: 0;
  overflow:hidden;
  transition: height 0.3s ease-out;
  ${Dropdown2}.menu-open {
    height: auto;
  }
`