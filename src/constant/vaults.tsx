import { WhitelistedVault, VaultType } from "../types"
import { sETH, sUSD } from "./assets"

export const whitelistedVaults: WhitelistedVault[] = [
    {
        type: VaultType.COVERED_CALL,
        address: '0x331cf6e3e59b18a8bc776a0f652af9e2b42781c5',
        name: "Delta Short Call",
        description: 'Short Call with delta range 0.1~0.2',
        asset: sETH
    },
    {
        type: VaultType.SHORT_PUT,
        address: '0xfa923aa6b4df5bea456df37fa044b37f0fddcdb4',
        name: "The Gamma Blood",
        description: 'Safe yield generation from Gamma bleeding: short put with low delta',
        asset: sUSD
    },
]