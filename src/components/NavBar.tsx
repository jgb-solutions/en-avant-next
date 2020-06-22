import React, { CSSProperties } from 'react'
import { FaSearch, FaUserAlt } from 'react-icons/fa'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Image
} from 'react-bootstrap'

import { useRouter } from 'next/router'

import Colors from 'utils/colors'
import Button from './Button'
import Routes from 'utils/routers'

interface Props {
  style?: CSSProperties,
  showButtons?: boolean,
  containerStyle?: CSSProperties
}

export default function NavBar({ style, showButtons, containerStyle }: Props) {
  const router = useRouter()

  return (
    <div style={containerStyle}>
      {showButtons && (
        <div style={{
          textAlign: 'right'
        }}>
          <Button
            title="adherer"
            style={{
              backgroundColor: Colors.white,
              color: Colors.blue,
              fontWeight: 'bold',
            }}
          />
          &nbsp;
          &nbsp;
          &nbsp;
          <Button
            title="donner"
            style={{
              backgroundColor: Colors.orange,
              color: Colors.white,
              fontWeight: 'bold',
            }}
          />
        </div>
      )}
      <nav className="navbar navbar-expand-lg" style={style}>
        <Navbar.Brand href={Routes.home.url}>
          <Image src="/assets/images/logo-white.png"
            style={{
              width: 130
            }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={Routes.home.url}>
              {Routes.home.name}
            </Nav.Link>
            <Nav.Link href={Routes.about.url}>
              {Routes.about.name}
            </Nav.Link>
            <Nav.Link href={Routes.chart.url}>
              {Routes.chart.name}
            </Nav.Link>
            <Nav.Link href={Routes.fight.url}>
              {Routes.fight.name}
            </Nav.Link>
            <Nav.Link href={Routes.leaders.url}>
              {Routes.leaders.name}
            </Nav.Link>
            <Nav.Link href={Routes.manifest.url}>
              {Routes.manifest.name}
            </Nav.Link>
            <Nav.Link href={Routes.home.url}>
              {Routes.news.name}
            </Nav.Link>
            <Nav.Link href="#"><FaSearch /></Nav.Link>
            <Nav.Link href="#"><FaUserAlt /></Nav.Link>
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
    </div>
  )
}