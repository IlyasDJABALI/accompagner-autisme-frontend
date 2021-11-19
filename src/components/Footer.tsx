import * as React from "react";
import NextLink from "next/link";
import {
  Box,
  chakra,
  Container,
  Stack,
  Link,
  useColorModeValue,
  VisuallyHidden,
  Center
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { ReactNode } from "react";




const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <NextLink href={"/mentionslegales"} passHref>
            <Link textDecoration="underline">Mentions légales</Link>
          </NextLink>
        </Stack>
        <Stack direction={"row"} spacing={6} >
          <Center>
            <Box>Retrouvez nous sur </Box>
          </Center>
          <SocialButton
            label={"Facebook"}
            href={"https://www.facebook.com/accompagnerlautisme"}
          >
            <FaFacebook />
          </SocialButton>
          
        </Stack>
      </Container>
    </Box>
  );
};
