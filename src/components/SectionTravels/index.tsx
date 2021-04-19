import { SimpleGrid } from '@chakra-ui/react';
import { Travels } from './travels';

export function SectionTravel() {
  return (
    <SimpleGrid maxW={1160} w="100%" h={145} columns={[2,5]} spacing={10}>
      <Travels icon="cocktail.svg" name="vida noturna" />
      <Travels icon="surf.svg" name="praia" />
      <Travels icon="building.svg" name="moderno" />
      <Travels icon="museum.svg" name="clássico" />
      <Travels icon="earth.svg" name="e mais..." />
    </SimpleGrid>
    )
  }