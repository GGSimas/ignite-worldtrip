import { Flex, Box, Spacer} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';

export function Header () {
  const { asPath } = useRouter();

  return (
    <Flex as="header" justify="center" alignItems="center" w="100%" maxW={1440} h={100} m="auto">
      <Box>
        {asPath !== '/' && (
          <Link href="/">
            <a>
              <FiChevronLeft size="24" />
            </a>
          </Link>
        )}
      </Box>
      <Spacer />
      <img src="Logo.svg" alt="world trip logo" />
      <Spacer />
    </Flex>
  )
}