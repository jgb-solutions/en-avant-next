import Grid from '@material-ui/core/Grid'

import SEO from 'components/SEO'
import Colors from 'utils/colors'
import Logo from 'components/Logo'
import NavBar from 'components/NavBar'
import Footer from 'components/Footer'
import Container from 'components/Container'
import TitleWithSubText from 'components/TitleWithSubText'
import { useStyles } from 'pages'

const title = "Notre Mouvement"

export default function Mouvement() {
  const styles = useStyles()

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
        backgroundImage: 'url(' + "/assets/images/about-header-bg.png" + ')',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        minHeight: 220,
        paddingTop: 20,
        display: "flex",
        alignItems: "center"

      }}>
        <Container style={{ flex: 1 }}>
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
              <h1 className={styles.firstTitle}>Mouvement pour changer <br />Haïti ensemble</h1>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className="section-container" style={{
        paddingBottom: 30
      }}>
        <Container>
          <TitleWithSubText
            title={title}
            subTextStyle={{ fontSize: 16 }}
            subText={`<p>“D'aucuns pensent que le déclin continu de notre pays est inévitable et que le pire est à venir. Les fondateurs du mouvement « EN AVANT » osent prétendre autrement. En effet, une prise en charge de la politique par un leadership collectif et visionnaire peut conduire Haïti sur la voie du progrès et du développement”.</p>`}
          />

          <TitleWithSubText
            titleStyle={{ color: Colors.darkerBlueText }}
            subTextStyle={{ fontSize: 16 }}
            title="PRÉAMBULE"

            subText={`
              <p>Haïti connaît aujourd’hui une crise multiforme qui affecte toutes les sphères de la société.
                Face à la gravité de cette crise, il faut désormais un sursaut national et un renouvellement
                de la classe dirigeante pour redresser la barque nationale. Le changement en Haïti passe par
                la prise du pouvoir par une nouvelle équipe prête à adopter les réformes, et imposer les
                politiques publiques adéquates pour RESTAURER L’AUTORITÉ DE L’ÉTAT.
              </p>
              <p>L’heure est venue pour la couche saine et progressiste du pays de s’organiser véritablement
                à occuper les espaces des pouvoirs publics en vue de l’émergence d’une Haïti meilleure pour tous.
              </p>
              <p>Quelles solutions ? D’abord une prise de conscience et ensuite un engagement ferme. Face à la
                dégradation des institutions et de la gouvernance, il faut un rassemblement des personnalités
                et des forces de progrès pour construire une offre politique alternative et inclusive. C’est
                ce qui a motivé un ensemble d’organisations sociales et citoyennes, de personnalités et des
                leaders de différents secteurs à se rassembler au sein du MOUVEMENT EN AVANT.
              </p>
              <p>Nous sommes les héritiers(ères) d’un long combat. Il n'est pas d'ordre établi d'injustices et
                de misères qu'on ne puisse éradiquer. Cet idéal est celui des combattants de 1804,
                de 1844 ; de 1934 ; de 1946, de 1987. Plus de deux siècles après l’indépendance, notre résolution
                demeure intacte. Tant de gens aimeraient participer à une grande œuvre de construction nationale
                mais ne voient comment le faire. Tant de gens veulent rompre avec le fatalisme, la résignation,
                l’autoflagellation et les aveux d’impuissance.  Le MOUVEMENT EN AVANT entend offrir à cette majorité
                silencieuse un espace d’expression et de militance, une raison d’espérer, un moyen d’agir pour CHANGER
                positivement les choses.</p><p>Un grand désordre généralisé caractérise le fonctionnement de l’État.
                Il faut remettre de l’ordre ! De l’ordre dans notre système judiciaire, dans nos finances publiques,
                dans le fonctionnement de nos institutions, dans notre système éducatif, dans notre système financier,
                dans notre système de sécurité sociale, dans notre police nationale, dans notre diplomatie…. Remettre
                de l’ordre dans la République doit être un objectif majeur de la décennie qui s’ouvre. Mais, il ne peut
                y avoir de République sans la certitude pour tous de jouir des droits fondamentaux : se loger, se nourrir,
                 travailler, se cultiver, se soigner, s’éduquer et vivre en sécurité.   Nous devons ensemble bâtir un pays
                 à la hauteur des rêves de toutes les Haïtiennes et haïtiens. Un pays où plus de 90% de la population a un
                 emploi, qui atteint l’autosuffisance alimentaire, entre autres. Mais cela exige une transformation profonde
                  d’Haïti. Pour le MOUVEMENT EN AVANT, cela suppose un chantier organisé autour de PLUSIEURS piliers.
              </p><p>Un mouvement centriste axé sur le progrès et la justice sociale Le mouvement En avant veut rassembler
                 les citoyennes et citoyens quel que soit leur affinité idéologique (de gauche ou de droite). Autant de marché
                  que possible mais autant d’état que nécessaire. LE MOUVEMENT prône le progrès par la création des richesses
                  et la justice sociale. La pauvreté est la conséquence de nos choix et de nos politiques publiques qui créent
                  des fossés immenses entre les pauvres et les riches. Nous devons réduire ce fossé en créant un maximum de richesses,
                  que l’État se doit de redistribuer pour améliorer les conditions de vie de la majorité de la population. Le Mouvement
                  en en AVANT est promoteur de justice sociale, du respect des droits humains, de l’intégration de la
                </p>`}
          />
        </Container>
      </section>
      <Footer />
    </>
  )
}
