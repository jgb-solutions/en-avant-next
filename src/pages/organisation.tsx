import Grid from '@material-ui/core/Grid'

import SEO from 'components/SEO'
import Colors from 'utils/colors'
import Footer from 'components/Footer'
import TitleWithSubText from 'components/TitleWithSubText'
import NavBar from 'components/NavBar'
import Logo from 'components/Logo'
import Button from 'components/Button'
import { CSSProperties } from 'react'
import Container from 'components/Container'

const responsables = [
  `Coordonnateur National  <br /> JERRY TARDIEU`,
  `Coordonnateur-adjoint  affaires féminines & social <br /> NANCY VILCÉ`,
  `Coordonnateur-adjoint chargé de mobilisation <br /> MIKERLANGE REGISTRE`,
  `Coordonnateur-adjoint chargé branches extérieur <br /> SAINT-JEAN JOSEPH`,
  `Coordonnateur-adjoint aux aff admin financières <br /> HERALD MORISSEAU`,
  `Coordonnateur-adjoint aux rel publiques <br /> GEORGES DUPERVAL`,
  `Coordonnateur-adjoint Chargée communication <br /> ROOSEVELT VERDIEU`,
  `Coordonnateur-adj chargé strat numérique <br /> STEPHANE VINCENT`,
  `Coordonnateur-adjoint chargé jeunesse <br /> RYSDAEL DUVERSAINT`,
  `Coordonnateur-adjoint chargé culture <br /> ALLENBY AUGUSTIN`,
  `Coordon-adjoint chargé relations internationales <br /> ING PATRICK FIGARO`,
  `Coordo-adjoint chargé sections communales <br /> FRITZBERT SILENCIEUX`,
  `coordonateur adjoint chargé relations avec univ <br /> EMOL JEUNE`,
  `Coordonateur-adjoint chargé insertion sociale <br /> GLADYS JOSEPH`,
  `Coordo-adjoint chargé rel avec école <br /> DARAH SINVILLE`,
  `Coordonnateur-adjoint chargé projets sociaux <br /> DR JOHANNE GEFFRARD`,
  `Membre <br />Coordonnateur-adjoint aux affaires politiques`,
  `Membre <br /> Sterens Hyppolite`,
  `Membre <br /> Pierre Ludghini`,
  `Membre <br /> Guett St Thomas`,
  `Membre <br /> Judmyr Similien`,
  `Membre <br /> Luckner Clermont`,
  `Membre <br /> Jefferson Merisier`,
]
interface PersonWithTextProps {
  title?: string,
  titleStyle?: CSSProperties,
  containerStyle?: CSSProperties
}

const PersonWithText = ({ title, titleStyle, containerStyle }: PersonWithTextProps) => (
  <div style={{
    textAlign: "center",
    ...containerStyle
  }
  } >
    <img
      src="/assets/images/person.png"
      style={{
        width: 40,
        display: "inline-block",
        marginBottom: 15
      }}
    />
    <h4 style={{
      fontSize: 16,
      fontWeight: "bold",
      color: Colors.darkerBlueText,
      textTransform: "uppercase",
      ...titleStyle
    }}>{title}</h4>
  </div>
)

interface VerticalBorderProps {
  color?: string,
  height?: number,
  width?: number,
  style?: CSSProperties
}

const VerticalBorder = ({ color, height, width, style }: VerticalBorderProps) => (
  <div style={{
    margin: "0 auto",
    width: width || 1,
    borderRight: `1px solid ${color || Colors.orange}`,
    height: height || 30,
    ...style
  }} />
)

const title = "Notre Organisation"

export default function Organisation() {
  return (
    <>
      <SEO title={title} />

      <section className="section-container" style={{
        paddingTop: 20,
        paddingBottom: 15
      }}>
        <Container>
          <NavBar style={{
            // color: Colors.orange,
            paddingLeft: 0,
            paddingRight: 0,
          }}
            showButtons
          />
        </Container>
      </section>
      <section className="section-container" style={{
        backgroundImage: 'url(' + "/assets/images/organisation-bg.png" + ')',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        minHeight: 220,
        paddingTop: 20,
        display: "flex",
        alignItems: "center"

      }}>
        <Container>
          <Grid container>
            <Grid item md={5}>
              <Logo
                transparent
                style={{
                  width: 250
                }}
              />
            </Grid>

            <Grid item md={7}>
              <h1 style={{
                fontSize: 40,
                fontWeight: 'bold',
                color: 'white',
                textTransform: "uppercase",
              }}>Mouvement pour changer <br />Haïti ensemble</h1>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="section-container" style={{
        paddingBottom: 30
      }}>
        <Container style={{}}>
          <TitleWithSubText containerStyle={{
            marginBottom: 30
          }}
            title={title}
          />
          <TitleWithSubText
            containerStyle={{
              marginTop: 0
            }}
            titleStyle={{
              fontSize: 22,
              fontWeight: "bold",
              color: Colors.blue
            }}
            title="Les organes dirigeants du mouvement"
          />

          {/* <div style={{
            width: "80%",
            margin: "0 auto",
            border: `1px solid ${Colors.orange}`,
            borderBottom: 0,
            display: "flex",
            justifyContent: "center"
          }}>
            <VerticalBorder />
          </div>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 55px",
            marginBottom: 30
          }}>
            {[1, 2, 3].map(key => (
              <div key={key} style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}>
                <div style={{
                  width: 100,
                  height: 100,
                  borderRadius: 15,
                  backgroundColor: Colors.darkerBlue,
                  marginBottom: 20
                }}
                />

                <h4 style={{
                  fontSize: 16,
                  textTransform: "capitalize",
                  color: Colors.darkerBlue
                }}>
                  La convention <br /> nationale (CN)
                </h4>
              </div>
            ))}
          </div> */}

          <p style={{
            textAlign: "center",
            fontSize: 12,
            color: Colors.gray
          }}>
            La Convention Nationale (ou CN) est l’autorité suprême qui décide sur toutes les questions relatives à l’orientation générale et aux activités du mouvement.<br />
            La convention nationale comprend l’ensemble des délégués choisis au niveau national par les branches départementales et au niveau de la diaspora <br />
            Le CEN assure le bon fonctionnement de la plateforme et veille à l’application des grandes orientations politiques, sociales et économiques élaborées par la CN.
          </p>

          <TitleWithSubText
            title="Le Comité Exécutif National ou CEN est composé de membres <br />élus par la Convention Nationale"
            titleStyle={{
              fontSize: 20,
              fontWeight: "bold",
              color: Colors.darkerBlueText
            }}
          />
          {/*
          <div style={{ marginBottom: 30 }}>
            <PersonWithText
              title="Un coordonnateur Général"
              titleStyle={{}}
            />

            <VerticalBorder
              style={{
                marginBottom: 10
              }}
            />

            <PersonWithText
              title="Un coordonnateur Général adjoint"
            />
          </div> */}

          <div style={{
            width: "90%",
            margin: "0 auto",
            border: `1px solid ${Colors.orange}`,
            borderBottom: 0,
            display: "flex",
            justifyContent: "center"
          }}>
            <VerticalBorder height={50} />
          </div>
          <Grid container>
            {responsables.map((text, key) => (
              <Grid item key={key} md={4} style={{ marginBottom: 60 }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative"
                }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 100,
                    width: 100,
                    backgroundColor: Colors.orange,
                    borderRadius: "50%",
                    position: "absolute",
                    border: `5px solid ${Colors.white}`
                  }}>
                    <img
                      src="/assets/images/person-white.png"
                      style={{
                        width: 50,
                      }}
                    />
                  </div>
                  <div style={{
                    flex: 1,
                    fontSize: 12,
                    padding: 15,
                    backgroundColor: Colors.lightGray,
                    color: Colors.darkerBlueText,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    borderTopRightRadius: 30,
                    borderBottomRightRadius: 30,
                    marginLeft: 50,
                    paddingLeft: 60
                  }} dangerouslySetInnerHTML={{ __html: text }}
                  />
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      <Footer />
    </>
  )
}
