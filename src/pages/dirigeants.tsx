import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'

import SEO from 'components/SEO'
import Colors from 'utils/colors'
import Footer from 'components/Footer'
// import Button from 'components/Button'
import TransparentNavBar from 'components/TransparentNavBar'
import TitleWithSubText from 'components/TitleWithSubText'
import Donate from 'components/Donate'
import Container from 'components/Container'

const title = "Nos Dirigeants"

const dirigeants = [
  {
    name: "Jerry Tardieu",
    image: "jerry.jpeg",
    role: "Coordonnateur Général",
    bio: `
    <p>Entrepreneur, écrivain et ancien parlementaire</p>
    <p>Jerry Tardieu est né en Haïti le 13 Juillet 1967. Il a fait toutes ses études primaires et secondaires à Saint-Louis de Gonzague. Il est détenteur d’une Maîtrise en Administration Publique de l’Université de Harvard avec une spécialisation en macroéconomie. Ancien Vice-président de la Chambre de Commerce et d’Industrie d’Haïti, il est un entrepreneur profondément engagé dans la vie économique, sociale, académique et associative de son pays. Il a publié de nombreux ouvrages. En 2015, il se lance en politique et est élu député de Pétion-ville par un score historique, obtenant le plus grand nombre de voix de toutes ces élections à l’échelle nationale.</p>
    `
  },
  {
    name: "NANCY VILCÉ",
    image: "nancy.jpeg",
    role: "Coordonnateur-adjoint chargé des projets sociaux",
    bio: `
    <p>Nancy Vilcé est une leader de la commune de Pétion-ville et une animatrice sociale très connue des milieux défavorisés de la capitale. De 2004 à 2014, elle a été administratrice d’une importante organisation militant dans le social et l’humanitaire : la APROSIFA qui est venue en aide à des milliers de pauvres vivant dans des conditions abjectes.</p>
    <p>Elue membre du Conseil d’Administration Section Communale CASEC de première montagne noire de 2005 à 2015, elle est une militante politique engagée, dynamique, populaire, respectée pour son combat pour la reconnaissance des droits de la femme, la justice sociale et l’économie solidaire. Elle est Présidente de l’Association des femmes dévouées de Thomassin (AFADETH) qui regroupe près de 3000 femmes d’origine paysannes de la commune de Thomassin. Nancy Vilcé est également membre de l’association des notables de Thomassin, une puissante fédération regroupant les personnalités les plus influentes de cette section communale (pasteurs, prêtres, professeurs, syndicalistes, enseignants, animateurs sociaux, agriculteurs, commerçants et autres cadres de l’état).</p>
    <p>Mme Vilcé a été le chef de campagne du candidat à la députation Jerry Tardieu et Responsable en chef de la permanence du député de Pétion-ville durant son mandat au parlement. Elle a été le fer de lance de la campagne au sénat victorieuse du candidat Patrice Dumont. Elle a également fait partie de l’équipe de campagne victorieuse du Sénateur Steven Benoit. Ses études à la Jamaica School of Business et au Centre d’apprentissage Informatique ont développé chez elle un intérêt et une compétence avérée dans les secteurs de la Comptabilité et la gestion financière. Son leadership lui a valu d’être retenu pour un séminaire en leadership au leadership Institute d’Arlington, Virginia en 2014. Croyante et dévouée à la cause de son église, elle est également une figure de proue de la communauté baptiste ou elle joue un rôle de premier plan.</p>
    `
  },
  {
    name: "STEPHANE VINCENT",
    image: "stephane.jpeg",
    role: "Coordonnateur-adjoint chargé de la stratégie numérique",
    bio: `
    <p>Entrepreneur, Juriste et Spécialiste en E-gouvernance</p>
    <p>Originaire de Maniche, Vincent est un jeune technicien haïtien très connu dans le milieu des nouvelles technologies de l’information et de la communication. Âgé de 25 ans, ce jeune leader a fait toutes ses études à Saint-Louis de Gonzague. En 2014, fraichement diplômé de NY University en Sciences Politiques et Communication Digitale, il devient le directeur de la section technologie du Consulat Général d’Haïti à NY. Il quittera cette fonction pour assurer celle de Coordonnateur de l’Unité e-Gouvernance de la Primature en tant que chef d’un projet financé par la Banque Interaméricaine de Développement. Il a également été Chargé de Partenariats à OpenGouv Haïti première plateforme de données ouvertes en Haïti. Spécialiste des plateformes numériques en ligne, Stéphane Vincent est considéré comme un « influencer » sur la toile. Il est rédacteur en chef du journal en ligne La République et consultant indépendant en Marketing digital et gestion de réputation. Ce jeune professionnel des NTIC est promis à un bel avenir au sein de la société civile haïtienne ou il milite activement au sein de certaines organisations dont Jeunesse Verte Haïtienne une organisation visant à éduquer la jeunesse par des projets environnementaux et citoyens.</p>
    `
  },
]



export default function Dirigeants() {
  const [openDialog, setOpenDialog] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogText, setDialogText] = useState('')

  const handleOpenDialog = ({ name, bio }) => {
    setDialogTitle(name)
    setDialogText(bio)
    setOpenDialog(true)
  }

  const handleDialogClose = () => {
    setOpenDialog(false)
  }

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
            paddingBottom: 20
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
        <Container>
          <TitleWithSubText
            title={title}
            subText={`Le mouvement En Avant est dirigé par une coordination formée de
            personnalités de différents secteurs <br /> qui sont profondément engagés dans
            le combat pour une nouvelle Haïti.`}
          />

          <Grid container spacing={3}>
            {dirigeants.map((dirigeant, index) => (
              <Grid item md={4} sm={12} key={index}>
                <div style={{ cursor: "pointer" }} onClick={(e) => handleOpenDialog(dirigeant)}>
                  <img
                    style={{ display: "block", maxWidth: "100%" }}
                    src={`/assets/images/dirigeants/${dirigeant.image}`}
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
                    }}>{dirigeant.name}</h4>
                    <h5 style={{
                      fontSize: 10,
                      color: Colors.gray,
                      marginBottom: 12
                    }}>{dirigeant.role}</h5>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
          <Dialog onClose={handleDialogClose} aria-labelledby="simple-dialog-title" open={openDialog}>
            <DialogTitle
              id="simple-dialog-title"
              style={{ textTransform: "uppercase" }}
            >Biographie de “{dialogTitle}”</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <div dangerouslySetInnerHTML={{ __html: dialogText }} />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose} color="primary">
                Fermer
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </section>
      <Footer />
    </>
  )
}
