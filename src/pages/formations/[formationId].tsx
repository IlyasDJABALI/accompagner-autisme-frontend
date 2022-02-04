import {
  ChakraProvider,
  Box,
  Link,
  theme,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { InferGetStaticPropsType } from "next";
import { server } from '../../config';
import internal from "stream";
import { useRouter } from 'next/router';
import formations from "../api/formations";
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';


type FormationDetails = {
  titre: string;
  date: string;
  id: number;
  objectif: string;
  programme: string;
  public: string;
  tarif: number;
  adresse: string;
  intervenante: string;
};

type Formation = {
  formation: FormationDetails;
}

interface IParams extends ParsedUrlQuery {
  formationId: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { formationId } = context.params as IParams
  console.log("id = "+formationId)
  const res = await fetch(`${server}/api/formations/${formationId}`);
  const data: Formation = await res.json();

  
  console.log(`${server}/api/formations/${formationId}`)
  console.log(data.formation.id)

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
    <Box
      fontWeight='semibold'
      as='h2'
      p={3}
    >
      {data && data.formation.titre} : le {data && data.formation.date}
    </Box>

    <Box p={3}>
      Objectif(s) : {data && data.formation.objectif}
    </Box>

    <Box p={3}>
      Programme : {data && data.formation.programme}
    </Box>

    <Box p={3}>
      Public : {data && data.formation.public}
    </Box>

    <Box p={3}>
      Intervenante : {data && data.formation.intervenante}
    </Box>

    <Box p={3}>
      Tarif : {data && data.formation.tarif}€ par personne.
    </Box>
  </ChakraProvider>
  );
}


export async function getStaticPaths() {
  return {
    paths: [
      { params: { formationId: '1' } },
      { params: { formationId: '2' } },
      { params: { formationId: '3' } }
    ],
    fallback: true // false or 'blocking'
  };
}


export default LearningPage;