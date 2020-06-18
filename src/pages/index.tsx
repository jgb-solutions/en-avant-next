import Button from 'react-bootstrap/Button'
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarker, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa'

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
      {/* <section className="section-container" style={{
        position: "fixed",
        width: '100%',
        background: 'white'
      }}>
        <Container>
          <NavBar style={{
            color: Colors.white,
            paddingLeft: 0,
            paddingRight: 0,
          }} />
        </Container>
      </section> */}

      <section className="section-container" style={{
        backgroundImage: 'url(' + "/assets/images/home-header.jpg" + ')',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        minHeight: 500,
        paddingTop: 20

      }}>
        <Container>
          <NavBar style={{
            color: Colors.white,
            paddingLeft: 0,
            paddingRight: 0,
          }} />

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

      <section className="section-container" style={{
        paddingBottom: 30
      }}>
        <Container style={{ marginTop: -150 }}>
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
                fontSize: 40,
                fontWeight: 'bold',
                color: Colors.darkerBlueText,
                textTransform: "uppercase",
              }}>Mouvement <br /> pour changer <br />Haïti ensemble</h2>

              <p style={{
                color: Colors.gray,
                fontSize: 12,
                marginBottom: 30
              }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

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
            {[1, 2, 3].map((number) => (
              <Col md={4} key={number}>

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
                    }}>Respect du mandat de Jovenel Moïse: Kelly Bastien </h3>
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
      </section>
      <section className="section-container">
        <Image src="/assets/images/hands.png"
          style={{ width: "100%" }}
          fluid />
      </section>
      <section className="section-container" style={{
        paddingTop: 150,
        paddingBottom: 150
      }}>
        <Container>
          <Row>
            <Col md={5} style={{}}>
              <h2 style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: Colors.blue,
                textTransform: "uppercase",
              }}>Nous comptons sur votre <br /> <span style={{ color: Colors.orange }}>soutien</span></h2>

              <p style={{ color: Colors.gray }}>Faites un pour renforcer votre action sur le terrain</p>

              <div>
                <Button style={{
                  borderRadius: 20,
                  backgroundColor: Colors.blue,
                  color: Colors.white,
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
            </Col>
            <Col md={7} style={{}}>
              <Row>
                <Col sm={6} style={{ marginBottom: 60 }}>
                  <h4 style={{
                    color: Colors.orange,
                    marginBottom: 20
                  }}>
                    <span style={{
                      boxShadow: "0px 0px 5px 5px rgba(223,52,71,0.15)",
                      borderRadius: '50%',
                      padding: 8,
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginRight: 12,
                    }}>
                      <FaPaperPlane style={{}} />
                    </span>
                    <span style={{

                    }}>Notre Manifeste</span>
                  </h4>
                  <p style={{
                    fontSize: 12
                  }}>
                    Lorem ipsum dolor sit amet, conset adou adipisicing elit, sed do eiusm temporaryl incididunt ugt labore.
                  </p>
                </Col>
                <Col sm={6} >
                  <h4 style={{
                    color: Colors.orange,
                    marginBottom: 20
                  }}>
                    <span style={{
                      boxShadow: "0px 0px 5px 5px rgba(223,52,71,0.15)",
                      borderRadius: '50%',
                      padding: 8,
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginRight: 12,
                    }}>
                      <FaPaperPlane style={{}} />
                    </span>
                    <span style={{

                    }}>Notre Manifeste</span>
                  </h4>
                  <p style={{
                    fontSize: 12
                  }}>
                    Lorem ipsum dolor sit amet, conset adou adipisicing elit, sed do eiusm temporaryl incididunt ugt labore.
                  </p>
                </Col>
                <Col sm={6} >
                  <h4 style={{
                    color: Colors.orange,
                    marginBottom: 20
                  }}>
                    <span style={{
                      boxShadow: "0px 0px 5px 5px rgba(223,52,71,0.15)",
                      borderRadius: '50%',
                      padding: 8,
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginRight: 12,
                    }}>
                      <FaPaperPlane style={{}} />
                    </span>
                    <span style={{

                    }}>Notre Manifeste</span>
                  </h4>
                  <p style={{
                    fontSize: 12
                  }}>
                    Lorem ipsum dolor sit amet, conset adou adipisicing elit, sed do eiusm temporaryl incididunt ugt labore.
                  </p>
                </Col>
                <Col sm={6} >
                  <h4 style={{
                    color: Colors.orange,
                    marginBottom: 20
                  }}>
                    <span style={{
                      boxShadow: "0px 0px 5px 5px rgba(223,52,71,0.15)",
                      borderRadius: '50%',
                      padding: 8,
                      fontSize: 12,
                      fontWeight: 'bold',
                      marginRight: 12,
                    }}>
                      <FaPaperPlane style={{}} />
                    </span>
                    <span style={{

                    }}>Notre Manifeste</span>
                  </h4>
                  <p style={{
                    fontSize: 12
                  }}>
                    Lorem ipsum dolor sit amet, conset adou adipisicing elit, sed do eiusm temporaryl incididunt ugt labore.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>

        </Container>
      </section>
      <section className="section-container" style={{
        backgroundColor: Colors.darkerBlue,
        paddingTop: 80,
        paddingBottom: 80,
      }}>
        <Container>
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
    </>
  )
}
