import {
  NavBar, 
  NavLinks, 
  NavLink,
  CustomLink
} from "./navstyles.js";

function Nav() {
  return (
    <>
    <NavBar>
      <NavLinks>
        <NavLink> <CustomLink to="/">Home</CustomLink> </NavLink>
        <NavLink> <CustomLink to="/displaytable">display:table</CustomLink> </NavLink>
        <NavLink> <CustomLink to="/again">Again</CustomLink></NavLink>
      </NavLinks>
    </NavBar>
    </>
  )
}

export default Nav;