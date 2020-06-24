import { Container, Row, Col, Image } from 'react-bootstrap'

import SEO from 'components/SEO'
import Colors from 'utils/colors'
import Footer from 'components/Footer'
import TitleWithSubText from 'components/TitleWithSubText'
import NavBar from 'components/NavBar'
import Logo from 'components/Logo'
import Button from 'components/Button'

const combats = [
  {
    header: `LE COMBAT POUR  Un état fort à visage humain`,
    text: `
      <p>Un État fort, moderne, efficace, socialement responsable, transparent et au service du citoyen. Un État créateur de richesse pour tous par le travail et le rendement. Un État démocratique respectant les droits civils et politiques. Un État fondé sur les valeurs morales et l’éthique.  Un État unitaire, sans parti pris.  Un État prônant une justice équitable et accessible à tous. Un État imposant le respect de l’intégrité de son territoire.  Un État assurant la sécurité des vies et des biens de chaque citoyen. Un État priorisant l’excellence.  Un État respectant les valeurs individuelles. Un État assurant le minimum de bien-être à sa population (santé, éducation, logement, etc.). Un État dictant les règles du jeu et jouant son rôle d’arbitre pour créer un environnement propice à l’investissement privé massif créateur d’emplois.</p>
    `
  },
  {
    header: `LE COMBAT POUR Une économie créatrice d’emplois `,
    text: `
      <p>Une économie forte dont la croissance inclusive est tirée par des milliers de petites, moyenne et micro entreprises qui bénéficient d’accès privilégié au crédit. L’objectif recherché est une révolution de la croissance par la dynamisation des « secteurs déclencheurs » que sont, en autres, l'agriculture et l’agro-industrie, l'élevage et la pêche, l'énergie et les infrastructures, le tourisme, l'industrie légère (Petite et Moyenne Industrie - PMI), la construction et le logement.</p>
      <p>La pression fiscale aujourd’hui est moins de 10%. Elle doit doubler en moins de 5 ans. EN AVANT encourage la transparence, la reddition de comptes et la lutte contre la corruption sous toutes ses formes. EN AVANT prône autant de marchés que possible mais autant d’État que nécessaire.</p>

    `
  },
  {
    header: `LE COMBAT POUR La Justice sociale et les solidarités`,
    text: `
      <p>Des services sociaux de base pour tous incluant l'éducation, la formation professionnelle, la santé, l'eau potable, la protection sociale. Notre société est traversée par des rapports d’exploitation. Il faut en finir. Le plus grand nombre vit dans la misère. Nous voulons une répartition plus juste de richesses à l’échelle nationale. Mais, vouloir la justice sociale ne se réduit pas à une meilleure redistribution des richesses. Il ne peut y avoir de République sans la certitude pour tous de jouir des droits fondamentaux : se loger, se nourrir, travailler, se cultiver, se soigner, s’éduquer et vivre en sécurité.  Au moins 90% de la population doit avoir un emploi.</p>

      <p>Nous devons sortir des sentiers battus pour réussir un projet original et ambitieux. Toute la philosophie du mouvement tourne autour du *bien-être de l’Homme Haïtien* et de la *transformation radicale du pays* par les haïtiennes et haïtiens eux-mêmes. Chacun d’entre nous mérite d’avoir un travail, un logement décent, et jouir d’une éducation, de l’accès aux soins de santé. Le mouvement veut créer les conditions pour favoriser la créativité de chaque haïtien en qui sommeille un producteur, créateur ou entrepreneur. A fortiori, notre mouvement entend *Sécuriser les investisseurs* et les investissements pour faciliter la création d’emplois. Parmi les thèmes d’intérêt public prioritaires,  notons la modernisation du système financier, la création de la bourse pour encourager les investissements directs dans les entreprises ,le transport public dans les grandes villes, le développement d’Industrie de la pêche, le reboisement, la création de mimi parcs industriels  pour favoriser l’éclosion des industries spécialisées en région, la création de grandes fermes agricoles à partir du principe de la mise en commun des terres agricoles sur la base de partenariats gagnants entre agriculteurs, paysans, et propriétaires terriens.</p>
    `
  },
  {
    header: `LE COMBAT POUR La diaspora`,
    text: `
      <p>Des services sociaux de base pour tous incluant l'éducation, la formation professionnelle, la santé, l'eau potable, la protection sociale. Notre société est traversée par des rapports d’exploitation. Il faut en finir. Le plus grand nombre vit dans la misère. Nous voulons une répartition plus juste de richesses à l’échelle nationale. Mais, vouloir la justice sociale ne se réduit pas à une meilleure redistribution des richesses. Il ne peut y avoir de République sans la certitude pour tous de jouir des droits fondamentaux : se loger, se nourrir, travailler, se cultiver, se soigner, s’éduquer et vivre en sécurité.  Au moins 90% de la population doit avoir un emploi.</p>

      <p>Nous devons sortir des sentiers battus pour réussir un projet original et ambitieux. Toute la philosophie du mouvement tourne autour du *bien-être de l’Homme Haïtien* et de la *transformation radicale du pays* par les haïtiennes et haïtiens eux-mêmes. Chacun d’entre nous mérite d’avoir un travail, un logement décent, et jouir d’une éducation, de l’accès aux soins de santé. Le mouvement veut créer les conditions pour favoriser la créativité de chaque haïtien en qui sommeille un producteur, créateur ou entrepreneur. A fortiori, notre mouvement entend *Sécuriser les investisseurs* et les investissements pour faciliter la création d’emplois. Parmi les thèmes d’intérêt public prioritaires,  notons la modernisation du système financier, la création de la bourse pour encourager les investissements directs dans les entreprises ,le transport public dans les grandes villes, le développement d’Industrie de la pêche, le reboisement, la création de mimi parcs industriels  pour favoriser l’éclosion des industries spécialisées en région, la création de grandes fermes agricoles à partir du principe de la mise en commun des terres agricoles sur la base de partenariats gagnants entre agriculteurs, paysans, et propriétaires terriens.</p>
    `
  },
  {
    header: `LE COMBAT POUR L’éducation`,
    text: `
     <p>Au niveau de l'éducation, nous allons militer pour quatre (4) Centres universitaires dans 4 villes du pays et deux écoles professionnelles de référence, qui offriront une formation universitaire et professionnelle de qualité. L’éducation, contre l’ignorance et tous les obscurantismes, est la clé de l’émancipation et de l’épanouissement de tous les haïtiens. Nous voulons une éducation humaniste, capable d’ouvrir pour chaque Haitien.ne des perspectives, de réussir une vie comblée. Nous travaillerons à la gratuité effective de l’enseignement primaire et secondaire pour tous. Nous créerons des programmes de prêts et bourses pour les étudiants/universitaires. Nous allons promouvoir une campagne d’alphabétisation pour réduire le taux d’analphabétisme à (chiffre à l’appui), en deux ans. Nous élaborerons des programmes d’éducation civique en vue de transformer le citoyen haïtien en un vrai agent de développement.</p>
    `
  },
  {
    header: `LE COMBAT POUR L'Égalité`,
    text: `
      <p>Les êtres humains sont égaux. Cette égalité est même le fondement premier de nos valeurs. De celle-ci découlent nos combats pour la démocratie, la justice sociale. Les différences ne fondent aucune hiérarchie dans les domaines politique, économique, social et culturel, dans ce qui relève de la « chose publique ». Il n’y a pas de liberté sans égalité et la liberté de chacun est conditionnée à celle des autres. Le respect de la loi est impératif tant que sont préservés les principes d’égalité et de liberté. Notre mouvement s’inscrit dans la continuité du combat des pères de la patrie pour un pays démocratique, libre où il fait bon de vivre pour tous ses fils et filles.</p>
      <p>Nous avons accompli d’énormes progrès en ce qui a trait à l’égalité entre les hommes et les femmes. Toutefois, nous devons poursuivre ces efforts pour que cette égalité soit effective dans nos façons de faire. Nous mettrons en place des pratiques et politiques qui favoriseront une pleine participation des femmes dans les affaires politiques publiques.</p>

    `
  },
  {
    header: `LE COMBAT POUR La Démocratie`,
    text: `
      <p>L’égalité des droits et des devoirs, la fraternité, la liberté d’opinion et d’expression : voilà ce qui fonde la démocratie comme principe supérieur d’organisation sociale. La liberté de la presse et l’indépendance de la justice en sont notamment les garants. Dans le domaine des institutions, nous voulons une démocratie représentative, la séparation entre le pouvoir législatif et exécutif.  Nous refusons de croire que le destin de notre pays soit lié à l’émergence d’un messie providentiel. Notre projet est plus que jamais la démocratie jusqu’au bout et notre souverain demeure le peuple. Nous combattons pour l’application des conventions internationales du travail, pour garantir la liberté syndicale. Nous faisons de la création de richesses et des principes de justice sociale le socle de notre démocratie.</p>
    `
  },
  {
    header: `LE COMBAT POUR La sécurité`,
    text: `
      <p>Nous affirmons le droit inaliénable à la sûreté et la sécurité. La puissance publique doit organiser la protection des citoyens et citoyennes tout en garantissant nos droits et nos libertés fondamentales. Aucune ambition pour Haïti ne peut faire l’économie de la restauration de l’autorité de l’État, la démobilisation des gangs armées qui empoisonnent la vie des citoyens, la modernisation et le renforcement de la PNH et de l’armée d’Haïti.</p>
    `
  },
  {
    header: `LE COMBAT POUR L'environnement et aménagement du territoire`,
    text: `
      <p>L'environnement et aménagement du territoire qui incluent la gestion des bassins versants et la reforestation, la préservation des espèces endémiques et de la biodiversité, la gestion des ressources en eau, l'aménagement et la planification urbaine, l'établissement de pôles de développement, l’aménagement des zones d’habitat rurales, la réforme du foncier et l’inclusion des personnes vulnérables.</p>
    `
  },
  {
    header: `LE COMBAT POUR Culture`,
    text: `
      <p>Le mouvement milite pour une revalorisation de la culture haïtienne sur les aspects à travers une action basée sur le Social, l’économique et l’éducatif.</p>
      <p>Social : Faire de la culture un outil capable de rassembler la société, un véritable ciment entre toutes les couches sociales.</p>
      <p>Economique : Investir dans la culture comme un secteur porteur et créateur d’emploi à travers des industries culturelles et créatives.</p>
      <p>Educatif : Développer dans toutes les écoles une éducation artistique et culturelle permettant d’avoir un autre citoyen haïtien fier, cultivé et créatif.</p>
    `
  },
  {
    header: `LE COMBAT POUR un agenda législatif ambitieux `,
    text: `
      <p>Nous affirmons le droit inaliénable à la sûreté et la sécurité. La puissance publique doit organiser la protection des citoyens et citoyennes tout en garantissant nos droits et nos libertés fondamentales. Aucune ambition pour Haïti ne peut faire l’économie de la restauration de l’autorité de l’État, la démobilisation des gangs armées qui empoisonnent la vie des citoyens, la modernisation et le renforcement de la PNH et de l’armée d’Haïti.</p>
    `
  },
  {
    header: `LE COMBAT POUR jeunesse`,
    text: `
      <p>La pérennité d’une nation est assurée par l’évolution d’une jeunesse bien émancipée et épanouie ayant confiance dans son avenir. En ce sens, le mouvement EN AVANT compte faire des générations montantes l’un des piliers centraux dans son combat contre les inégalités économiques et sociales. Pour y parvenir, nous allons prendre toutes les mesures nécessaires à l’intégration réelle et effective de la jeunesse dans la société.</p>

      <p>En effet, nous sommes résolument convaincus qu’un système de protection fiable des droits fondamentaux de la jeunesse devra être mis en place. Ce système nous permettra de combattre surtout la domesticité (restavek), la délinquance juvénile et le détournement des mineurs(es). Notre État doit investir massivement dans des programmes susceptibles de développer les compétences et habilités des jeunes : Sport, culture, arts, crédits etc…Pour les jeunes en âge de travailler, des travaux à haute intensité de main d’œuvre doivent être créés. De plus, nous estimons urgent de réfléchir à une formule visant un minimum de service militaire obligatoire pour les jeunes âgés de dix-huit ans en vue de développer un sentiment patriotique et une citoyenneté commune.</p>
    `
  },
  {
    header: `LE COMBAT POUR une justice impartiale`,
    text: `
      <p>La justice se prête à de multiples finalités. Dans notre État moderne prôné, la justice comme institution satisfera convenablement aux exigences de veiller au respect des lois et garantir les droits de chacun. Ainsi, nous nous consacrons à réformer profondément notre système judiciaire pour l’effectivité d’une justice équitable et impartiale. Cette réforme implique une refonte de notre corpus juridique pour une bonne harmonisation entre le droit et la société. Nous encourageons des lois pour renforcer l’indépendance judiciaire, des lois pour consolider la sécurité financière et l’inamovibilité des juges, des codes de déontologie pour l’exercice de la profession du droit. Les organismes de défense des droits de la personne doivent être supportés pour continuer à être utiles au progrès de la société. Nous encouragerions la création de services d’aide juridique pour accompagner les justiciables à faible revenu. Nous sommes pour une fourniture des moyens adéquats pour une inspection judiciaire efficace. Le Mouvement EN AVANT entend travailler à favoriser l’éclosion d’une alternative au système judiciaire corrompu causant trop de torts au pays.</p>
    `
  },
]

interface TextBlockProps {
  header?: string
  text?: string
}

const TextBlock = ({ header, text }: TextBlockProps) => (
  <div style={{ marginBottom: 50 }}>
    {header && (
      <>
        <h4 style={{
          fontSize: 14,
          fontWeight: 'bold',
          color: Colors.veryDarkBlueText,
          textTransform: "uppercase"
        }}>{header}</h4>
        <div style={{
          borderBottom: `2px solid ${Colors.orange}`,
          width: 25,
          margin: "15px 0"
        }} />
      </>
    )}
    {text && (
      <div style={{
        fontSize: 12,
        color: Colors.gray,
        textAlign: "justify"
      }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    )}
  </div>
)

const title = "Nos Combats"

export default function Index() {
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
        backgroundImage: 'url(' + "/assets/images/organigramme-bg.png" + ')',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        minHeight: 220,
        paddingTop: 20,
        display: "flex",
        alignItems: "center"

      }}>
        <Container>
          <Row>
            <Col md={5}>
              <Logo
                transparent
                style={{
                  width: 250
                }}
              />
            </Col>

            <Col md={7}>
              <h1 style={{
                fontSize: 40,
                fontWeight: 'bold',
                color: 'white',
                textTransform: "uppercase",
              }}>Mouvement pour changer <br />Haïti ensemble</h1>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-container" style={{
        paddingBottom: 30
      }}>
        <Container style={{}}>
          <TitleWithSubText
            title={title}
            subText={`
              <p>Au sein du mouvement EN AVANT, nous sommes portés par le devoir de freiner la descente aux enfers d’Haïti. Face aux tensions de l’après pandémie coronavirus et aux mutations d’un monde troublé, face aux peurs et à l’ampleur de la tâche, nous voulons rassembler les bonnes consciences d’Haïti, sans exclusion, autour d’un idéal de justice au profit du plus grand nombre.</p>
              <p>Nous voulons être une force de propositions et des acteurs de premier rang. À terme, EN AVANT soutient l’idée de construire une grande alliance des forces de changement pour arriver à l’émergence d’une plateforme idéologique plus large. Nous sommes prêts à travailler avec tous les partis, toutes les forces vives et saines de la société civile, qui se retrouvent dans un projet de société basé sur (au moins) les piliers essentiels suivants.</p>
            `}
          />

          <Row>
            {combats.map(({ header, text }, index) => (
              <Col md={4} key={index}>
                <TextBlock
                  header={header}
                  text={text}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  )
}
