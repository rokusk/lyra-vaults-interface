import { Person } from "../types"

export const trustedRoles: Person[] = [
    {
        name: 'mjs',
        address: '0xBF3b8aa5d3a620DcD7F3eed3Dd067AC693367910', // faked!
        icon: 'https://pbs.twimg.com/profile_images/1502080685636714499/J0SlTu6X_400x400.jpg'
    },
    {
        name: 'josh',
        address: '',
        icon: 'https://pbs.twimg.com/profile_images/1508749846097784835/hU_b_ZJ__400x400.jpg'
    },
    {
        name: 'polynomial team',
        address: '0x59672d112d680ce34c20ff1507197993cc0ba430',
        icon: 'https://earn.polynomial.fi/logo.svg'
    },
    
]

export const unknownPerson: Person = {
    name: 'Unkown',
    address: '',
    icon: 'https://i.pinimg.com/280x280_RS/b6/04/39/b60439ac80d936ac726f177c9357cb34.jpg'
}