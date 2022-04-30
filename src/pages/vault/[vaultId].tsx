import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { Heading, Flex, Box } from '@chakra-ui/layout'
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
import { useVaultInfo } from '../../hooks/useVaultInfo'
import { whitelistedVaults } from '../../constant'

const Vault: NextPage = () => {
    const router = useRouter()

    const { vaultId } = router.query

    const vault = whitelistedVaults.find(v => v.address === vaultId)

    // get vault details
    const {ownerEntity} = useVaultInfo(vaultId as string)

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
                    {vault ? vault.name : `Vault ${vaultId}`}
                </Heading>
            </Flex>
        </Flex>
    )
}

export default Vault
