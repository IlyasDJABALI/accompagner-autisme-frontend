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

const LearningPage = () => (
  <ChakraProvider theme={theme}>
    <Center>En cours de travaux</Center>
  </ChakraProvider>
);

export default LearningPage;
