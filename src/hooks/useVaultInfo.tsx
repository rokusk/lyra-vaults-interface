import { getDefaultProvider } from '@ethersproject/providers'
import { useEffect, useMemo, useState } from 'react'
import { whitelistedVaults, trustedRoles, unknownPerson, assets } from '../constant'

/**
 * hooks that returns all the apr information, given a vault address
 * @param address 
 * @returns 
 */
export function useVaultInfo(address: string) {
  
  const vault = whitelistedVaults.find(v => v.address === address)


  const [ownerAddress, setOwnerAddress] = useState('')
  const [assetAddress, setAssetAddress] = useState('')
  
  const ownerEntity = useMemo(() => {
    return trustedRoles.find(person => person.address === ownerAddress) || unknownPerson
  }, [vault?.address, ownerAddress])

  const asset = useMemo(() => {
    return assets.find(asset => asset.address === assetAddress)
  }, [vault?.address, ownerAddress])


  useEffect(() => {
    async function fetchVaultData() {
      // mock address
      if (address === '0x331cf6e3e59b18a8bc776a0f652af9e2b42781c5') {
        setOwnerAddress('0x59672d112d680ce34c20ff1507197993cc0ba430')
        setAssetAddress('0xe405de8f52ba7559f9df3c368500b6e6ae6cee49')
      } else {
        setOwnerAddress('0xBF3b8aa5d3a620DcD7F3eed3Dd067AC693367910')
        setAssetAddress('0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9')
      }
      
    }
    fetchVaultData()
  }, [address])

  return { ownerEntity, ownerAddress, asset }
}