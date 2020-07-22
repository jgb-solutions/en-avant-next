import Button from 'react-bootstrap/Button'
import { FaPaperPlane } from 'react-icons/fa'
import Grid from '@material-ui/core/Grid'
import { Image, Carousel } from 'react-bootstrap'

import SEO from 'components/SEO'
import TransparentNavBar from 'components/TransparentNavBar'
import Footer from 'components/Footer'
import ArticleCard from 'components/ArticleCard'
import Colors from 'utils/colors'
import TitleWithSubText from 'components/TitleWithSubText'
import Donate from 'components/Donate'
import Container from 'components/Container'

export default function Index() {
  return (
    <>
      <SEO />
      <section className="section-container" style={{
        backgroundImage: 'url(' + "/assets/images/home-header.jpg" + ')',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        minHeight: 500,
        paddingTop: 20

      }}>
        <Container>
          <TransparentNavBar />

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

            <Donate style={{ marginTop: 200 }} />
          </div>
        </Container>
      </section>

      <section className="section-container" style={{
        paddingBottom: 30
      }}>
        <Container style={{ marginTop: -150 }}>
          <Grid container style={{
            boxShadow: "0px 5px 7px 0px rgba(0,0,0,0.35)"
          }}>
            <Grid item md={6} style={{
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
              }}>
                “D'aucuns pensent que le déclin continu de notre pays est inévitable
                et que le pire est à venir. Les fondateurs du mouvement <strong>« EN AVANT »</strong> osent
                prétendre autrement.”
              </p>

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
            </Grid>
            <Grid md={6}>
              <Carousel interval={3000}>
                {[1, 2, 3, 4, 6].map((number) => (
                  <Carousel.Item key={number}>
                    <img
                      className="d-block w-100"
                      src={`/assets/images/home-slides/${number}.jpg`}
                    // alt="First slide"
                    />
                    {/* <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                  </Carousel.Item>
                ))}
              </Carousel>
            </Grid>
          </Grid>

          <TitleWithSubText title="Actualités" />

          <Grid container spacing={3}>
            {[1, 2, 3].map((number) => (
              <Grid item md={4} key={number}>
                <ArticleCard />
              </Grid>
            ))}
          </Grid>
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
          <Grid container>
            <Grid item md={5} style={{}}>
              <h2 style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: Colors.blue,
                textTransform: "uppercase",
              }}>Nous comptons sur votre <br /> <span style={{ color: Colors.orange }}>soutien</span></h2>

              <p style={{ color: Colors.gray }}>Faites un don pour renforcer notre action sur le terrain.</p>

              <Donate />
            </Grid>
            <Grid item md={7} style={{}}>
              <Grid container>
                <Grid item sm={6} style={{ marginBottom: 60 }}>
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
                </Grid>
                <Grid item sm={6} >
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

                    }}>Nos Digigeants</span>
                  </h4>
                  <p style={{
                    fontSize: 12
                  }}>
                    Lorem ipsum dolor sit amet, conset adou adipisicing elit, sed do eiusm temporaryl incididunt ugt labore.
                  </p>
                </Grid>
                <Grid item sm={6} >
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

                    }}>Nos Combats</span>
                  </h4>
                  <p style={{
                    fontSize: 12
                  }}>
                    Lorem ipsum dolor sit amet, conset adou adipisicing elit, sed do eiusm temporaryl incididunt ugt labore.
                  </p>
                </Grid>
                <Grid item sm={6} >
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

                    }}>Notre Organigramme</span>
                  </h4>
                  <p style={{
                    fontSize: 12
                  }}>
                    Lorem ipsum dolor sit amet, conset adou adipisicing elit, sed do eiusm temporaryl incididunt ugt labore.
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
      <Footer />
    </>
  )
}
