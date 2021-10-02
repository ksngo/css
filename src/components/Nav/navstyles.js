import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavBar = styled.div`
  height: auto;
  background-color: var(--green-3-color);
  padding: 4px 8px;
  position: relative;
`

export const NavLinks = styled.ul`
  display: flex;
  flex-flow: row unwrap;
  justify-content: flex-start;
  list-style-type: none;
  align-items: center;
`
export const NavLink = styled.li`
  flex: 0 0 1;
  background-color: var(--green-2-color);
  padding: 4px 8px 4px 8px;
`
export const CustomLink = styled((props)=> 
  <Link {...props}/>
)`
  color: white;
  :link {
    text-decoration: none;
  }
  :hover {
    color: pink;
  }
`
export const NavBurger = styled.div`
  position: absolute;
  right: 0.1em;
  top: 0.2em;
  text-indent: 10em;
  overflow: hidden;
  white-space: nowrap;
  width: 2em;
  height: 2em;
  ::after {
    content: "\\2261";
    position: absolute;
    right: 1em;
    color: var(--green-2-color);
    top:0.1em;
  }
`

export const NavBurgerMenu = styled.ul`
  position: absolute;
  right:0;
  top: 2.5em;
  width: 500px;
  background-color: var(--green-2-color);
  list-style: none;
  display: none;
  &.is-open {
    display: block;
  }
  li + li {
    border-top: 1px solid white;
  }
`