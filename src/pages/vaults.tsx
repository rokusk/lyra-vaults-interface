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
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
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
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              All Assets
            </MenuButton>
            <MenuList>
              <MenuItem>sETH</MenuItem>
              <MenuItem>sUSD</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              All Type
            </MenuButton>
            <MenuList>
              <MenuItem>{VaultType.COVERED_CALL}</MenuItem>
              <MenuItem>{VaultType.NAKDED_CALL}</MenuItem>
              <MenuItem>{VaultType.SHORT_PUT}</MenuItem>
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