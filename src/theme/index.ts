// theme.js
import { extendTheme } from '@chakra-ui/react'


// Global style overrides
import { styles } from './styles'

// Component style overrides
import { Button } from './components/button'
import { Link } from './components/link'

const overiders = {
  colors: {
    backgroundDark: '#1F1B24',
    brand: {
      100: "#1F1B24", // dark
      200: "#292E3E",
      300: '#324158',
      400: '#44678B',
      500: '#568DBF',
      600: '#5FA0D9',
      700: '#64A9E6',
      900: "#68B2F2", // light
    },
    lyra: {
      100: '#03634D', // dark
      200: "#047D61", 
      300: "#049674",
      600: '#05B088',
      800: '#05B78D',
      900: "#05C99B", // light
    },
  },
  styles: styles,
  fonts: {
    body: 'Andika New Basic, sans-serif',
    heading: 'Andika New Basic, sans-serif'
  },
  components: {
    Button,
    Link
  }
}

export default  extendTheme(overiders)