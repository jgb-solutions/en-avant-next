import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap'

import SEO from 'components/SEO'
import Colors from 'utils/colors'
import Footer from 'components/Footer'
import Button from 'components/Button'
import TransparentNavBar from 'components/TransparentNavBar'
import TitleWithSubText from 'components/TitleWithSubText'

const title = "Nos Dirigeants"

export default function Index() {
  return (
    <>
      <SEO title={title} />

      <section className="section-container" style={{
        backgroundImage: 'url(' + "/assets/images/dirigeants-header-bg.png" + ')',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        minHeight: 500,
        paddingTop: 20

      }}>
        <Container>
          <TransparentNavBar
            showButtons
            containerStyle={{
              marginTop: 30
            }}
          />

          <div style={{
            textAlign: 'center',
            paddingTop: 50,
            paddingBottom: 200
          }}>
            <h1 style={{
              fontSize: 50,
              fontWeight: 'bold',
              color: 'white',
              textTransform: "uppercase",
            }}>Mouvement pour changer <br />Haïti ensemble</h1>
            <div style={{ marginBottom: 220 }}>
              <Button
                title="Rejoignez le mouvement!"
                style={{
                  borderRadius: 20,
                  fontSize: 12,
                  backgroundColor: Colors.orange,
                  color: Colors.white,
                  textTransform: "uppercase",
                  paddingLeft: 24,
                  paddingRight: 24,
                  paddingTop: 12,
                  paddingBottom: 12
                }}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-container" style={{
        paddingBottom: 30
      }}>
        <Container style={{}}>
          <TitleWithSubText
            title={title}
            subText={`Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
              Ut enim ad.`}
          />

          <Row>
            {new Array(8).fill(1).map((number) => (
              <Col md={3} key={number}>
                <div>
                  <Image style={{
                    display: "block",
                  }}
                    src="/assets/images/dirigeant.png"
                    fluid
                  />

                  <div style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    paddingLeft: 15,
                    paddingRight: 15,
                    textAlign: 'center'
                  }}>
                    <h4 style={{
                      fontSize: 14,
                      fontWeight: 'bold',
                      textTransform: "uppercase",
                      color: Colors.darkerBlue
                    }}>Frantz Joseph</h4>
                    <h5 style={{
                      fontSize: 10,
                      color: Colors.gray,
                      marginBottom: 12
                    }}>Volunteer</h5>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  )
}
