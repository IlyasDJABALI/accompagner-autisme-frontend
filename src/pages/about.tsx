import {
  Box, ChakraProvider, Heading, Link, List, ListIcon, ListItem, Text, theme, UnorderedList
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { MdCheckCircle } from "react-icons/md";
import logo from "../../public/images/logo-AAA.png";



const AboutPage = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" m={4}>
      <Image src={logo} alt="logo" />
    </Box>

    <Heading as="h3" size="lg">
      L&apos;association
    </Heading>

    <Text textAlign="justify">
      L&apos;association Accompagner l&apos;Autisme est une association type loi 1901
      créée en octobre 2016, à Orléans.
    </Text>

    <Text textAlign="justify">
      Les membres fondateurs sont des parents d&apos;enfants autistes, dont certains
      sont enseignants en école primaire et des professionnels de
      l&apos;accompagnement.
    </Text>

    <Text>D&apos;après ses statuts, cette association a pour objet de :</Text>
    <List spacing={3} p={4}>
      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        favoriser la diffusion d&apos;
        <NextLink href={"/formations"} passHref>
          <Link color="teal.500" textDecoration="underline">
            informations
          </Link>
        </NextLink>{" "}
        concernant l&apos;autisme et les troubles envahissants du développement par
        tout moyen ou tout évènement
      </ListItem>
      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        l&apos;animation d&apos;un{" "}
        <NextLink href={"/reseau"} passHref>
          <Link color="teal.500" textDecoration="underline">
            réseau
          </Link>
        </NextLink>{" "}
        d&apos;acteurs professionnels autour de l&apos;autisme
      </ListItem>
      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        favoriser l&apos;inclusion d&apos;enfants autistes / porteur de handicap dans tout
        milieu ordinaire (école, sport,médical,...)
      </ListItem>
      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        mettre en place un plan d&apos;action pour l&apos;accès à la scolarisation
      </ListItem>
    </List>

    <Heading as="h3" size="lg">
      Notre combat
    </Heading>
    <Heading as="h4" size="md">
      L&apos;autisme
    </Heading>

    <Text textAlign="justify">
      Trouble neuro-développemental d&apos;origine multifactorielle, l&apos;autisme se
      caractérise par :
    </Text>
    <UnorderedList spacing={3} p={4}>
      <ListItem>
        des troubles de la communication et des interactions sociales.
      </ListItem>
      <ListItem>
        des comportements, activités et intérêts restreints et stéréotypés.
      </ListItem>
    </UnorderedList>
    <Text textAlign="justify">
      Ces troubles envahissants du développement (TED) sont aujourd&apos;hui désignés
      sous l&apos;appellation de <em>troubles du spectre autistique</em> (TSA).
    </Text>

    <Text textAlign="justify">
      L&apos;autisme est généralement associé à d&apos;autres troubles développementaux
      tels que des troubles du sommeil, de l&apos;anxiété, des déficits de
      l&apos;attention, de l&apos;épilepsie...
    </Text>

    <Text textAlign="justify">
      En France, 650 000 personnes sont officiellement diagnostiquées, soit 1
      naissance sur 100. Les garçons sont, en moyenne, quatre fois plus touchés
      que les filles.
    </Text>
    <Text textAlign="justify">
      Les premiers signes évocateurs apparaissent entre 18 et 36 mois. On peut
      notamment citer un manque d&apos;intérêt pour les personnes, une absence de
      regard vers l&apos;adulte, des comportements répétitifs et des utili­sations
      inappropriées d&apos;objets. Les familles sont souvent démunies face à la
      découverte de l&apos;autisme de leur enfant.
    </Text>

    <Heading as="h4" size="md">
      Autisme et scolarisation
    </Heading>

    <Text textAlign="justify">
      Les enfants autistes ayant des difficultés relationnelles et de
      communication, les apprentissages ne sont pas facilités. Mais, avec un
      accompagnement adapté, les enfants sont tout à fait capables d&apos;apprendre.
    </Text>
    <Text textAlign="justify">
      Depuis 2005, la scolarisation est obligatoire pour tous et les élèves sont
      « inscrits de droit » dans l&apos;école de leur quartier. Malgré un plan
      national pour l&apos;autisme et une volonté de mettre en avant l&apos;inclusion
      scolaire, on estime aujourd&apos;hui que 80% des enfants autistes sont
      déscolarisés.
    </Text>

    <Text textAlign="justify">
      Les raisons sont multiples : manque de formation du personnel autorisé à
      intervenir à l&apos;école, orientation quasi-systématique vers des
      établissements médicaux, méconnaissance des familles et de leurs droits,
      ...
    </Text>

    <Text textAlign="justify">
      Nous aidons les familles à mener ce combat pour une scolarisation -
      accompagnée et adaptée - de leurs enfants.
    </Text>

    <Text textAlign="justify">
      Nous mettons beaucoup d&apos;énergie dans nos différents projets
    </Text>

    <Text textAlign="justify">Merci de votre soutien.</Text>

    <Text textAlign="right">
      Josselin MONTAGU, président d&apos;Accompagner l&apos;Autisme
    </Text>
  </ChakraProvider>
);

export default AboutPage;
