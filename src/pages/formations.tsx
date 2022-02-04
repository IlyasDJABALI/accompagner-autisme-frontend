import {
  ChakraProvider,
  Table,
  Thead,
  Tbody,
  Link,
  Tr,
  Th,
  Td,
  theme,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { InferGetStaticPropsType } from "next";
import { server } from '../config';
import internal from "stream";
import { ReactNode } from "react";

type Formation = {
  titre: string;
  date: string;
  id: number;
};

type Formations = {
  formations: Formation[]
};

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
    <Box>{children}</Box>
    </Link>
  </NextLink>
);

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/formations`);
  const data: Formations = await res.json();

  console.log(data.formations)

  return {
    props: {
      data,
    },
  };
};

function LearningsPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
  <ChakraProvider theme={theme}>
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Titre</Th>
          <Th>Date</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.formations.map((formation) => (
          <Tr key= {formation.id}>
            <Td>
              <NextLink key= {formation.id} href= {'/formations/'+ formation.id} passHref>
                <Link>{formation.titre}</Link>
              </NextLink>
            </Td>
            <Td>{formation.date}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </ChakraProvider>
  );
}


export default LearningsPage;
