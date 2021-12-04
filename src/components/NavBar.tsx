import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar, Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack,
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { ReactNode } from "react";
import { AiFillHome } from "react-icons/ai";
import fetchJson from "../lib/fetchJson";
import useUser from "../lib/useUser";

interface NavItem {
  label: string;
  url: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Formations",
    url: "/formations",
  },
  {
    label: "Réseau",
    url: "/reseau",
  },
  {
    label: "Ludothèque",
    url: "/ludotheque",
  },
  {
    label: "Qui sommes nous",
    url: "/about",
  },
  {
    label: "Contact",
    url: "/contact",
  },
  {
    label: "Liens",
    url: "/liens",
  },
];

const NavLink = ({
  children,
  url,
  isActive,
}: {
  children: ReactNode;
  url: string;
  isActive: boolean;
}) => (
  <NextLink href={url} passHref>
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "gray.200",
      }}
      bg={isActive ? "gray.200" : ""}
    >
      <HStack>
        <Image src="/images/star.png" alt="étoile" width="17" height="16" />
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
        bg: "gray.200",
      }}
    >
      <AiFillHome />
    </Link>
  </NextLink>
);

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, mutateUser } = useUser();
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
              {NAV_ITEMS.map((navItem: NavItem) => (
                <NavLink
                  key={navItem.label}
                  url={navItem.url}
                  isActive={router.pathname === navItem.url}
                >
                  {navItem.label}
                </NavLink>
              ))}
            </HStack>
          </HStack>

          {user?.isLoggedIn === true && (
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    bg="teal.500"
                  />
                </MenuButton>

                <MenuList>
                  <MenuItem onClick={async (e) => {
                      e.preventDefault();
                      router.push("/profile");
                    }}>
                      Profile
                  </MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem
                    onClick={async (e) => {
                      e.preventDefault();
                      mutateUser(
                        await fetchJson("/api/logout", { method: "POST" }),
                        false,
                      );
                      router.push("/login");
                    }}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          )}
          {(!user || user?.isLoggedIn === false) && (

              <Stack
                flex={{ base: 1, md: 0 }}
                justify={"flex-end"}
                direction={"row"}
                spacing={6}
              >
                <NextLink href="/login">
                  <Button
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"pink.400"}
                    _hover={{
                      bg: "pink.300",
                    }}
                  >
                    Login
                  </Button>
                </NextLink>
              </Stack>  
          )}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <NavHomeLink />
              {NAV_ITEMS.map((navItem: NavItem) => (
                <NavLink
                  key={navItem.label}
                  url={navItem.url}
                  isActive={router.pathname === navItem.url}
                >
                  {navItem.label}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
