import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarker, FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles"

import Colors from 'utils/colors'
import TransparentNavBar from './TransparentNavBar'
import Container from './Container'

export const useStyles = makeStyles({
  // '@global': {
  //   '*::-webkit-scrollbar': {
  //     width: '0.4em',
  //     height: '0.4em'
  //   },
  //   '*::-webkit-scrollbar-track': {
  //     '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
  //   },
  //   '*::-webkit-scrollbar-thumb': {
  //     // backgroundColor: 'rgba(0,0,0,.4)',
  //     outline: '1px solid slategrey'
  //   },
  //   body: {
  //     // backgroundColor: '#e9ebee'
  //     backgroundColor: Colors.contentGrey
  //   }
  // },
})

const socialNetworks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/enavant.ht',
    icon: <FaFacebookF />,
    backgroundColor: Colors.facebook,
    color: Colors.white,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/EnAvantHT',
    icon: <FaTwitter />,
    backgroundColor: Colors.twitter,
    color: Colors.white,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/enavant.ht/',
    icon: <FaInstagram />,
    backgroundColor: Colors.instagram,
    color: Colors.white,
  },
  {
    name: 'YouTube',
    url: 'https://www.facebook.com/enavant.ht',
    icon: <FaYoutube />,
    backgroundColor: Colors.youtube,
    color: Colors.white,
  },

]

export default function Footer() {
  const styles = useStyles()

  return (
    <section className="section-container" style={{
      backgroundColor: Colors.darkerBlue,
      paddingTop: 80,
      paddingBottom: 80,
    }}>
      <Container>
        <TransparentNavBar style={{
          marginBottom: 15
        }} />

        <Grid container spacing={3}>
          <Grid item md={4}>
            <p style={{
              fontSize: 10,
              color: Colors.darkerGray,
              marginBottom: 45
            }}>
              “D'aucuns pensent que le déclin continu de notre pays est inévitable
                et que le pire est à venir. Les fondateurs du mouvement <strong>« EN AVANT »</strong> osent
                prétendre autrement.”
              </p>

            <div style={{
              display: "flex",
              justifyContent: "space-between",
              width: "60%"
            }}>
              {socialNetworks.map((sn, i) => (
                <a href={sn.url} target="_blank" rel="noopener" key={i}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    backgroundColor: sn.backgroundColor,
                    color: sn.color,
                    width: 32,
                    height: 32,
                    borderRadius: '50%'
                  }}>
                    {sn.icon}
                  </div>
                </a>
              ))}
            </div>
          </Grid>
          <Grid item md={8}>
            <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
                <h5 style={{
                  color: Colors.white,
                  fontSize: 12,
                  lineHeight: 1.3,
                  textTransform: 'uppercase'
                }}>Nos représentants  <br /> EN PROVINCE</h5>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  color: Colors.evenDarkerGray,
                  textTransform: 'uppercase',
                  fontSize: 10
                }}>
                  <li>ouest</li>
                  <li>centre</li>
                  <li>nord-est</li>
                  <li>nord</li>
                  <li>artibonite</li>
                  <li>sud</li>
                  <li>sud-est</li>
                  <li>grande-anse</li>
                </ul>
              </Grid>
              <Grid item md={4} xs={12}>
                <h5 style={{
                  color: Colors.white,
                  fontSize: 12,
                  lineHeight: 1.3,
                  textTransform: "uppercase"
                }}>Nos représentants en diaspora <br /> (branches extérieures )</h5>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  color: Colors.evenDarkerGray,
                  textTransform: 'uppercase',
                  fontSize: 10
                }}>
                  <li>ouest</li>
                  <li>centre</li>
                  <li>nord-est</li>
                  <li>nord</li>
                  <li>artibonite</li>
                  <li>sud</li>
                  <li>sud-est</li>
                  <li>grande-anse</li>
                </ul>
              </Grid>
              <Grid item md={4} xs={12}>
                <h5 style={{
                  color: Colors.white,
                  fontSize: 12,
                  lineHeight: 1.3,
                  textTransform: "uppercase"
                }}>Contact</h5>
                <ul style={{
                  listStyle: "none",
                  padding: 0,
                  color: Colors.evenDarkerGray,
                  textTransform: 'uppercase',
                  fontSize: 11,
                  lineHeight: 2
                }}>
                  <li><FaMapMarker /> &nbsp;44, impasse lescot, Laboule 22</li>
                  <li><FaPhone /> &nbsp;(509) 4621 2121</li>
                  <li style={{
                    display: "flex",
                    alignItems: "center"
                  }}><FaEnvelope /> &nbsp; contact@enavant.ht</li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}