import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavBar = styled.div`
  height: auto;
  background-color: var(--green-3-color);
  padding: 4px 8px;
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