import {
  NavBar,
  NavLinks,
  NavLink,
  CustomLink,
  NavBurger,
  NavBurgerMenu
} from "./navstyles.js";

import { useRef } from "react";

function Nav() {

  const menuElement = useRef(); 

  const showMenu = (event)=> {
    menuElement.current.classList.toggle('is-open')
  }
  return (
    <>
      <NavBar>
        <NavLinks>
          <NavLink> <CustomLink to="/">Home</CustomLink> </NavLink>
          <NavLink> <CustomLink to="/displaytable">display:table</CustomLink> </NavLink>
          <NavLink> <CustomLink to="/float">float</CustomLink></NavLink>
          <NavLink> <CustomLink to="/attributeSelectors">attribute selectors</CustomLink></NavLink>
          <NavLink> <CustomLink to="/grids">grids</CustomLink></NavLink>
          <NavLink> <CustomLink to="/position">position</CustomLink></NavLink>
          <NavLink> <CustomLink to="/background">background</CustomLink></NavLink>
          <NavLink> <CustomLink to="/transitions">transitions</CustomLink></NavLink>
          <NavLink> <CustomLink to="/transform">transform</CustomLink></NavLink>
          <NavLink> <CustomLink to="/animation">animation</CustomLink></NavLink>
          <NavLink> <CustomLink to="/again">Again</CustomLink></NavLink>
        </NavLinks>
        <NavBurger onClick={showMenu}>hamburger</NavBurger>
        <NavBurgerMenu ref={menuElement} >
          <li>1. click to elementSelector.classList.toggle('is-open')</li>
          <li>2. .is-open &#123; display:block &#125;</li>
          <li>3. classList toggle will add/remove class 'is-open' to the elementSelector</li>
          <li>4. with class 'is-open', the menu will be displayed</li>
          <li>5. default without class 'is-open', display:none;</li>
        </NavBurgerMenu>
      </NavBar>
    </>
  )
}

export default Nav;