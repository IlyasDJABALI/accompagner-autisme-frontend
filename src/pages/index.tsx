import NextLink from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo-AAA.png";
import aBlue from "../../public/images/Ableu.png";
import aYellow from "../../public/images/Ajaune.png";
import aStripes from "../../public/images/Araye.png";
import aAndStar from "../../public/images/A-et-etoile.png";

import {
  ChakraProvider,
  theme,
  Link,
  Text,
  Box,
  Grid,
  GridItem,
  Center,
  List,
  ListItem,
  HStack,
} from "@chakra-ui/react";

const IndexPage = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" m={4}>
      <Image src={logo} alt="logo" layout="fixed"/>
    </Box>

    <Center>
      <Grid templateColumns="repeat(6, 1fr)" gap={2} w="md">
        <GridItem colSpan={1}>
          <Box textAlign="right">
            <Image src={aBlue} alt="A bleu" layout="fixed"/>
          </Box>
        </GridItem>
        <GridItem colSpan={4}>
          <Box
            textAlign="center"
            fontSize={25}
            lineHeight="27px"
            fontWeight={500}
            pt={15}
            pb={15}
          >
            Bienvenue sur notre site Accompagner l’Autisme
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box textAlign="left">
            <Image src={aYellow} alt="A jaune" layout="fixed" />
          </Box>
        </GridItem>
      </Grid>
    </Center>

    <Text mb={4} fontSize={14} lineHeight="16px" fontWeight={"semibold"}>
      Notre philosophie repose sur 2 axes principaux :
    </Text>
    <List spacing={3}>
      <ListItem>
        <HStack>
          <Box>
            <Image src={aStripes} alt="A rayé" layout="fixed"/>
          </Box>
          <Text textAlign="justify">
            Avec une prise en charge adaptée et coordonnée, l’enfant et sa
            famille sont les principaux acteurs du projet. Ainsi, nous proposons
            d’une part des formations pour parents et professionnels et d’autre
            part des accompagnements personnalisés à l’école et à domicile.
          </Text>
        </HStack>
      </ListItem>
      <ListItem>
        <HStack>
          <Box>
            <Image src={aStripes} alt="A rayé" layout="fixed"/>
          </Box>
          <Text textAlign="justify">
            La place des enfants autistes est à l’école. A ce titre nous
            oeuvrons pour la formation des AVS / AESH, mais nos accompagnants
            peuvent intervenir à l’école dans le cadre de conventions
            individuelles avec l’Education Nationale.
          </Text>
        </HStack>
      </ListItem>
    </List>

    <Center>
      <Box>
        <Image src={aAndStar} alt="A et etoile" />
      </Box>
      <Box>
        <NextLink href={"/contact"} passHref>
          <Link color="teal.500" textDecoration="underline">Contactez-nous pour devenir adhérents</Link>
        </NextLink>
      </Box>
    </Center>

    <Text textAlign="justify" mb={4}>
      Certaines parties du site sont encore en cours de construction, n'hésitez
      pas à revenir régulièrement.
    </Text>
  </ChakraProvider>
);

export default IndexPage;
