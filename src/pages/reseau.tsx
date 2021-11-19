import {
  Center, ChakraProvider, Heading, Link, List, ListIcon, ListItem, OrderedList, Text, theme
} from "@chakra-ui/react";
import NextLink from "next/link";
import { MdCheckCircle } from "react-icons/md";


const NetworkPage = () => (
  <ChakraProvider theme={theme}>
    <Heading as="h3" size="lg">
      Interventions à domicile et à l’école
    </Heading>

    <Text textAlign="justify">
      AAA peut proposer un accompagnement des personnes autistes.
    </Text>

    <Text>Il s’agit d’interventions :</Text>
    <List spacing={3} p={4}>
      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />à domicile ou à l’école
      </ListItem>
      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        menées par des professionnels spécialisés dans le domaine de l’autisme :
        analystes comportementaux, consultants ABA, psychologues spécialisés,
        éducateurs spécialisés, intervenants ABA, ...
      </ListItem>
      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        conformes aux bonnes pratiques recommandées par la HAS et l’ANESM
        (approches développementales et comportementales)
      </ListItem>
    </List>

    <Heading as="h3" size="lg">
      Fonctionnement en réseau
    </Heading>
    <Text textAlign="justify">
      L’animation de ce réseau de professionnels de l’accompagnement permet :
    </Text>
    <List spacing={3} p={4}>
      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        le partage de connaissance et échange sur les meilleures pratiques
      </ListItem>
      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        la constitution d’outils d’évaluation et de suivi des progrès de
        l’enfant.
      </ListItem>
      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        la création de protocoles modulables de prise en charge
      </ListItem>
      <ListItem>
        <ListIcon as={MdCheckCircle} color="green.500" />
        des réunions et supervisions des pratiques régulières
      </ListItem>
    </List>

    <Heading as="h3" size="lg">
      Les 5 piliers
    </Heading>
    <Text textAlign="justify">
      L’accompagnement intervient dans le cadre d’une charte éthique et repose
      sur 5 piliers essentiels qui sont :
    </Text>
    <OrderedList>
      <ListItem>Le bénéficiaire au cœur du dispositif</ListItem>
      <ListItem>La famille partie intégrante du projet personnalisé</ListItem>
      <ListItem>L’accompagnant en formation continue</ListItem>
      <ListItem>La supervision régulière</ListItem>
      <ListItem>La coordination avec les acteurs transverses</ListItem>
    </OrderedList>

    <Center>
      <NextLink href={"/contact"} passHref>
        <Link color="teal.500" textDecoration="underline">
          Contactez nous
        </Link>
      </NextLink>{" "}
    </Center>
  </ChakraProvider>
);

export default NetworkPage;
