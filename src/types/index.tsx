
export enum VaultType {
    COVERED_CALL = "Covered Call",
    NAKDED_CALL = "Naked Call",
    SHORT_PUT = 'Short Put',
    LONG_CALL = 'Long Call',
    LONG_PUT = 'Long Put'
}

// showing vault creator and keeper info
export type Person = {
    name: string,
    icon: string,
    address: string
}

export type WhitelistedVault = {
    address: string,
    name: string,
    description: string,
    type: VaultType
}

export type Asset = {
    address: string,
    name: string,
    symbol: string,
    icon: string
}