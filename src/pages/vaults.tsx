import type { NextPage } from 'next'

import { Heading, Flex } from '@chakra-ui/layout'
import VaultBox from '../components/VaultBox'
import { VaultType } from '../types'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { whitelistedVaults } from '../constant'

const Vaults: NextPage = () => {

  console.log(`whitelistedVaults`, whitelistedVaults.length)

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
          All Strategies
        </Heading>

        {/* Filters */}
        <Flex>
          <Menu >
            <MenuButton
              as={Button}
              _active={{bg: 'brand.300'}}
              rightIcon={<ChevronDownIcon />}
              
            >
              All Assets
            </MenuButton>
            <MenuList 
              border="hidden"
              bg='brand.400'
            >
              <MenuItem _hover={{bg:'brand.300'}}>sETH</MenuItem>
              <MenuItem _hover={{bg:'brand.300'}}>sUSD</MenuItem>
            </MenuList>
          </Menu>

          <Menu variant="dropdown">
            <MenuButton
              as={Button}
              _active={{bg: 'brand.300'}}
              rightIcon={<ChevronDownIcon />}
            >
              All Type
            </MenuButton>
            <MenuList 
              border="hidden"
              bg='brand.400'
            >
              <MenuItem _hover={{bg:'brand.300'}}>{VaultType.COVERED_CALL}</MenuItem>
              <MenuItem _hover={{bg:'brand.300'}}>{VaultType.NAKDED_CALL}</MenuItem>
              <MenuItem _hover={{bg:'brand.300'}}>{VaultType.SHORT_PUT}</MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        {whitelistedVaults.map(vault => {
          return <VaultBox vault={vault} key={vault.address}/>
        })}

      </Flex>
    </Flex>
  )
}

export default Vaults
