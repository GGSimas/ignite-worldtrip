import { Stack, Box, Img, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelsProps {
  icon: string;
  name: string;
}
export function Travels({ icon, name }: TravelsProps) {
  const isWideVision = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Stack
      spacing={4}
      direction="column"
    >
    <Box display="flex" flexDirection={["row", "column"]} alignItems="center" justifyItems="center" m="auto" >
      <Box mr="2">
        {isWideVision ? 
        (<Img src={`images/${icon}`} alt={icon} />) 
        : (<Img src="images/Ellipse.svg" alt={icon} />)}
      </Box>
        
        <Box as="span" fontSize="1.4rem" fontWeight="600">
          {name}
        </Box>
      </Box>
    </Stack>
  )
}