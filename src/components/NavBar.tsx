import * as React from "react";
import { ReactNode } from "react";
import NextLink from "next/link";
import {
  Box,
  Link,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { useRouter } from 'next/router';

const Links =
  '{ "links": [' +
  '{ "name":"Formations" , "url":"/formations" },' +
  '{ "name":"Réseau" , "url":"/reseau" },' +
  '{ "name":"Ludothèque" , "url":"/ludotheque" },' +
  '{ "name":"Qui sommes nous" , "url":"/about" },' +
  '{ "name":"Contact" , "url":"/contact" },' +
  '{ "name":"Liens" , "url":"/liens" } ]}';

const NavLink = ({ children, url, isActive }: { children: ReactNode; url: string; isActive: boolean }) => (
  <NextLink href={url} passHref>
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      bg={isActive ? useColorModeValue("gray.200", "gray.700") : ''}
    >
      <HStack>
        <Image
          src='/images/star.png'
          alt="étoile"
          width="17"
          height="16"
        />
        <Box>{children}</Box>
      </HStack>
    </Link>
  </NextLink>
);

const NavHomeLink = () => (
  <NextLink href="/" passHref>
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      <AiFillHome />
    </Link>
  </NextLink>
);

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const oLinks = JSON.parse(Links);
  const router = useRouter();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box></Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavHomeLink />
              {oLinks.links.map((link: any) => (
                <NavLink key={link.name} url={link.url} isActive={router.pathname === link.url}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <NavHomeLink />
              {oLinks.links.map((link: any) => (
                <NavLink key={link.name} url={link.url} isActive={router.pathname === link.url}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
