import type { NextPage } from 'next'

import { Heading, Flex, Text, Link } from '@chakra-ui/layout'

const About: NextPage = () => {

  return (
    <Flex
      direction="row"
      width="100%"
      height="90%"
      alignItems="center"
      alignContent="center"
      justifyContent="space-between"
      padding="2rem"
      
    >
      <Flex
        margin={0}
        width="100%"
        height="100%"
        direction="column"
        justifyContent="space-between"
        gap="3rem"
        alignItems="center"
      >
        <Heading>
          About
        </Heading>
        <Text>
          Lyra Vaults is a community hosted frontend to access all option strategies built on top of Lyra.
        </Text>
        
        <Heading style={{ fontSize: 27 }}>
          Who built this?
        </Heading>
        <Text>
        <Link href='https://twitter.com/rokueth' isExternal>Roku</Link> and others ;)
        </Text>
      </Flex>
    </Flex>
  )
}

export default About
