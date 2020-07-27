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

export const dirigeants = [
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
  {
    name: "GEORGES DUPERVAL",
    image: "stephane.jpeg",
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
    image: "stephane.jpeg",
    role: "Coordonnateur-adjoint chargé de la jeunesse",
    bio: `
    `
  },
  {
    name: "STANLEY LAFORTUNE",
    image: "stephane.jpeg",
    role: "Coordonnateur-adjoint à la planification stratégique",
    bio: `
    `
  },
  {
    name: "ROOSEVELT VERDIEU",
    image: "stephane.jpeg",
    role: "Coordonnateur-adjoint Chargée de la communication",
    bio: `
      <p>Roosevelt Verdieu ROSIER est une des meilleures têtes pensantes de la communauté haïtienne expatriée en Amérique du Nord. Militant passionné et citoyen engagé dans les grandes batailles de la jeunesse haïtienne après 1986 pour la démocratie, la décentralisation et la justice sociale, Rosier est un des plus fins connaisseurs de la scène politique haïtienne actuelle et des acteurs qui y évoluent.</p>
      <p>Originaire du Borgne où il est né un 28 juin 1974, ce brillant Juriste et diplomate de formation est un farouche défenseur des mouvements populaires, de la paysannerie, de l’intégration des masses et de la jeunesse estudiantine dans le processus de développement d’Haïti. Ses combats politiques ont toujours été marqués du sceau de la lutte contre l’exclusion et la pauvreté, l'autonomie de l’Université, Le respect de l’autodétermination des peuples et de la souveraineté nationale et populaire, L’inclusion sociale, La défense des droits humains des migrants, la défense sans restriction de la souveraineté de tout ordre : politique, économique, sociale, culturelle, territoriale, alimentaire, énergétique. Présentement, il se bat ardemment avec beaucoup de secteurs dans le Département du Nord et de la diaspora pour la reconquête de la fierté christophienne.</p>
      <p>Il a fait ses études classiques au Collège Notre Dame du Perpétuel Secours au Cap-Haïtien et a appris le droit à la Faculté de droit et de Sciences Économique de l’Université d'État d'Haiti, Port-au-Prince et à l'Université de Montréal (UdeM) au Canada. C’est à l’ Académie Nationale Diplomatique et Consulaire (ANDC) qu’il a fait ses études en diplomatie. Rosier a laissé son empreinte indélébile et un souvenir intarissable dans les institutions et mouvements où il a milité avec ferveur, conviction et engagement dont le Baton jenès la, L'Organisation pour l'Unité et l'Intégration (OUI), la Nouvelle Option pour le Renouveau et le Développement (NORD), l'Association Inter-scolaire pour la Défense de l'Environnement ( AIDE) et le Mouvement des Jeunes Étudiants/Universitaires (MOJEUNE).</p>
    `
  },
  {
    name: "MIKERLANGE REGISTRE",
    image: "stephane.jpeg",
    role: "Coordonnateur Général-adjoint",
    bio: `
      <p>Etudiant, animateur social et leader universitaire</p>
      <p>Mikerlange est Coordonnateur Général de la Coalition de la Jeunesse Haïtienne (CJH), une des plus importantes organisations étudiantes d’Haïti. Né le 3 mai 1995 à Carrefour, ce jeune ety dynamique leader universitaire est une figure connue du milieu académique. Brillant étudiant finissant en Administration (INAGHEI) et en Droit (FDSE), il est également très intéressé par le social et la militance politique pour que triomphe les idéaux de progrès et de justice social. En pleine crise du COVID, il a fait partie de nombreuses délégations d’étudiants volontaires qui se sont déplacé en province pour participer à des campagnes de sensibilisation de la population.</p>
      <p>Très doué en communication, il a suivi des cours sur la gouvernance publique à Cuba. C’est d’ailleurs sur ce thème de prédilection qu’il intervient régulièrement dans des conférences ou colloques Sur différents campus universitaires. Il est ancien Président du Cercle des Étudiants Nationalistes pour l'Avancement d'Haïti (CENAH) (2016) et Co-fondateur du Forum des Étudiants Haïtiens (FEH). Il est la cheville ouvrière du mouvement Opération 2025 et du projet Vision Haïti 2054</p>
    `
  },
  {
    name: "PHILIPPE SAINT-LOUIS",
    image: "stephane.jpeg",
    role: "Coordonnateur-adjoint chargé des questions culturelles",
    bio: `
      <p>Animateur culturel, leader de la société civile et Entrepreneur</p>
      <p>Né à Port-au-Prince, Philippe saint-Louis est une personnalité de référence dans le monde culturel, journalistique ainsi que dans le secteur loisirs et restauration. Très populaire sur les réseaux sociaux, il y anime avec succès des rencontres virtuelles de divertissement alliant la musique à la responsabilité citoyenne.</p>
      <p>Fondateur de MIZIKANOU, Philippe Saint-Louis est également un ardent défenseur de la musique haitienne dont il a fait la promotion toute sa vie. Apprécié des artistes, également peintre lui-même, il anime encore aujourd’hui sur la toile des émissions très populaires mettant en lumière le compas et son histoire. Cette passion n’Est pas nouvelle puisqu’il a été l'initiateur de l’émission Mardi Alternative qui commentait déjà l’actualité musicale haïtienne à l’époque en rassemblant des spécialistes en musique et autres mélomanes haïtiens... Philippe Saint-Louis est aussi le propriétaire du restaurant KAY PIPO. Ayant plus d’une corde à son arc, ce jeune artiste, entrepreneur, professionnel et penseur haitien s’est taillé une réputation d’intégrité, de modernité et de savoir-faire dans tous les secteurs d’activités où il milite.</p>
    `
  },
  {
    name: "EMOL JEUNE",
    image: "stephane.jpeg",
    role: "Coordonateur-adjoint chargé des relations avec les universités",
    bio: `
      <p>Emol Jeune est un leader de la jeunesse capoise, co-fondateur de l’association « Christophiens en marche ». Très actif sur les médias sociaux, ce regroupement de jeunes progressistes mène un combat pour la bonne gouvernance et la reddition de comptes. Proche des milieux universitaires, Emol Jeune organise régulièrement des conférences et tables rondes dans certains établissements académiques du Cap et de PAP. Il a fait ses Etudes classiques au Collège Le phare du Cap-Haitien et termine actuellement son diplôme en administration de l’Université Notre Dame d’Haïti.</p>
      <p>Il a été tour à tour Responsable des Ressources Humaines à l’agence de voyages Lapoula Metellus, Enquêteur pour le Ministère du Commerce et de l’industrie et le Ministère de l’éducation Nationale. Il est également le Coordonnateur du Salon Universitaire du Nord.</p>
      <p>Il est conseiller spécial du député de Pétion-ville pour tout ce qui touche aux relations avec l’université privée et public. Réservé et calme, il impose ses idées par la clarté de son argumentaire et sa grande sagesse.</p>
    `
  },
  {
    name: "PATRICK ETIENNE",
    image: "stephane.jpeg",
    role: "Coordonnateur départemental pour le NORD-EST",
    bio: `
      <p>Patrick R. Etienne est un activiste social et politique evoluant à Ouanaminthe dans le département du Nord-Est. Jouissant d’une grande estime de la population du département, Il a créé la formation AKSAN, Aksyon Sivik Pou Avansman Nodes, une organisation communautaire forte de quatre cents membres dont les activités communautaires visent à former la jeunesse à plusieurs champs d’activités. Il est le fondateur de "Comedy Stars", un concours télévisé de talents pour jeunes comédiens, ainsi que «Deblozay Nan Bouk» une série publiée sur YouTube.</p>
      <p>Dans le département du Nord-Est, le Dr Etienne a mis en place un programme d'information sanitaire pour les organisations féminines et religieuses : Prévention et traitement des maladies infectieuses et de certaines maladies chroniques. Malgré son emploi du temps très chargé, il Anime «Kilti Lakay», une émission de radio hebdomadaire qui utilise la comédie pour aborder de nombreuses questions sensibles de notre culture haïtienne en général et de nos coutumes locales en particulier. Très impliqué dans les sections rurales du département de l’Est, il est diplômee en Psychiatrie / Santé comportementale communautaire, en Psychologie et en Science Politique. Du temps où il vivait à l’étranger, il a travaillé comme Spécialiste en santé comportementale communautaire et directeur des services médicaux et infirmier a Long Ridge of Stamford.</p>
    `
  },
  {
    name: "RYSDAEL DUVERSAINT",
    image: "stephane.jpeg",
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
    name: "RODNEY SAINTIL",
    image: "rodney.jpeg",
    role: "Un coordonnateur départemental pour le SUD-EST",
    bio: `
    `
  },
  {
    name: "MARC-ANTOINE LEVEILLÉ",
    image: "marc-antoine.jpeg",
    role: "Un coordonnateur pour la branche extérieure des USA",
    bio: `
      <p>Jeune ingénieur émérite et brillant, Marc-Antoine Léveillé est une personnalité connue de la communauté haïtienne en Floride qui a brillé comme Chairman du « Haitian-American Association of Engineers & Scientists ». A ce poste, il s’est fait remarquer par son leadership, sa droiture, sa disponibilité pour ses membres dont de nombreux jeunes haïtiens faisant la fierté d’Haïti dans la sphère scientifique et environnementale mondiale.</p>
      <p>L’ingénieur Leveillé a fait ses études primaires et secondaires en Haïti chez les Frères de l'Instruction Chrétienne et le Collège Roger Anglade. Diplômé en génie industrielle à l’Université de Miami, détenteur d’un MS en système environnemental et urbain de FIU et d’un doctorat en Education de la NSU, Marc-Antoine Leveillé a travaillé dans le privé et le public comme ingénieur consultant et éducateur. Il a mis ses compétences au service de nombreux projets majeurs. Entre autres, il a été directeur du projet UNEPH-CORS, directeur logistique de Envirotech99 et volontaire à la FAVACA. Aux USA, il a collaboré à plusieurs nettoyages environnementaux majeurs, aux conférences de HALO, aux foires annuelles Techfair. Contributeur à des journaux électroniques scientifiques, mentor et modèle pour de nombreux jeunes de la diaspora, l’Ingénieur Leveillé a été Vice-Président du « Haitian-American Youth Organization».</p>
    `
  },
  {
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
    name: "FRED LAGRANDEUR",
    image: "stephane.jpeg",
    role: "Un coordonnateur pour la branche extérieure du CANADA",
    bio: `
      <p>Fred Lagrandeur, un jeune leader de la communauté haïtienne de Montréal, est apprécié pour son dynamisme, son courage, son entregent, son intégrité et son sens du bien public. De 2017 à 2019, il fut le présift de l'association des étudiants haïtiens de l'Université de Montréal (AEHUM). A ce titre, il s’attela sans relâche à connecter la jeunesse québécoise d’origine haïtienne à l’alma mater à travers différentes activités (sur et en dehors du campus). Homme de passion et déterminé à mener tous ses projets à bon port, le jeune président de l’AEHUM a pu convaincre plusieurs grandes personnalités du monde politique et de la société civile haïtienne à intervenir comme conférenciers à l’Université de Montréal.</p>
      <p>Ce brillant licencié en droit et en philosophie de l'Université d'État d'Haïti (UEH) poursuit actuellement une maîtrise en droit international à l'UdeM. Ses travaux de recherche portent sur le processus d'adoption internationale en Haïti. Au pays, il a d’ailleurs gardé de solides attaches dans les milieux universitaires, paysans et académiques.</p>
      <p>Passionné du droit des affaires, c'est dans ce domaine qu'il espère accomplir une carrière florissante. Toutefois, en marge de cette carrière professionnelle qui s’annonce prometteuse, l’engagement politique et citoyen de ce jeune leader tant pour Haïti que le Canada continuera de perdurer. Présentement, Lagrandeur travaille comme conseiller politique au gouvernement de Justin Trudeau. Encore une expérience exceptionnelle qui apportera à l’intéressé plus de know-how, d’expérience et de connaissance.</p>
    `
  },
  {
    name: "EMMANNUELINE DUPERVAL",
    image: "stephane.jpeg",
    role: "COORDONATEUR BRANCHE EXTERIEUR PARIS",
    bio: `
      <p>Duperval Emmanueline est née en Hiti le 05 Janvier 1993. Elle est une étudiante en droit à Panthéon et en Philosophie à Paris VIII. Cette jeune leader appréciée et dynamique de la communauté Haïtienne et Française de Saint-Denis et à Pierrefitte est profondément engagée dans le politique et le social notamment aux cotés de l’ancien candidat à la présidence Monsieur HAMON Benoit et l’ancien Député de Saint-Denis Mathieu Hanotin aujourd’hui en tête de la course électorale pour la mairie de la commune de Saint-Denis.</p>
      <p>Elle a fait ses études primaires en Haïti à FILSECCAM puis l’Institution Mixte Étoile des chiffres. Elle faisait partie du conservatoire de Saint-Trinite (Haïti) de 2009 à 2013. Très attachée à sa terre natale, dès son arrive en France, elle milite activement dans les initiatives visant le développement d’Haïti et l’intégration de la diaspora. Très intéressée par la politique, elle suit de près l'actualité Haïtienne et internationale, et réfléchir sur les différents enjeux géopolitiques. Impliquée, rigoureuse, et volontaire, Elle a été aussi élue au Conseil Administration(CA) de l'Université Paris VIII VINCENNES SAINT-DENIS en 2016. Depuis 2017, elle milite au parti PS dont elle a été depuis toujours déléguée de classe. Elle reconnait souvent que son implication politique et sociale en France sont de nature a la preparer a un retour au pays natal. Elle est passionnée par l’art et la musique (violon, chant). Curieuse du monde et des autres, elle voyage souvent pour découvrir de nouvelles cultures.</p>
    `
  },
  {
    name: "SAINT-JEAN JOSEPH",
    image: "saint-jean.jpeg",
    role: "Un coordonnateur pour la branche extérieure EUROPE",
    bio: `
      <p>Saint-Jean JOSEPH est un éminent Juriste en Droit du Travail et de la Protection Sociale Appliquée. Ingénieur et Consultant Informatique chez Capgemini (Délégué Syndical CFTC), il fait partie des personnalités haïtiennes les plus respectées au sein de la communauté haïtienne de France. Né en 1958 à Dessalines, il a fait ses études primaires à l’école Martin OGINE de Saint Marc, et ses études secondaires au Lycée Sténio Vincent de Saint Marc et au Collège Arountino PETIT CELIN. Ensuite il part en France pour poursuivre ses Etudes Universitaires. Militant Associatif actif au sein de la communauté haïtienne de France, il s’addonne egakeent a des etudes etr decroche un diplôme universitaire en Science du Langage et Communication (DEUG) à l’Université de Paris VIII, et en 1990 une licence Micro-Informatique Appliquée aux Sciences Humaines (MIASH) de l’Université de Paris VIII. Depuis 1999, il travaille en qualité d’Ingénieur Informatique. chez Capgemini, une Multinationale de plus de 270 Milles collaborateurs et un leader mondial en conseil, transformation numérique, et services technologiques et d’ingénierie. Il y consacre la grande majorité de son temps aux activités syndicales pour la défense et la protection des salariés au sein de la Société. Il participe au nom de son syndicat aux négociations des Accords Collectifs de l’entreprise (Santé et Qualité de vie au travail, les accords sur les salaires, etc..).</p>
      <p>Saint-Jean Joseph est Président de l’Association Franco Haïtienne pour le Développement de l’Artibonite (AFHDA). Homme aux compétences multiples, il porte plusieurs chapeaux à la fois. Il est en même temps Membre de l’Association Solidarités CHIV Haïti, membre de l’Observatoire du Conseil Représentatif de la Communauté Haïtienne de France. Saint-Jean Joseph incarne l’intégration réussie en France d’un jeune et talentueux intellectuel et penseur haïtien qui est resté autant attaché à son pays, son département (Artibonite) qu’a sa terre d’accueil.</p>
    `
  },
  {
    name: "HERALD MORISSEAU",
    image: "stephane.jpeg",
    role: "Coordonnateur-adjoint aux affaires administratives et financières",
    bio: `
    `
  },
  {
    name: "FRITZBERT SILENCIEUX",
    image: "fritzbert.jpeg",
    role: "Coordonateur-adjoint chargé des sections  communales",
    bio: `
    `
  },
  {
    name: "ANNE-SARHA LOZAMAR",
    image: "stephane.jpeg",
    role: "Coordonnateur-adjoint en charge des relations avec la presse",
    bio: `
    `
  },
  {
    name: "DR JOHANNE GEFFRARD",
    image: "joanne.jpeg",
    role: "Coordonnatrice-adjointe aux affaires féminines",
    bio: `
    `
  },
  {
    name: "GLADYS JOSEPH",
    image: "stephane.jpeg",
    role: "Coordonnatrice-adjointe chargée de L'insertion sociale",
    bio: `
    `
  },
  {
    name: "DARA SINVILLE",
    image: "darah.jpeg",
    role: "Coordonatrice-adjointe chargée des relations avec les écoles",
    bio: `
    `
  },
  {
    name: "MANUEL MOISE",
    image: "stephane.jpeg",
    role: "Membre",
    bio: `
    <p>Entrepreneur, ingénieur, citoyen engagée spécialiste des communautés rurales</p>
    <p>Manuel Moïse, est un entrepreneur, actionnaire et employé d’une compagnie de construction haïtienne depuis plus de 20 ans. Diplômé en Génie rural (MacDonald College of McGill University), il possède près de trente années d’expérience en Haïti dans le suivi et le contrôle des travaux, la gestion de projets, ainsi que la réalisation de travaux de Génie rural et Génie civil. M. Moïse connait bien « le pays en dehors » pour avoir participé professionnellement à de nombreux projets, mais aussi du fait qu’il cultive un intérêt marqué pour les communautés rurales d’Haïti, et pour les paysages enchanteurs de l’ile qui ne demande qu’à être constamment redécouvert. En plus de partir à la découverte des différents coins du pays, M. Moïse s’intéresse aux sciences en générale et plus particulièrement à l’astrophysique.</p>
    `
  },
  {
    name: "SONCEAU GAMAEL",
    image: "stephane.jpeg",
    role: "Coordonnateur départemental pour le NORD",
    bio: `
    `
  },
]



export default function Dirigeants() {
  const [openDialog, setOpenDialog] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogText, setDialogText] = useState('')

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
