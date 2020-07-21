import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarker, FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'
import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap'

import Colors from 'utils/colors'
import TransparentNavBar from './TransparentNavBar'

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

        <Row>
          <Col md={4}>
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
          </Col>
          <Col md={8}>
            <Row>
              <Col md={4}>
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
              </Col>
              <Col md={4}>
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
              </Col>
              <Col md={4}>
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
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}