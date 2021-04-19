import { Box, Heading, Text, Popover } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi'
interface BlockProps {
  title: string;
  description: string;
  tooltip?: string;
}

export function Block({ title, description, tooltip }: BlockProps) {
  return (
    <Box
      display="flex"
      flexDir="column"
      w={110}
      h={100}
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        color="yellow.450"
        fontWeight="600"
        fontSize="1.6rem"
        lineHeight="2.4rem"
      >
        {title}
      </Heading>
      <Text textAlign="center" display="flex" flexDirection="row" fontWeight="bold">
        {description}
      </Text>
    </Box>
  );
}