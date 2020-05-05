import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    `

const StyledNavList = styled.ul`
    /* background: blue; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavLink = styled(Link)`
    font-family: 'Rubik', sans-serif;
    color: black;
    margin-left: 1rem;

`

const Nav = () => {
    return (
        <StyledNav>
            <StyledNavList>
                <li><NavLink to="/">space</NavLink></li>
                <li><NavLink to="/">desks</NavLink></li>
                <li><NavLink to="/">partners</NavLink></li>
                <li><NavLink to="/">story</NavLink></li>
            </StyledNavList>
        </StyledNav>
    )
}

export default Nav