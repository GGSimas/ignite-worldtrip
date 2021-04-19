import { Flex, Box,Heading, Text, Img, useBreakpointValue } from "@chakra-ui/react"

interface BannerProps {
  urlImage?: string;
}

export function Banner({ urlImage }: BannerProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex w="100vw" h={335} >
      <Box
        backgroundImage={`url(${urlImage ? urlImage : 'images/Background.svg' })`}
        backgroundPosition="center"
        bgRepeat="no-repeat"
        w="100%"
        bgSize="cover"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        p={["6", "8"]}
      >
        {!urlImage && (
          <>
            <Box>
              <Heading fontSize="2.4rem" color="white" fontWeight="600" lineHeight="3.6rem">
                5 Continentes,<br />
                Infinitas possibilidades.
              </Heading>

              <Text fontSize="1.33rem" color="gray.355" fontWeight="400" lineHeight="2rem">
                Chegou a hora de tirar do papel a viagem que você <br />
                sempre sonhou.
              </Text>
            </Box>

              {!!isWideVersion && (
                <Img src="images/Airplane.svg" alt="web trip air plane" />
              )}
          </>
        )}
      </Box>
      
    </Flex>
  );
}