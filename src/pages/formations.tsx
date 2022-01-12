import {
  ChakraProvider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  theme,
} from "@chakra-ui/react";
import { InferGetStaticPropsType } from "next";
import { server } from '../config';

type Formation = {
  titre: string;
  date: string;
};

type Formations = {
  formations: Formation[]
};

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

function LearningPage({
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
          <Tr>
            <Td>{formation.titre}</Td>
            <Td>{formation.date}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </ChakraProvider>
  );
}

export default LearningPage;
