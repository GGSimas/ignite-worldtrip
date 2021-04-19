import { Flex, Heading } from '@chakra-ui/react'

export interface ContinentSlideItemProps {
  continent: string;
  description: string;
}


export function ContinentSlideItem({ continent, description }: ContinentSlideItemProps) {

  return (
    <Flex
        w="100%"
        h={["215px","415px"]}
        bgImage={`url(slides/${continent}.png)`}
        backgroundPosition="center"
        bgRepeat="no-repeat"
        fill="cover"
    >
      <Flex
        w="100%"
        alignItems="center"
        justify="center"
      >
        <Heading as="h1" color="white">{description}</Heading>
      </Flex>
    </Flex>
  )
}