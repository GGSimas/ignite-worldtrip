import { GetServerSideProps } from 'next'
import { Flex, SimpleGrid, Stack, Text, HStack, Heading, Box } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import { Block } from '../components/Block';
import { Cities } from '../components/Cities';

interface Cidades100 {
  id: number;
  cidade: string;
  pais: string;
  imagem: string;
}
interface Destino {
  id: number;
  description: string;
  name: string;
  paises: string;
  cidades100: Cidades100[];
}

interface ContinenteProps {
  continente: string;
  destinos: Destino[];
}

export default function Continent({ continente, destinos }: ContinenteProps) {
  return (
    <Flex w="100%" flexDir="column">
        <Banner urlImage={`slides/${continente}.png`} />
        {destinos.map(destino => (
          <>
            <SimpleGrid
              w="100%"
              key={destino.id}
              minChildWidth="300px"
              p={[6, 12]}
              spacing={[6,8]}
            >
              <Box w={["100%", 1250]} mx="auto" p={[2, 8]}>
                <Flex
                  flex="1"
                  w={["100%",
                  1220]}
                  flexDir={["column",
                  "row"]}
                  justify="space-around"
                  alignItems="center"
                >
                  <Text key={destino.id} w={["100%", 500]} textAlign="justify">{destino.description}</Text>
                  <HStack>
                      <Block title={destino.paises} description="paises"/>
                      <Block title="60" description="linguas"/>
                      <Block title={String(destino.cidades100.length)} description="cidades +100"/>
                  </HStack>
                </Flex>
              </Box>
            </SimpleGrid>

            <Heading mx="auto" mb={6}>Cidades 100+</Heading>
            <Flex w={["100%", 1200]} flexDir={["column", "row"]} mx="auto" >
              <SimpleGrid
                w="100%"
                minChildWidth="240px"
                columns={4}
                spacing={1}
                mb={8}
              >
                  {destino.cidades100.map(cidade => (
                      <Cities key={cidade.id} url={cidade.imagem} city={cidade.cidade} country={cidade.pais} />
                  ))}
              </SimpleGrid>
            </Flex>
          </>
      ))}
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const { continente } = params;
  
  const response = await fetch(`http://localhost:3333/continentes?slug=${continente}`);
  const destinos = await response.json();
  return {
    props: {
      continente,
      destinos
    }
  }
}