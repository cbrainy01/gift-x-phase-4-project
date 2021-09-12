import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from "./NavbarElements"

function Navigation() {
    return (
        <>
          <Nav>
            <NavLink to="/">
              <h1>Logo</h1>
            </NavLink>
            <Bars/>
            <NavMenu>
              <NavLink to="/people" activeStyle>
                People
              </NavLink>
              <NavLink to="/gifts" activeStyle>
                Gifts
              </NavLink>
              <NavBtn >
                <NavBtnLink to="/logout">logout</NavBtnLink>
              </NavBtn >
            </NavMenu>
          </Nav>
        </>
    )
}

export default Navigation


