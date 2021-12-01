import { Box, ChakraProvider, Heading, Text, theme } from "@chakra-ui/react";

const LegalPage = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Heading as="h3" size="lg">
        Mentions légales
      </Heading>
      <Heading as="h4" size="md">
        Édition
      </Heading>
      <Text textAlign="justify">
        Éditeur du site et responsable de la publication: Association
        Accompagner l’Autisme, présidée par Josselin MONTAGU.
      </Text>
      <Box>siret : 823 522 354 00013</Box>
      <Box>siren : 823 522 354</Box>
      <Heading as="h4" size="md">
        Reproduction
      </Heading>
      <Text textAlign="justify">
        Le contenu de ce site relève de la législation française et
        internationale sur le droit d’auteur et la propriété intellectuelle.
        Tous les droits de reproduction sont réservés, y compris pour les
        documents téléchargeables, notamment les représentations iconographiques
        et photographiques.
      </Text>
      <Text textAlign="justify">
        La reproduction de tout ou partie de ce site sur un support électronique
        quel qu’il soit est formellement interdite, sauf autorisation expresse
        de l’association.
      </Text>

      <Heading as="h4" size="md">
        Données personnelles
      </Heading>
      <Text textAlign="justify">
        Conformément à la loi « informatique et libertés » du 6 janvier 1978,
        vous bénéficiez d’un droit d’accès et de rectification aux informations
        qui vous concernent. Si vous souhaitez exercer ce droit et obtenir
        communication des informations vous concernant, veuillez prendre contact
        avec l’association.
      </Text>
      <Heading as="h4" size="md">
        Hébergement
      </Heading>
      <Text textAlign="justify">Le site est hébergé par Vercel.</Text>
      <Heading as="h4" size="md">
        Webmaster
      </Heading>
      <Text textAlign="justify">
        Thomas Gallin assure la direction technique du site.
      </Text>
    </Box>
  </ChakraProvider>
);

export default LegalPage;
