import { CheckCircleIcon } from '@chakra-ui/icons'

import { Heading, Box, Flex, Text } from '@chakra-ui/layout'
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Tag,
  Avatar
} from '@chakra-ui/react'


import { WhitelistedVault } from '../../types'
import Link from 'next/link'
import { useVaultInfo } from '../../hooks/useVaultInfo'

const VaultBox = ({ vault }: { vault: WhitelistedVault }) => {

  // mock data: get vault info by address
  const APY = Math.random() * 30
  const apyChange = Math.random() * 10 * (Number(APY > 15) ? 1 : -1)

  const TVL = Math.random() * 1000
  const tvlChange = Math.random() * 10 * (Number(TVL > 1000) ? 1 : -1)

  const { ownerEntity, asset } = useVaultInfo(vault.address)

  return (
    <Box w={"60%"} borderWidth='0.5px' borderRadius='lg' overflow='hidden' padding="18" color="white">
      <Flex justifyContent={'space-between'}>
        <Link href={`/vault/${vault.address}`}>
          <div >
            <Heading fontSize={25}>
              {vault.name} <CheckCircleIcon color='#035C91' />
            </Heading>
            <Text paddingBottom={5} color="gray.400">
              {vault.description}
            </Text>
          </div>
        </Link>
        <Tag
          borderRadius='20'
          size="md"
          colorScheme='teal'
          height={5}
        > {vault.type}</Tag>
      </Flex>

      <StatGroup>
        <Stat>
          <StatLabel>TVL</StatLabel>
          <StatNumber>{TVL.toFixed(2)} {asset?.symbol}</StatNumber>
          <StatHelpText>
            <StatArrow type={tvlChange > 0 ? 'increase' : "decrease"} />
            {tvlChange.toFixed(2)}%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Last Week APY</StatLabel>
          <StatNumber>{APY.toFixed(2)}%</StatNumber>
          <StatHelpText>
            <StatArrow type={apyChange > 0 ? 'increase' : "decrease"} />
            {apyChange.toFixed(2)}%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Historical APY</StatLabel>
          <StatNumber>{(APY*0.8).toFixed(2)}%</StatNumber>
          <StatHelpText>
            <StatArrow type={apyChange > 0 ? 'increase' : "decrease"} />
            {apyChange.toFixed(2)}%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Owner</StatLabel>
          <Avatar name={ownerEntity.name} src={ownerEntity.icon} />
        </Stat>

        <Stat>
          <StatLabel>Asset</StatLabel>
          <Avatar name={asset?.symbol} src={asset?.icon} size="md" margin={1} />
        </Stat>

      </StatGroup>
    </Box>
  )
}

export default VaultBox
