import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  ChakraProvider, Heading, Link, List,
  ListItem, Text, theme
} from "@chakra-ui/react";

const LinksPage = () => (
  <ChakraProvider theme={theme}>
    <Text textAlign="justify" p={4}>
      Cette liste est amenée à être complétée régulièrement. N’hésitez pas à
      nous proposer de nouveaux liens !
    </Text>

    <Heading as="h4" size="md">
      ADMINISTRATIF - DROIT :
    </Heading>
    <List spacing={3}>
      <ListItem>
        <Link href="http://www.egalited.org" isExternal>
          www.egalited.org <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href="https://www.loiret.fr/la-maison-departementale-des-personnes-handicapees-mdph"
          isExternal
        >
          Site de la Maison Départementale des Personnes Handicapées (MDPH) du
          Loiret
          <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>

      <ListItem>
        <Link
          href="https://www.has-sante.fr/portail/upload/docs/application/pdf/2012-03/recommandations_autisme_ted_enfant_adolescent_interventions.pdf"
          isExternal
        >
          Recommandations HAS 2012 (PDF) <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>

      <ListItem>
        <Link
          href="http://www.cnsa.fr/documentation/plan-autisme2013.pdf"
          isExternal
        >
          Plan autisme 2013-2017 (PDF) <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
    </List>

    <Heading as="h4" size="md">
      DÉPISTAGE - DIAGNOSTIC :
    </Heading>
    <List spacing={3}>
      <ListItem>
        <Link href="http://www.cra-centre.org" isExternal>
          www.cra-centre.org
          <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href="http://www.vaincrelautisme.org/content/outils-de-diagnostic-et-de-depistage"
          isExternal
        >
          www.vaincrelautisme.org/content/outils-de-diagnostic-et-de-depistage
          <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
    </List>

    <Heading as="h4" size="md">
      QUELQUES ASSOCIATIONS :
    </Heading>
    <List spacing={3}>
      <ListItem>
        <Link href="http://www.autisme-france.fr" isExternal>
          www.autisme-france.fr
          <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://www.dialogueautisme.com" isExternal>
          www.dialogueautisme.com
          <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="http://www.vaincrelautisme.org" isExternal>
          www.vaincrelautisme.org
          <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
    </List>

    <Heading as="h4" size="md">
      SCOLARISATION :
    </Heading>
    <List spacing={3}>
      <ListItem>
        <Link href="http://www.epsilonalecole.com" isExternal>
          www.epsilonalecole.com
          <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://www.craif.org/le-centre-de-documentation-98" isExternal>
          Centre de documentation du www.craif.org
          <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
      <ListItem>
          <Link
            href="http://media.education.gouv.fr/file/ASH/57/5/guide_eleves_autistes_130575.pdf"
            isExternal
          >
            Guide de scolarisation des élèves autistes publié par l'éducation nationale (PDF)
            <ExternalLinkIcon mx="2px" />
          </Link>
      </ListItem>
      <ListItem>
        <Link
          href="https://www.asperansa.org/docs/guide_scolarisation_2016.pdf"
          isExternal
        >
           Guide de scolarisation 2016 du site asperansa.org (PDF)
          <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href="http://cache.media.eduscol.education.fr/file/Handicap/38/3/TED_eduscol_226383.pdf"
          isExternal
        >
          Guide de scolarisation des élèves autistes - Ressource éduscol (PDF)
          <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
    </List>

    <Heading as="h4" size="md">
      FORMATIONS - OUTILS- RESSOURCES :
    </Heading>
    <List spacing={3}>
      <ListItem>
        <Link href="http://www.canalautisme.com" isExternal>
          www.canalautisme.com
          <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href="https://practicalfunctionalassessment.com"
          isExternal
        >
          www.practicalfunctionalassessment.com
          <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="http://www.ted-aba.fr" isExternal>
          www.ted-aba.fr
          <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="http://www.ba-eservice.info" isExternal>
          www.ba-eservice.info
          <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="http://www.iloveaba.com" isExternal>
          www.iloveaba.com
          <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="http://www.autismteachingtools.com" isExternal>
          www.autismteachingtools.com
          <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
    </List>

    <Heading as="h4" size="md">
      RECHERCHE :
    </Heading>
    <List spacing={3}>
      <ListItem>
        <Link href="http://www.inshea.fr" isExternal>
          www.inshea.fr
          <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="http://www.scilogs.fr/ramus-meninges/" isExternal>
          www.scilogs.fr/ramus-meninges/
          <ExternalLinkIcon mx="2px" />
        </Link>
      </ListItem>
    </List>

    <Heading as="h4" size="md">
      FILMS EN LIGNE :
    </Heading>
    <List spacing={3}>
      <ListItem>
          <Link href="https://www.youtube.com/watch?v=qFLHNPnKYKY" isExternal>
          "Le cerveau d’Hugo"
            <ExternalLinkIcon mx="2px" />
          </Link>
      </ListItem>
      <ListItem>
          <Link href="https://www.youtube.com/watch?v=T_2lhIy_8zo" isExternal>
          "Mon petit frère de la lune"
            <ExternalLinkIcon mx="2px" />
          </Link>
      </ListItem>
      <ListItem>
          <Link href="https://www.youtube.com/watch?v=-eHtZHH1AYQ" isExternal>
          "Mon ami Tom"
            <ExternalLinkIcon mx="2px" />
          </Link>
      </ListItem>
    </List>
  </ChakraProvider>
);

export default LinksPage;
