import React, { CSSProperties } from 'react'
import { FaSearch, FaUserAlt } from 'react-icons/fa'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image
} from 'react-bootstrap'

interface Props {
  style?: CSSProperties
}
export default function NavBar({ style }: Props) {
  return (
    <nav className="navbar navbar-expand-lg" style={style}>
      <Navbar.Brand href="#home">
        <Image src="/assets/images/logo-white.png"
          style={{
            width: 130
          }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Accueil</Nav.Link>
          <Nav.Link href="#link">Qui sommes nous?</Nav.Link>
          <Nav.Link href="#link">nos combats</Nav.Link>
          <Nav.Link href="#link">nos dirigeants</Nav.Link>
          <Nav.Link href="#link">notre organigramme</Nav.Link>
          <Nav.Link href="#link">notre manifeste</Nav.Link>
          <Nav.Link href="#link">Actualités</Nav.Link>
          <Nav.Link href="#link"><FaSearch /></Nav.Link>
          <Nav.Link href="#link"><FaUserAlt /></Nav.Link>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </nav>
  )
}