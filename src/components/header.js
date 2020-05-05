// import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"


import Container from "./container"
import Logo from "./logo"
import Nav from "./nav"
// import Logo from "../images/257-logo.svg"

const Header = styled.header`
  /* background: #fff; */
  /* padding: 1rem 0; */
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function HeaderComponent({ siteTitle }) {
  return (
    <Container>
      <Header>
        <Logo />

        <Nav />
      </Header>
    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default HeaderComponent
