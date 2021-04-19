import { Flex, Box, Img, Stack, Text } from '@chakra-ui/react';

interface CitiesProps {
  url: string;
  city: string;
  country: string;
}

export function Cities({ url, city, country }: CitiesProps) {
  return (
    <Flex borderWidth="1px" borderColor="yellow.450" w={250} borderRadius="4px">
      <Stack spacing="2">
        <Img src={url} alt={city} w="100%" h={150}/>
        <Box p="2">
          <Text fontSize="1.2rem">{city}</Text>
          <Text color="gray.350" fontSize="1rem">{country}</Text>
        </Box>
      </Stack>
    </Flex>
  )
}