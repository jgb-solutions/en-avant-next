import React, { CSSProperties, useContext, useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { Navbar, Nav, NavDropdown, } from 'react-bootstrap'
import { useRouter } from 'next/router'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import Colors from 'utils/colors'
import Button from './Button'
import Routes from 'utils/routers'
import { AppContext } from "store/app-context"
import useHttpClient from "hooks/useHttpClient"
import Donate from './Donate'
import { translateUrl } from 'utils/translate'


interface Props {
  style?: CSSProperties,
  showButtons?: boolean,
  containerStyle?: CSSProperties,
  transparent?: boolean
}

export default function NavBar({ style, showButtons, containerStyle, transparent }: Props) {
  const { auth, actions } = useContext(AppContext)
  const router = useRouter()
  const { client } = useHttpClient()
  const [menuOpen, setMenuOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const routes: any = Routes

  const handleMenuOpen = (event: any) => {
    setMenuOpen(true)
    setAnchorEl(event.currentTarget)
  }

  const handleSwitchLanguage = (lang: string | undefined = undefined) => {
    setMenuOpen(false)
    setAnchorEl(null)

    if (lang) {
      const pageUrl = window.location.href

      const newUrl = translateUrl(pageUrl, lang)

      window.location.href = newUrl
    }
  }


  return (
    <div style={containerStyle}>
      <div style={{
        textAlign: 'right'
      }}>
        <Button title="Changer la langue" style={{
          backgroundColor: Colors.darkerBlue,
          color: Colors.white,
          marginRight: 15
        }} onClick={(event) => handleMenuOpen(event)} />
        <Menu
          id="simple-menu"
          keepMounted
          anchorEl={anchorEl}
          open={menuOpen}
          onClose={() => handleSwitchLanguage()}
        >
          <MenuItem onClick={() => handleSwitchLanguage('en')}>Anglais</MenuItem>
          <MenuItem onClick={() => handleSwitchLanguage('ht')}>Créole</MenuItem>
        </Menu>

        {showButtons && (
          <Donate />
        )}
      </div>
      {/* <nav className="navbar navbar-expand-sm" style={style}> */}
      <Navbar expand="md" style={style}>
        <Navbar.Brand href={Routes.home.url}>
          <img src={`/assets/images/logo-${transparent ? 'white' : 'blue'}.png`}
            style={{ width: 130 }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {Object.keys(routes).map(key => {
              const { url, name } = routes[key]

              return url === '/dirigeants' ? (
                <>
                  <NavDropdown title={name} id={name}>
                    <NavDropdown.Item href={url}>{name}</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="/dirigeants-province">
                      Nos représentants en province
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="/dirigeants-diaspora">
                      Nos représentants en diaspora
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                  <Nav.Link href={url} key={key} style={{
                    color: transparent ? Colors.white : Colors.orange
                  }}>
                    {name}
                  </Nav.Link>
                )
            })}
            {/* <Nav.Link href="#" style={{
              color: transparent ? Colors.white : Colors.orange
            }}><FaSearch /></Nav.Link> */}
            {auth?.isLoggedIn ? (
              <>
                <NavDropdown title={auth.data?.first_name} id="basic-nav-dropdown" style={{
                  color: `${transparent ? Colors.white : Colors.orange} !important`
                }}>
                  {/* <NavDropdown.Item href="/profil">Profile</NavDropdown.Item> */}
                  <NavDropdown.Item href="/don">Faire un Don</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => actions.doLogout(() => {
                    client.defaults.headers['Authorization'] = `Bearer ${auth.token}`

                    client.post('/logout')
                      .then(() => {
                        router.replace("/")
                      })
                      .catch(err => console.log(err))
                  })}>
                    Déconnexion
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
                <Nav.Link href="/login" style={{
                  color: transparent ? Colors.white : Colors.orange
                }}><FaUserAlt /></Nav.Link>
              )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* </nav> */}
    </div >
  )
}