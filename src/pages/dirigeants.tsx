import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import { makeStyles } from "@material-ui/core/styles"

import SEO from 'components/SEO'
import Colors from 'utils/colors'
import Footer from 'components/Footer'
// import Button from 'components/Button'
import TransparentNavBar from 'components/TransparentNavBar'
import TitleWithSubText from 'components/TitleWithSubText'
import Donate from 'components/Donate'
import Container from 'components/Container'
import { useStyles } from 'pages'
import Join from 'components/Join'

const title = "Nos Dirigeants"

export const dirigeants = [
  {
    featured: true,
    name: "Jerry Tardieu",
    image: "jerry.jpeg",
    role: "Coordonnateur Général",
    bio: `
    <p>Entrepreneur, écrivain et ancien parlementaire</p>
    <p>Jerry Tardieu est né en Haïti le 13 Juillet 1967. Il a fait toutes ses études primaires et secondaires à Saint-Louis de Gonzague. Il est détenteur d’une Maîtrise en Administration Publique de l’Université de Harvard avec une spécialisation en macroéconomie. Ancien Vice-président de la Chambre de Commerce et d’Industrie d’Haïti, il est un entrepreneur profondément engagé dans la vie économique, sociale, académique et associative de son pays. Il a publié de nombreux ouvrages. En 2015, il se lance en politique et est élu député de Pétion-ville par un score historique, obtenant le plus grand nombre de voix de toutes ces élections à l’échelle nationale.</p>
    `
  },
  {
    featured: true,
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
    featured: true,
    name: "STEPHANE VINCENT",
    image: "stephane.jpeg",
    role: "Coordonnateur-adjoint chargé de la stratégie numérique",
    bio: `
    <p>Entrepreneur, Juriste et Spécialiste en E-gouvernance</p>
    <p>Originaire de Maniche, Vincent est un jeune technicien haïtien très connu dans le milieu des nouvelles technologies de l’information et de la communication. Âgé de 25 ans, ce jeune leader a fait toutes ses études à Saint-Louis de Gonzague. En 2014, fraichement diplômé de NY University en Sciences Politiques et Communication Digitale, il devient le directeur de la section technologie du Consulat Général d’Haïti à NY. Il quittera cette fonction pour assurer celle de Coordonnateur de l’Unité e-Gouvernance de la Primature en tant que chef d’un projet financé par la Banque Interaméricaine de Développement. Il a également été Chargé de Partenariats à OpenGouv Haïti première plateforme de données ouvertes en Haïti. Spécialiste des plateformes numériques en ligne, Stéphane Vincent est considéré comme un « influencer » sur la toile. Il est rédacteur en chef du journal en ligne La République et consultant indépendant en Marketing digital et gestion de réputation. Ce jeune professionnel des NTIC est promis à un bel avenir au sein de la société civile haïtienne ou il milite activement au sein de certaines organisations dont Jeunesse Verte Haïtienne une organisation visant à éduquer la jeunesse par des projets environnementaux et citoyens.</p>
    `
  },
  {
    name: "GEORGES DUPERVAL",
    image: "georges.jpg",
    role: "Coordonnateur-adjoint aux relations publiques",
    bio: `
      <p>Entrepreneur, philanthrope et animateur social.</p>
      <p>Duperval est un entrepreneur profondément engagé dans la vie citoyenne et associative d’Haïti. Cet ancien de l’Institution Saint-Louis de Gonzague et du Collège Roger Anglade est propriétaire et gestionnaire du complexe IGUANA logé au haut du Canapé Vert. Georges Duperval est détenteur d’une licence en busines administration de State College of Old Westbury de New-York (1994) et de Computer Operations Sciences de Grumman Data System Institute de New-York (1988). Il est fondateur de « Baton jenès la » une association œuvrant dans le domaine du social et qui regroupe un nombre important de leaders universitaires, de leaders communautaires et de personnalités influentes dans les secteurs socio-professionnels du département de l’Ouest.</p>
    `
  },
  {
    name: "ING PATRICK FIGARO",
    image: "patrick.jpeg",
    role: "Coordonateur-adjoint chargé des relations internationales",
    bio: `
    <p>Né le 10 Aout 1966, l’ingénieur Patrick FIGARO est l’une des personnalités de références du secteur « Batiments et travaux publics et génie civile » d’Haïti. Diplômé de Wentworth Institute of Technology en 1994, son parcours exemplaire est jalonné de réalisations professionnelles de grande ampleur notamment la conception et construction d’immeubles imposants (hôtels, bureaux, complexe d’appartements, maisons privées). La firme Architecture Construction Technique dont il est le PDG demeure une des firmes de construction d’avant-garde d’Haïti avec des activités sur l’ensemble du territoire national.</p>
    `
  },
  {
    name: "RYSDAEL DUVERSAINT",
    image: "silhouette.jpg",
    role: "Coordonnateur-adjoint chargé de la jeunesse",
    bio: `
    <p>Leader universitaire, journaliste et leader politique régional (VERETTES).</p>
    <p>Rysdaël Clébert Duvelsaint est né le 04 août 1997. Étudiant finissant en Relations Internationales à l’ANDC et en Psychologie à l’Université d’Etat d’Haïti (UEH), il s’est révélé durant ces deux dernières années comme un leader et une voix autorisée parmi les étudiants de l’UEH. Il a été parmi les 10 lauréats nationaux en 2016, ce qui lui a valu d’être honoré par l’Etat haïtien dont il est un boursier d’excellence.</p>
    <p>Dévoué aux activités de l’esprit, citoyen universitaire conséquent et engagé, Rysdael Duversaint fais partie de plusieurs organisations de jeunes impliqué dans le social, la politique, les relations internationales. Duversaint est également Journaliste. IL collabore activement avec plusieurs médias haïtiens dont TripFoumi Enfo et Balistrad. Il est également présentateur et animateur d’une émission politique de grande écoute à la radio La Familia (Verrettes).</p>
    `
  },
  {
    name: "STANLEY LAFORTUNE",
    image: "silhouette.jpg",
    role: "Coordonnateur-adjoint à la planification stratégique",
    bio: `
    `
  },
  {
    name: "ROOSEVELT VERDIEU",
    image: "silhouette.jpg",
    role: "Coordonnateur-adjoint Chargée de la communication",
    bio: `
      <p>Roosevelt Verdieu ROSIER est une des meilleures têtes pensantes de la communauté haïtienne expatriée en Amérique du Nord. Militant passionné et citoyen engagé dans les grandes batailles de la jeunesse haïtienne après 1986 pour la démocratie, la décentralisation et la justice sociale, Rosier est un des plus fins connaisseurs de la scène politique haïtienne actuelle et des acteurs qui y évoluent.</p>
      <p>Originaire du Borgne où il est né un 28 juin 1974, ce brillant Juriste et diplomate de formation est un farouche défenseur des mouvements populaires, de la paysannerie, de l’intégration des masses et de la jeunesse estudiantine dans le processus de développement d’Haïti. Ses combats politiques ont toujours été marqués du sceau de la lutte contre l’exclusion et la pauvreté, l'autonomie de l’Université, Le respect de l’autodétermination des peuples et de la souveraineté nationale et populaire, L’inclusion sociale, La défense des droits humains des migrants, la défense sans restriction de la souveraineté de tout ordre : politique, économique, sociale, culturelle, territoriale, alimentaire, énergétique. Présentement, il se bat ardemment avec beaucoup de secteurs dans le Département du Nord et de la diaspora pour la reconquête de la fierté christophienne.</p>
      <p>Il a fait ses études classiques au Collège Notre Dame du Perpétuel Secours au Cap-Haïtien et a appris le droit à la Faculté de droit et de Sciences Économique de l’Université d'État d'Haiti, Port-au-Prince et à l'Université de Montréal (UdeM) au Canada. C’est à l’ Académie Nationale Diplomatique et Consulaire (ANDC) qu’il a fait ses études en diplomatie. Rosier a laissé son empreinte indélébile et un souvenir intarissable dans les institutions et mouvements où il a milité avec ferveur, conviction et engagement dont le Baton jenès la, L'Organisation pour l'Unité et l'Intégration (OUI), la Nouvelle Option pour le Renouveau et le Développement (NORD), l'Association Inter-scolaire pour la Défense de l'Environnement ( AIDE) et le Mouvement des Jeunes Étudiants/Universitaires (MOJEUNE).</p>
    `
  },
  {
    featured: true,
    name: "MIKERLANGE REGISTRE",
    image: "mikerlange.jpg",
    role: "Coordonnateur Général-adjoint",
    bio: `
      <p>Etudiant, animateur social et leader universitaire</p>
      <p>Mikerlange est Coordonnateur Général de la Coalition de la Jeunesse Haïtienne (CJH), une des plus importantes organisations étudiantes d’Haïti. Né le 3 mai 1995 à Carrefour, ce jeune ety dynamique leader universitaire est une figure connue du milieu académique. Brillant étudiant finissant en Administration (INAGHEI) et en Droit (FDSE), il est également très intéressé par le social et la militance politique pour que triomphe les idéaux de progrès et de justice social. En pleine crise du COVID, il a fait partie de nombreuses délégations d’étudiants volontaires qui se sont déplacé en province pour participer à des campagnes de sensibilisation de la population.</p>
      <p>Très doué en communication, il a suivi des cours sur la gouvernance publique à Cuba. C’est d’ailleurs sur ce thème de prédilection qu’il intervient régulièrement dans des conférences ou colloques Sur différents campus universitaires. Il est ancien Président du Cercle des Étudiants Nationalistes pour l'Avancement d'Haïti (CENAH) (2016) et Co-fondateur du Forum des Étudiants Haïtiens (FEH). Il est la cheville ouvrière du mouvement Opération 2025 et du projet Vision Haïti 2054</p>
    `
  },
  {
    name: "PHILIPPE SAINT-LOUIS",
    image: "silhouette.jpg",
    role: "Coordonnateur-adjoint chargé des questions culturelles",
    bio: `
      <p>Animateur culturel, leader de la société civile et Entrepreneur</p>
      <p>Né à Port-au-Prince, Philippe saint-Louis est une personnalité de référence dans le monde culturel, journalistique ainsi que dans le secteur loisirs et restauration. Très populaire sur les réseaux sociaux, il y anime avec succès des rencontres virtuelles de divertissement alliant la musique à la responsabilité citoyenne.</p>
      <p>Fondateur de MIZIKANOU, Philippe Saint-Louis est également un ardent défenseur de la musique haitienne dont il a fait la promotion toute sa vie. Apprécié des artistes, également peintre lui-même, il anime encore aujourd’hui sur la toile des émissions très populaires mettant en lumière le compas et son histoire. Cette passion n’Est pas nouvelle puisqu’il a été l'initiateur de l’émission Mardi Alternative qui commentait déjà l’actualité musicale haïtienne à l’époque en rassemblant des spécialistes en musique et autres mélomanes haïtiens... Philippe Saint-Louis est aussi le propriétaire du restaurant KAY PIPO. Ayant plus d’une corde à son arc, ce jeune artiste, entrepreneur, professionnel et penseur haitien s’est taillé une réputation d’intégrité, de modernité et de savoir-faire dans tous les secteurs d’activités où il milite.</p>
    `
  },
  {
    name: "EMOL JEUNE",
    image: "emol.jpg",
    role: "Coordonateur-adjoint chargé des relations avec les universités",
    bio: `
      <p>Emol Jeune est un leader de la jeunesse capoise, co-fondateur de l’association « Christophiens en marche ». Très actif sur les médias sociaux, ce regroupement de jeunes progressistes mène un combat pour la bonne gouvernance et la reddition de comptes. Proche des milieux universitaires, Emol Jeune organise régulièrement des conférences et tables rondes dans certains établissements académiques du Cap et de PAP. Il a fait ses Etudes classiques au Collège Le phare du Cap-Haitien et termine actuellement son diplôme en administration de l’Université Notre Dame d’Haïti.</p>
      <p>Il a été tour à tour Responsable des Ressources Humaines à l’agence de voyages Lapoula Metellus, Enquêteur pour le Ministère du Commerce et de l’industrie et le Ministère de l’éducation Nationale. Il est également le Coordonnateur du Salon Universitaire du Nord.</p>
      <p>Il est conseiller spécial du député de Pétion-ville pour tout ce qui touche aux relations avec l’université privée et public. Réservé et calme, il impose ses idées par la clarté de son argumentaire et sa grande sagesse.</p>
    `
  },
  {
    location: 'province',
    name: "PATRICK ETIENNE",
    image: "etienne.jpg",
    role: "Coordonnateur départemental pour le NORD-EST",
    bio: `
      <p>Patrick R. Etienne est un activiste social et politique evoluant à Ouanaminthe dans le département du Nord-Est. Jouissant d’une grande estime de la population du département, Il a créé la formation AKSAN, Aksyon Sivik Pou Avansman Nodes, une organisation communautaire forte de quatre cents membres dont les activités communautaires visent à former la jeunesse à plusieurs champs d’activités. Il est le fondateur de "Comedy Stars", un concours télévisé de talents pour jeunes comédiens, ainsi que «Deblozay Nan Bouk» une série publiée sur YouTube.</p>
      <p>Dans le département du Nord-Est, le Dr Etienne a mis en place un programme d'information sanitaire pour les organisations féminines et religieuses : Prévention et traitement des maladies infectieuses et de certaines maladies chroniques. Malgré son emploi du temps très chargé, il Anime «Kilti Lakay», une émission de radio hebdomadaire qui utilise la comédie pour aborder de nombreuses questions sensibles de notre culture haïtienne en général et de nos coutumes locales en particulier. Très impliqué dans les sections rurales du département de l’Est, il est diplômee en Psychiatrie / Santé comportementale communautaire, en Psychologie et en Science Politique. Du temps où il vivait à l’étranger, il a travaillé comme Spécialiste en santé comportementale communautaire et directeur des services médicaux et infirmier a Long Ridge of Stamford.</p>
    `
  },
  {
    location: 'province',
    name: "RYSDAEL DUVERSAINT",
    image: "silhouette.jpg",
    role: "Coordonnateur départemental pour le ARTIBONITE",
    bio: `
      <p>Leader universitaire, journaliste et leader politique régional (VERETTES)</p>
      <p>Rysdaël Clébert Duvelsaint est né le 04 août 1997. Étudiant finissant en Relations Internationales à l’ANDC et en Psychologie à l’Université d’Etat d’Haïti (UEH), il s’est révélé durant ces deux dernières années comme un leader et une voix autorisée parmi les étudiants de l’UEH. Il a été parmi les 10 lauréats nationaux en 2016, ce qui lui a valu d’être honoré par l’Etat haïtien dont il est un boursier d’excellence.</p>
      <p>Dévoué aux activités de l’esprit, citoyen universitaire conséquent et engagé, Rysdael Duversaint fais partie de plusieurs organisations de jeunes impliqué dans le social, la politique, les relations internationales. Duversaint est également Journaliste. IL collabore activement avec plusieurs médias haïtiens dont TripFoumi Enfo et Balistrad. Il est également présentateur et animateur d’une émission politique de grande écoute à la radio La Familia (Verrettes).</p>
    `
  },
  {
    name: "PASTEUR HOLLY",
    image: "holly.jpeg",
    role: "COORDONATEUR DEPARTEMENTAL OUEST",
    bio: `
      <p>Né à Leogane, Holy Florestal est un pasteur protestant très connu dans le département de l’Ouest (notamment Leogane et Fermathe) et dans le Nord (Ouanaminthe, Port Margot) ou il prêche dans de nombreuses églises faisant partie d’un impressionnant réseau évangélique opérant sur l’ensemble du territoire. Il a été un membre fondateur du Kolektif Abitan Petyonvil (KAP) et un artisan de la campagne victorieuse du député de Petion-Ville Jerry Tardieu. Tribun hors-pair, homme intègre et vertical, père de famille modèle, Holly Florestal est également un professionnel hors-pair dans le milieu de la construction et de l’ébénisterie. A côté de son service évangélique, le Pasteur Forestal s’intéresse aux questions sociales et politiques. Au sein de son réseau d’église, Il milite activement en faveur d’une intégration effective de la jeunesse instruite dans l’administration publique. Ses sermons sont suivis par des milliers de jeunes qui sont sensibles à ses conseils, son aura et sa sensibilité sociale.</p>
    `
  },
  {
    location: 'province',
    name: "RODNEY SAINTIL",
    image: "rodney.jpeg",
    role: "Un coordonnateur départemental pour le SUD-EST",
    bio: `
    `
  },
  {
    location: 'diaspora',
    name: "MARC-ANTOINE LEVEILLÉ",
    image: "marc-antoine.jpeg",
    role: "Un coordonnateur pour la branche extérieure des USA",
    bio: `
      <p>Jeune ingénieur émérite et brillant, Marc-Antoine Léveillé est une personnalité connue de la communauté haïtienne en Floride qui a brillé comme Chairman du « Haitian-American Association of Engineers & Scientists ». A ce poste, il s’est fait remarquer par son leadership, sa droiture, sa disponibilité pour ses membres dont de nombreux jeunes haïtiens faisant la fierté d’Haïti dans la sphère scientifique et environnementale mondiale.</p>
      <p>L’ingénieur Leveillé a fait ses études primaires et secondaires en Haïti chez les Frères de l'Instruction Chrétienne et le Collège Roger Anglade. Diplômé en génie industrielle à l’Université de Miami, détenteur d’un MS en système environnemental et urbain de FIU et d’un doctorat en Education de la NSU, Marc-Antoine Leveillé a travaillé dans le privé et le public comme ingénieur consultant et éducateur. Il a mis ses compétences au service de nombreux projets majeurs. Entre autres, il a été directeur du projet UNEPH-CORS, directeur logistique de Envirotech99 et volontaire à la FAVACA. Aux USA, il a collaboré à plusieurs nettoyages environnementaux majeurs, aux conférences de HALO, aux foires annuelles Techfair. Contributeur à des journaux électroniques scientifiques, mentor et modèle pour de nombreux jeunes de la diaspora, l’Ingénieur Leveillé a été Vice-Président du « Haitian-American Youth Organization».</p>
    `
  },
  {
    location: 'diaspora',
    name: "FLORENAL JOSEPH",
    image: "florenal.jpeg",
    role: "COORDONATEUR BRANCHE EXTERIEUR NEW YORK",
    bio: `
      <p>Florenal Joseph est l’une des personnalités les plus connues et appréciées de la communauté haïtienne de New-York. Intellectuel, chercheur, Professeur, Journaliste, citoyen engagé, leader communautaire, Florenal Joseph s’adonne a de multiples activités dans sa vie professionnelle et son engagement citoyen. Né à Saint-Michel de l’Attalaye, Haïti. Il a fait ses études primaires chez les Frère de l’Instruction Chrétienne à Saint-Michel de L’attalaye avant de se rendre à la capitale (PAP) pout y terminer ses études secondaires a l’Ecole Secondaire Louverture Cleary. Elève surdoué apprécié tant par ses pairs que ses professeurs et la direction de l’école, Florenal va se voir récompenser de son comportement exemplaire en étant nommé responsable de Discipline de son école le jour même de sa graduation. C’était le début d’une ascension fulgurante puisque Florenal va devenir en 2002, Directeur-adjoint de l’établissement et ensuite directeur a.i. en janvier 2004. Florenal Joseph est diplômé magna cum laude en agronomie de l’Universite Quisqueya”. Après ses études à l’UNIQ, il obtint un diplôme en journalisme de « Excel Institute of Journalism ».</p>
      <p>En 2004, Florenal émigre aux USA et s’inscrit à « Brooklyn College ». Il obtient successivement une licence (2008) et une maitrise en Biologie (2010). Chemin faisant, il devient assistant à la recherche au laboratoire du Dr Juergen Polle à Brooklyn College et obtient un Doctorat en biologie Moléculaire et cellulaire de SUNY Downstate Medical Center. Il est également professeur-adjoint de Biologie à « Brooklyn College ».</p>
      <p>Dr. Joseph est un chrétien profondément orienté vers les valeurs de famille et de justice sociale. Son engagement dans le social le porte à militer pour offrir des opportunités de carrière aux jeunes de la communauté haïtienne expatriée.</p>
      <p>Dans l’état de NY, Il organise également des forums d’information sur les questions d’immigration et d’autres thèmes d’intérêt public. Très attaché à son pays natal, Dr Joseph se donne pour mission d’éclairer les esprits et de jeter des éclairages sur Haïti à travers la presse et les médias sociaux. Observateur avisé de la vie nationale, homme d’équilibre à la parole mesurée, ses interventions sur les médias sont de haute facture et animent des débats sur la question haïtienne. Il milite activement pour une autre Haïti, un pays libéré de la corruption abjecte qui la gangrène et dotée d’une justice indépendante. C’est sur ces deux thèmes qu’il intervient régulièrement comme animateur de l’émission culte “Podium des Jeunes” sur radio Fierté Haïtienne, une des plus prisées par la communauté haïtienne de New York.</p>
    `
  },
  {
    location: 'diaspora',
    name: "FRED LAGRANDEUR",
    image: "silhouette.jpg",
    role: "Un coordonnateur pour la branche extérieure du CANADA",
    bio: `
      <p>Fred Lagrandeur, un jeune leader de la communauté haïtienne de Montréal, est apprécié pour son dynamisme, son courage, son entregent, son intégrité et son sens du bien public. De 2017 à 2019, il fut le présift de l'association des étudiants haïtiens de l'Université de Montréal (AEHUM). A ce titre, il s’attela sans relâche à connecter la jeunesse québécoise d’origine haïtienne à l’alma mater à travers différentes activités (sur et en dehors du campus). Homme de passion et déterminé à mener tous ses projets à bon port, le jeune président de l’AEHUM a pu convaincre plusieurs grandes personnalités du monde politique et de la société civile haïtienne à intervenir comme conférenciers à l’Université de Montréal.</p>
      <p>Ce brillant licencié en droit et en philosophie de l'Université d'État d'Haïti (UEH) poursuit actuellement une maîtrise en droit international à l'UdeM. Ses travaux de recherche portent sur le processus d'adoption internationale en Haïti. Au pays, il a d’ailleurs gardé de solides attaches dans les milieux universitaires, paysans et académiques.</p>
      <p>Passionné du droit des affaires, c'est dans ce domaine qu'il espère accomplir une carrière florissante. Toutefois, en marge de cette carrière professionnelle qui s’annonce prometteuse, l’engagement politique et citoyen de ce jeune leader tant pour Haïti que le Canada continuera de perdurer. Présentement, Lagrandeur travaille comme conseiller politique au gouvernement de Justin Trudeau. Encore une expérience exceptionnelle qui apportera à l’intéressé plus de know-how, d’expérience et de connaissance.</p>
    `
  },
  {
    location: 'diaspora',
    name: "EMMANNUELINE DUPERVAL",
    image: "silhouette.jpg",
    role: "COORDONATEUR BRANCHE EXTERIEUR PARIS",
    bio: `
      <p>Duperval Emmanueline est née en Haiti le 05 Janvier 1993. Elle est une étudiante en droit à Panthéon et en Philosophie à Paris VIII. Cette jeune leader appréciée et dynamique de la communauté Haïtienne et Française de Saint-Denis et à Pierrefitte est profondément engagée dans le politique et le social notamment aux cotés de l’ancien candidat à la présidence Monsieur HAMON Benoit et l’ancien Député de Saint-Denis Mathieu Hanotin aujourd’hui en tête de la course électorale pour la mairie de la commune de Saint-Denis.</p>
      <p>Elle a fait ses études primaires en Haïti à FILSECCAM puis l’Institution Mixte Étoile des chiffres. Elle faisait partie du conservatoire de Saint-Trinite (Haïti) de 2009 à 2013. Très attachée à sa terre natale, dès son arrive en France, elle milite activement dans les initiatives visant le développement d’Haïti et l’intégration de la diaspora. Très intéressée par la politique, elle suit de près l'actualité Haïtienne et internationale, et réfléchir sur les différents enjeux géopolitiques. Impliquée, rigoureuse, et volontaire, Elle a été aussi élue au Conseil Administration(CA) de l'Université Paris VIII VINCENNES SAINT-DENIS en 2016. Depuis 2017, elle milite au parti PS dont elle a été depuis toujours déléguée de classe. Elle reconnait souvent que son implication politique et sociale en France sont de nature a la preparer a un retour au pays natal. Elle est passionnée par l’art et la musique (violon, chant). Curieuse du monde et des autres, elle voyage souvent pour découvrir de nouvelles cultures.</p>
    `
  },
  {
    location: 'diaspora',
    name: "SAINT-JEAN JOSEPH",
    image: "saint-jean.jpeg",
    role: "Coordonnateur-adjoint chargé des branches exterieures",
    bio: `
      <p>Saint-Jean JOSEPH est un éminent Juriste en Droit du Travail et de la Protection Sociale Appliquée. Ingénieur et Consultant Informatique chez Capgemini (Délégué Syndical CFTC), il fait partie des personnalités haïtiennes les plus respectées au sein de la communauté haïtienne de France. Né en 1958 à Dessalines, il a fait ses études primaires à l’école Martin OGINE de Saint Marc, et ses études secondaires au Lycée Sténio Vincent de Saint Marc et au Collège Arountino PETIT CELIN. Ensuite il part en France pour poursuivre ses Etudes Universitaires. Militant Associatif actif au sein de la communauté haïtienne de France, il s’addonne egakeent a des etudes etr decroche un diplôme universitaire en Science du Langage et Communication (DEUG) à l’Université de Paris VIII, et en 1990 une licence Micro-Informatique Appliquée aux Sciences Humaines (MIASH) de l’Université de Paris VIII. Depuis 1999, il travaille en qualité d’Ingénieur Informatique. chez Capgemini, une Multinationale de plus de 270 Milles collaborateurs et un leader mondial en conseil, transformation numérique, et services technologiques et d’ingénierie. Il y consacre la grande majorité de son temps aux activités syndicales pour la défense et la protection des salariés au sein de la Société. Il participe au nom de son syndicat aux négociations des Accords Collectifs de l’entreprise (Santé et Qualité de vie au travail, les accords sur les salaires, etc..).</p>
      <p>Saint-Jean Joseph est Président de l’Association Franco Haïtienne pour le Développement de l’Artibonite (AFHDA). Homme aux compétences multiples, il porte plusieurs chapeaux à la fois. Il est en même temps Membre de l’Association Solidarités CHIV Haïti, membre de l’Observatoire du Conseil Représentatif de la Communauté Haïtienne de France. Saint-Jean Joseph incarne l’intégration réussie en France d’un jeune et talentueux intellectuel et penseur haïtien qui est resté autant attaché à son pays, son département (Artibonite) qu’a sa terre d’accueil.</p>
    `
  },
  {
    name: "HERALD MORISSEAU",
    image: "herald.jpg",
    role: "Coordonnateur-adjoint aux affaires administratives et financières",
    bio: `
    `
  },
  {
    location: 'province',
    name: "FRITZBERT SILENCIEUX",
    image: "fritzbert.jpeg",
    role: "Coordonateur-adjoint chargé des sections  communales",
    bio: `
    `
  },
  {
    name: "ANNE-SARHA LOZAMAR",
    image: "silhouette.jpg",
    role: "Coordonnateur-adjoint en charge des relations avec la presse",
    bio: `
    `
  },
  {
    name: "DR JOHANNE GEFFRARD",
    image: "joanne.jpg",
    role: "Coordonnatrice-adjoint aux affaires féminines",
    bio: `
    `
  },
  {
    name: "GLADYS JOSEPH",
    image: "silhouette.jpg",
    role: "Coordonnateur-adjoint chargée de L'insertion sociale",
    bio: `
    `
  },
  {
    name: "DARA SINVILLE",
    image: "silhouette.jpg",
    role: "Coordonateur-adjoint chargée des relations avec les écoles",
    bio: `
    `
  },
  {
    name: "MANUEL MOISE",
    image: "silhouette.jpg",
    role: "Membre",
    bio: `
    <p>Entrepreneur, ingénieur, citoyen engagée spécialiste des communautés rurales</p>
    <p>Manuel Moïse, est un entrepreneur, actionnaire et employé d’une compagnie de construction haïtienne depuis plus de 20 ans. Diplômé en Génie rural (MacDonald College of McGill University), il possède près de trente années d’expérience en Haïti dans le suivi et le contrôle des travaux, la gestion de projets, ainsi que la réalisation de travaux de Génie rural et Génie civil. M. Moïse connait bien « le pays en dehors » pour avoir participé professionnellement à de nombreux projets, mais aussi du fait qu’il cultive un intérêt marqué pour les communautés rurales d’Haïti, et pour les paysages enchanteurs de l’ile qui ne demande qu’à être constamment redécouvert. En plus de partir à la découverte des différents coins du pays, M. Moïse s’intéresse aux sciences en générale et plus particulièrement à l’astrophysique.</p>
    `
  },
  {
    location: 'province',
    name: "SONCEAU GAMAEL",
    image: "silhouette.jpg",
    role: "Coordonnateur départemental pour le NORD",
    bio: `
    `
  },
  {
    name: "Jefferson Merisier",
    image: "jefferson.jpg",
    role: "COORDONATEUR-ADJOINT CHARGE",
    bio: `
      <p>Jefferson Merisier est un jeune enseignant et leader du quartier de Gervais (section communale 3e Étang-du-Jong). Âgé de 41 ans, il est marié et père de 2 enfants. Normalien de formation, il travaille comme directeur de Projet au centre de développement d'enfants de Gervais depuis 10 ans. A ce titre, il a formé des centaines de jeunes chaque année, jeunes pour lequel il devient souvent un mentor dans la vie. Il a ainsi accompagné des milliers de jeunes en difficulté, les inculquant entre autres le sens des valeurs cardinales de la vie. Issu d’une famille évangélique, puisque fils d’un pasteur connu et apprécié de la capitale haïtienne, il a grandi dans la foi chrétienne et chérit toujours en lui les principes enseignées par la bible.</p>
      <p>Il a entamé sa brillante carrière d'enseignant en 2000 et dispose d’un vaste réseau de connaissance au niveau du système éducatif national. Personnalité aux multiples talents, Jefferson Merisier a également fait un passage remarqué dans le secteur de la presse notamment à INTERNEWS comme journaliste-reporter et enquêteur. Il a contribué au succès de l’émission "enfòmasyon nou dwe konnen!"</p>
    `
  },
  {
    name: "Allenby Augustin",
    image: "alenby.jpg",
    role: "Coordonateur-Adjoint en charges des questions culturelles",
    bio: `
    <p>Citoyen engagé, chercheur et Spécialiste en management d'organisations culturelles.<p>
    <p>Allenby Augustin est détenteur d’une maitrise en Management des Organisations Culturelles à l'université Paris-Dauphine. Il est Secrétaire Général de Akoustik Prod, une association culturelle très connue et respectée dans le milieu des arts et de la culture en Haiti. Ce spécialiste en management culturel a dédié sa vie à la promotion et la valorisation de la culture haïtienne tant en Haïti qu’a l’étranger. Né en 1983, il a grandi à Port-au-Prince et développé au cours des ans une passion pour les choses de l’esprit, du savoir et de la culture. En 2013, sous sa direction, Akoustik Prod lance à l’occasion des Journées du Patrimoine, le projet « Atis nan kay la ». Cet ambitieux projet offrait aux visiteurs étonnés et émerveillés un parcours artistique unique dans des maisons Gingerbread transformées en lieux d’accueil pour la performance de bandes à pied, la tenue d’expositions, de concerts, la déclamation de poésie. Le rêve d’Allenby Augustin est de faire inscrire la culture comme un élément fondamental d’une politique touristique visant à remettre Haïti sur la carte du tourisme mondial. Outre son intérêt marqué pour la culture, Allenby Augustin est également très engagé dans de nombreuses causes sociales et humanitaires. En 2016, il a développé dans les quartiers populaires de Port-au-Prince le projet "Nou Pran Lari a" un mouvement artistique et social, valorisant le travail des artistes et artisans des quartiers populaires.</p>
    `
  },
  {
    name: "Kharmeliaud Moise",
    image: "silhouette.jpg",
    role: "Coordonateur-géneral adjoint chargé de communication et image",
    bio: `
    <p>Kharmeliaud Moise est l’un des plus importants cinéastes haïtiens. Connu pour ses talents de parolier, d’acteur et de compteur, ce jeune réalisateur a fait des Études de communication sociale à ICORP puis à IFOCOM. Après un bref passage comme journaliste à Radio Galaxie, il abandonne le micro pour la camera et deviendra le président de l’association des cinéastes haïtiens. Son leadership au sein de cette association bénéficiera grandement le secteur cinématographique et culturel haïtien en général. Les talents multiples de Moise lui ont valu de créer différents produits audiovisuels de qualité (documentaire, long métrage, court métrage, vidéo clip, etc). Plusieurs entités ont bénéficié des talents et du travail de Kharmeliaud Moise dont le Groupe de recherches et d’Essais Cinématographique (GREC) de MARTINIQUE, la CIFAP à MONTREUIL (France), NL ACTING STUDIO (Floride), IFOCOM…. Il s’adonne également à la formation des nouvelles générations à ce noble métier d’avenir en Haïti. Sa formation à lui, il la tient de FÉMIS une Ecole Nationale supérieure de référence pour les métiers de l’image et du son basé à PARIS.</p>
    `
  },
  {
    name: "Jean David Geneste",
    image: "silhouette.jpg",
    role: "Coordonateur-géneral adjoint chargé de communication et image",
    bio: `
    <p>Professeur, entrepreneur, ancien Vice-Président de la Chambre des Députés.</p>
    <p>Originaire des Cayes, Geneste a été Député et vice-président de la 48ème législature. Professeur d’Histoire apprécié de la jeunesse des Cayes et de l’intelligentsia haïtienne, Jean-David Geneste est aujourd’hui encore un leader d’opinion influent et une personnalité de référence du département du Sud. Jean David Geneste a été également Secrétaire d’État à la formation professionnelle. Fin connaisseur de la politique haïtienne, Geneste s’est reconverti dans le privé depuis 2016. Il est propriétaire d’une petite auberge familiale et intervient régulièrement comme conférencier dans les conférences et tables rondes sur des thèmes variés (économie, histoire, politique, culture…). Le professeur Geneste est une belle figure de la société civile du Sud qui apporte son savoir à de nombreuses initiatives citoyennes tant en Haïti qu’en diaspora.</p>
    `
  },
  {
    name: "Tchedly Alexis",
    image: "silhouette.jpg",
    role: "",
    bio: `
    <p>Etudiant, jeune chercheur et animateur social et culturel.</p>
    <p>Né à Port-au-Prince le 4 septembre 2001, Alexis entame ses études universitaires en sciences juridiques à l’université Russe de l’Amitié des Peuples. Jeune micro entrepreneur, dynamique, Alexis est un passionné de journalisme, de lecture, de communication et de sciences politiques.</p>
    `
  },
  {
    name: "Patrick SAINT-LOUIS",
    image: "silhouette.jpg",
    role: "",
    bio: `
    <p>Ingénieur et observateur avisé de la politique haïtienne.</p>
    <p>Patrick Saint-Louis est un ingénieur professionnel de plus de 25 ans d’expérience dont l’expertise professionnelle et les compétences multiples ont bénéficié les plus importantes firmes internationales et des projets majeurs notamment au Canada. Affichant une polyvalence pour les quatre domaines clés de l’ingénierie civil (la conception, la surveillance, la gestion de projets et la conduite des travaux), l’ingénieur Saint-Louis a prêté ses services à des firmes comme GENIVAR Inc. Bâtiment , Holt Renfrew Dix-30 (Québec), Hyatt Regency, (Montréal), MDS Glacier Icing Tunnel Rail Extension, (Winnipeg, Manitoba), MDS Aero Support corporation (Canada), WFN-Pumping Station, (Whapmagoostui), Petro China (Chine), Usine Lallemand (Montréal, Québec), Centre Aéronautique de Mirabel, Consortium MBC-SNC-LAVALIN, Centre de Transport Frontenac, (Montréal), Hôpital de l’Université d’état d’Haïti, Hôpital Maisonneuve Rosemont (Montréal, Québec)..</p>
    <p>Il est détenteur d’une Maitrise Professionnelle (Option Génie Parasismique) de l’École Polytechnique Montréal. Il a été membre de différentes associations professionnelles dont l’ordre des ingénieurs du Québec (OIQ) Collège des Ingénieurs & Architectes Haïtiens (CNIAH), Association des diplômés de Polytechnique (ADP), l’Association Française de Génie Parasismique (AFPS) Réseau des Ingénieurs du Québec (RIQ). Il est PDG, de la plateforme Épicentre S.A, Bureau d’ingénieurs et d’architectes conseils et centre de formation continue pour Les professionnels de la construction.</p>
    `
  },
  {
    name: "Jean-Pierre TURGOT",
    image: "silhouette.jpg",
    role: "",
    bio: `
    <p>Jean Pierre Turgot est Directeur Général de la firme Republic Services, une des entreprises américaines mondialement reconnues dans le secteur du recyclage de déchets à l’échelle industrielle. Avec Plus de 20 ans d’expérience dans l’industrie hôtelière, cet entrepreneur avant-gardiste et novateur s’est fait un nom aux États-Unis d’Amérique notamment en Floride ou il s’est installé depuis plus de 20 ans. Proche de ses collaborateurs et socialement responsable, il empreigne ses entreprises d’un know-how, d’une rigueur et d’une discipline qui le mènent au succès de projets en projets. Récemment, son rôle fut déterminant dans le montage financier et la stratégie d’affaires qui a permis l’expansion et la modernisation de l’aéroport international de Fort-Lauderdale/Hollywood. Depuis 8 ans, Jean-Pierre Turgot siège comme président de de la Haitian American Chamber of Commerce (HAAMCC) of Fort-Lauderdale. Son leadership à la tête de cette institution a favorisé l’éclosion et l’expansion d’un nombre important d’entreprises haitiano américaines dans le sud de la Floride. Les jeunes entrepreneurs d’origine haïtienne du sud de la Floride bénéficient quotidiennement des conseils et du support de Jean-Pierre Turgot dont le travail communautaire et la notoriété grandissante en font une des figures emblématiques de la diaspora haïtienne.</p>
    <p>Philanthrope apprécié de nombreuses organisations humanitaires, Jean-Pierre Turgot siége aussi aux conseils d’administration d’importantes entités comme le Museum of Discovery and Science, Broward Chapter of Florida Restaurant & Lodging Association, Meals on Wheels, Food for the Poor, Humane society. La discipline, l’intégrité et le parcours de vie exemplaire de Jean-Pierre Turgot en ont fait le récipiendaire de nombreux awards, trophées et autres certificats d’honneur et mérite.</p>
    `
  },
  {
    name: "Sandra Saint-Hilaire",
    image: "sandra.jpg",
    role: "",
    bio: `
    <p>Sandra Saint-Hilaire est consultante politique et spécialiste en financement de campagne électorale pour les candidats aux postes électifs dans l’administration publique aux USA tant d’un point de vue national que régional. Née après les années 2000, elle fait partie de cette génération d’enfants d’immigrés haïtiens considérés comme la génération millenium. Même à un très jeune âge pour une telle profession, Sa liste impressionnante de clients inclut Jennifer Perelman candidate a la députation, Dotie joseph éluée « State Representative », Oliver Gilbert III élu maire, Fred Seraphin élu Juge, Vanessa Joseph élue « city clerk ». En 2017, elle fonda l’évènement “Each one, Teach one”, qui connecte des étudiants en situation difficile à un mentor sensé les guider dans leurs choix de vie. Elle a été Regional Chairwoman de la « United Haitian Students of Florida » qui rassemble les élevés des universités du sud de la Floride dont Florida International University, Miami-Dade College, Barry, Saint-Thomas university, Florida Memorial University et University of Miami. Diplômée en économie, elle poursuit une maîtrise en Business Administration (MBA). Passionnée de sa terre natale, Sandra est une des plus dynamiques jeunes leaders de la diaspora haïtienne de Miami et est promise à un grand avenir. Elle s’implique à fonds dans de nombreuses activités mettant en valeur Haïti et sa communauté expatriée. Elle prend part à tous les grands évènements culturels, académiques ou politiques et contribue souvent à leurs succès. Très calée en nouvelles technologies, elle est très active sur les réseaux sociaux ou elle fait la promotion de ses clients mais surtout de ses valeurs, ses principes et sa vision politique et sociale. Sa simplicité, son approche facile aux gens et son leadership naturel lui valent une grosse popularité au sein de la communauté notamment auprès de la génération millenium.</p>
    `
  },
  {
    name: "Dennery “Alain“ Ménélas",
    image: "silhouette.jpg",
    role: "",
    bio: `
    <p>Dennery “Alain “Ménélas est né aux Cayes dans le département du Sud. Il fit ses études universitaires à l’université Denis Diderot (Paris 7) et à l’Université des Massachusetts à Boston (Umass) où il présida l’association des Haïtiano-Américains (H.A.S) et siégea au sénat de l’université. En 2010, Il obtint sa licence (Bachelor of Arts) en Sciences Economiques et en Sciences Politiques. De retour en Haïti, il travailla dans les camps de déplacés au Champs de Mars et à Clercine. Après un passage à la « Catholic Relief Services », il besogna surtout dans le monde rural, notamment à Rhé (3ème section communale de Camp-Perrin), œuvrant pour une meilleure organisation des forces paysannes. En 2012, Il occupa le poste de Directeur de Cabinet au Ministère Délégué pour la Promotion de la Paysannerie (MDPP). Il revint ensuite aux Etats-Unis où il besogna dans le domaine de l’éducation au Texas, mettant l’accent sur la pédagogie de projet. Alain termine sa deuxième année de maîtrise à l’université de Harvard et occupe présentement le poste de Coordonnateur des opérations d’urgence pour la ville de Chelsea dans les Massachusetts.<p>
    `
  },
  {
    name: "Gervens Janvier",
    image: "silhouette.jpg",
    role: "",
    bio: `
    <p>Gestionnaire, entrepreneur, comptable, financier et citoyen engagé, Gervens Janvier est une valeur sûre de la diaspora haïtienne. Né à Jérémie le 22 septembre 1978, il a fait de brillantes études primaires et secondaires chez les Frères Paulin, au Collège Saint Louis et au Collège Etzer Vilaire à Jérémie. Il a fait ses études supérieures en administration à l'Université Quisqueya, à Taiwan et aux États-Unis. Il est titulaire d’une licence en administration et finances de l’Université de Massachusetts-Boston et a complété sa formation par des cours en Relations Internationales et en Gestion de projets de développement offerts par la banque Interaméricaine de développement(BID).</p>
    <p>Détenteur également d’une maitrise en Finance d'entreprise de Southern New Hampshire University, Gervens Janvier est un esprit bien formé en gestion des chiffres mais également très engagée sur le terrain social. IL milite dans plusieurs organisations haïtiennes de la diapora et n’hésite pas à déployer ses réseaux et connaissables pour assurer le succès d’activités philanthropique, académiques ou culturelles.</p>
    <p>Janvier est fondateur et président de HOFAGA, une organisation à but non-lucratif basée à Boston et à New York dont le but est de rechercher des opportunités en matière d’éducation et d’emploi pour les enfants de la Grand'Anse. Il Intervient régulièrement dans des conférences, séminaires ou symposiums sur la gouvernance et la modernisation des institutions publiques.</p>
    <p>Ce jeune entrepreneur à succès est propriétaire de « Reference financial services ». Très attaché à Haïti, il reste actif dans la vie politique et économique de son pays et n’hésite pas à faire valoir ses idées sur les réformes à adopter pour changer le cours des choses.</p>
    `
  },
]



export default function Dirigeants() {
  const [openDialog, setOpenDialog] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogText, setDialogText] = useState('')
  const styles = useStyles()

  const handleOpenDialog = ({ name, bio }: { name: string, bio: string }) => {
    if (!bio.trim().length) return

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
        backgroundImage: 'url(' + "/assets/images/home-header-2.jpg" + ')',
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
            <h1 className={styles.firstTitle}>Mouvement pour changer <br />Haïti ensemble</h1>
            <div style={{ marginTop: 200 }}>
              <Donate />
              &nbsp;
              <Join />
            </div>
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
