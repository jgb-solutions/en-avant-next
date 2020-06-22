import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarker, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'
import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap'

import Colors from 'utils/colors'
import TransparentNavBar from './TransparentNavBar'

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
              “ D'aucuns pensent que le déclin continu de notre pays est inévitable
                et que le pire est à venir. Les fondateurs du mouvement <strong>« EN AVANT »</strong> osent
                prétendre autrement. En effet, une prise en charge de la politique par un
                leadership collectif et visionnaire peut conduire Haïti sur la voie du
                progrès et du développement”.
              </p>

            <div>
              <span style={{
                fontSize: 11,
                backgroundColor: Colors.facebook,
                color: Colors.white,
                padding: 12,
                borderRadius: '50%'
              }}>
                <FaFacebookF />
              </span>
                &nbsp;
                &nbsp;
                <span style={{
                fontSize: 11,
                backgroundColor: Colors.twitter,
                color: Colors.white,
                padding: 12,
                borderRadius: '50%'
              }}>
                <FaTwitter />
              </span>
                &nbsp;
                &nbsp;
                <span style={{
                fontSize: 11,
                backgroundColor: Colors.instagram,
                color: Colors.white,
                padding: 12,
                borderRadius: '50%'
              }}>
                <FaInstagram />
              </span>
            </div>
          </Col>
          <Col md={8}>
            <Row>
              <Col md={4}>
                <h5 style={{
                  color: Colors.white,
                  fontSize: 12,
                  lineHeight: 1.3
                }}>NOTRE MOUVEMENT <br /> EN PROVINCE</h5>
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
                }}>NOTRE MOUVEMENT A L’ÉTRANGER (la DIASPORA)</h5>
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
                  <li><FaMapMarker /> Location</li>
                  <li><FaPhone /> (XXX) xxxx xxx</li>
                  <li><FaEnvelope /> info@enavant.ht</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}