import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
.navbar {
  background-color: white
}

.nav-brand, .navbar-nav, .nav-link{
  color: #bbb

  &:hover{
    color: white;
  }
}
`;

const NavigationBar = () => {
  return(
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">keep learning.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/platforms">Platforms</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/platforms/new">New Platform</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  )
}

export default NavigationBar
