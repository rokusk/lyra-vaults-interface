import type { NextPage } from 'next'

import { Heading, Flex } from '@chakra-ui/layout'
import VaultBox from '../components/VaultBox'
import { Asset, VaultType } from '../types'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { whitelistedAssets, whitelistedVaults } from '../constant'
import { useMemo, useState } from 'react'

const Vaults: NextPage = () => {

  const [selectedAsset, setSelectedAsset] = useState<Asset|undefined>(undefined)

  const [selectedType, setSelectedType] = useState<VaultType|undefined>(undefined)

  const vaultsToShow = useMemo(() => {
    return whitelistedVaults.filter(v => {
      // filter by type
      return selectedType === undefined || v.type === selectedType
    }).filter(v => {
      return selectedAsset === undefined || v.asset.address === selectedAsset.address
    })
  }, [selectedType, selectedAsset?.address]) 

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
              {selectedAsset?.symbol || 'All Assets'}
            </MenuButton>
            <MenuList 
              border="hidden"
              bg='brand.400'
            >
              <MenuItem _hover={{bg:'brand.300'}} onClick={() => { setSelectedAsset(undefined) }  }>All Assets</MenuItem>
              {whitelistedAssets.map((asset) => {
                return <MenuItem _hover={{bg:'brand.300'}} onClick={() => { setSelectedAsset(asset) }  }>{asset.symbol}</MenuItem>
              })}
            </MenuList>
          </Menu>

          <Menu variant="dropdown">
            <MenuButton
              as={Button}
              _active={{bg: 'brand.300'}}
              rightIcon={<ChevronDownIcon />}
            >
              {selectedType || 'All Types'}
            </MenuButton>
            <MenuList 
              border="hidden"
              bg='brand.400'
            >
              <MenuItem _hover={{bg:'brand.300'}} onClick={() => { setSelectedType(undefined) }  }>All Types</MenuItem>
              {Object.values(VaultType).map(type => {
                return <MenuItem 
                  onClick={() => setSelectedType(type)}
                  _hover={{bg:'brand.300'}}
                >
                  {type}
                </MenuItem>
              })}
            </MenuList>
          </Menu>
        </Flex>

        {vaultsToShow.map(vault => {
          return <VaultBox vault={vault} key={vault.address}/>
        })}

      </Flex>
    </Flex>
  )
}

export default Vaults
