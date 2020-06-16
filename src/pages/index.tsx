import Button from 'react-bootstrap/Button'

import SEO from 'components/SEO'
import { APP_NAME } from 'utils/constants'
import NavBar from 'components/NavBar'
import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap'
import Colors from 'utils/colors'

export default function Index() {
  return (
    <>
      <SEO />
      <section className="section-container">
        <Container>
          <NavBar />
        </Container>
      </section>

      <section className="section-container" style={{
        backgroundImage: 'url(' + "/assets/images/home-header.jpg" + ')',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        minHeight: 500,

      }}>
        <Container>
          <div style={{
            textAlign: 'center',
            paddingTop: 150,
            paddingBottom: 200
          }}>
            <h1 style={{
              fontSize: 55,
              color: 'white',
              textTransform: "uppercase",
            }}>Mouvement pour changer <br />Haïti ensemble</h1>
            <div style={{ marginBottom: 200 }}>
              <Button style={{
                borderRadius: 20,
                backgroundColor: "#f46425",
                color: 'white',
                textTransform: "uppercase",
                paddingLeft: 15,
                paddingRight: 15,
              }}>Rejoignez le mouvement!</Button>
            </div>

            <div>
              <Button style={{
                borderRadius: 20,
                backgroundColor: Colors.white,
                color: Colors.blue,
                textTransform: "uppercase",
                paddingLeft: 24,
                paddingRight: 24,
              }}>Adherer</Button>

              &nbsp;
              &nbsp;
              &nbsp;

              <Button style={{
                borderRadius: 20,
                backgroundColor: Colors.orange,
                color: 'white',
                textTransform: "uppercase",
                paddingLeft: 24,
                paddingRight: 24,
              }}>donner</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-container">
        <Container style={{
          marginTop: -150
        }}>
          <Row noGutters style={{
            boxShadow: "0px 5px 7px 0px rgba(0,0,0,0.35)"
          }}>
            <Col md={6} style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: 40,
              paddingRight: 40,
              background: Colors.white
            }}>
              <h2 style={{
                fontSize: 55,
                color: Colors.blue,
                textTransform: "uppercase",
              }}>Mouvement <br /> pour changer <br />Haïti ensemble</h2>

              <p style={{ color: Colors.gray }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

              <div>
                <Button style={{
                  borderRadius: 20,
                  backgroundColor: Colors.orange,
                  color: 'white',
                  textTransform: "uppercase",
                  paddingLeft: 40,
                  paddingRight: 40,
                  paddingTop: 5,
                  paddingBottom: 5,
                }}>plus</Button>
              </div>
            </Col>
            <Col md={6} style={{
              overflow: "hidden"
            }} >
              <img style={{
                height: "100%",
                objectFit: "cover"
              }} src="/assets/images/jerry-home.jpg" />
            </Col>
          </Row>

          <div style={{
            textAlign: "center",
            marginTop: 100,
            marginBottom: 45
          }}>
            <h2 style={{
              fontSize: 30,
              color: Colors.orange,
              textTransform: "uppercase",
            }}>Actualités</h2>
            <p style={{ color: Colors.gray }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. Ut enim ad. </p>
          </div>

          <Row>
            {[1, 2, 3].map(() => (
              <Col md={4}>

                <div style={{
                  boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.35)"
                }}>
                  <Image style={{
                    display: "block",
                  }} src="/assets/images/actualite1.png"
                    fluid />

                  <div style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    paddingLeft: 15,
                    paddingRight: 15,
                  }}>
                    <h4 style={{ fontSize: 13, color: Colors.gray }}>Frantz Joseph</h4>
                    <h3 style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      color: Colors.blue,
                      marginBottom: 12
                    }}>Respect du mandat de Jovenel
Moïse: Kelly Bastien </h3>
                    <p style={{
                      color: Colors.gray,
                      fontSize: 12,
                      lineHeight: 1.7
                    }}>Moins de 24 heures avoir prôné le respect scrupuleux du mandat de cinq ans du président Jovenel Moïse, le professeur Rosny Desroches est déjà dans le collimateur des leaders  politiques</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section >
      <section className="section-container">
        <Container>changer</Container>
      </section>
      <section className="section-container">
        <Container>soutien</Container>
      </section>
      <section className="section-container">
        <Container>footer</Container>
      </section>
    </>
  )
}
