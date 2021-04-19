import Head from 'next/head'
import { Flex, Divider, Stack, Text } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { SectionTravel } from '../components/SectionTravels'
import { ContinentSLider } from '../components/ContinentSlider'

const continentes = [
  {continent: "AmericaNorte", description: "America do Norte"},
  {continent: "AmericaSul", description: "America do Sul"},
  {continent: "Africa", description: "Africa"},
  {continent: "Asia", description: "Asia"},
  {continent: "Oceania", description: "Oceania"},
  {continent: "Europa", description: "Europa"},
]

export default function Home() {
  return (
    <Flex w="100vw" h="100%" flexDirection="column" alignItems="center" justify="center">
      <Head>
        <title>Worldtrip</title>
      </Head>
      <Stack spacing={10} align="center" w={["100%", "100vw"]}>
        <Banner />
        <SectionTravel />
        <Divider width="100px" h={50} borderColor="black"/>
        <Text textAlign="center" fontSize="2xl" fontWeight="500" lineHeight="3.6rem">Vamos nessa?<br /> Então escolha seu continente!</Text>
        <ContinentSLider continentes={continentes}/>
      </Stack>
    </Flex>
  )
}
