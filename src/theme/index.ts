// theme.js
import { extendTheme } from '@chakra-ui/react'


// Global style overrides
import { styles } from './styles'

// Component style overrides
import { Button } from './components/button'


// Version 1: Using objects
const overiders = {
  colors: {
    backgroundDark: '#1F1B24',
  },
  styles: styles,
  fonts: {
    body: 'Andika New Basic, sans-serif',
    heading: 'Andika New Basic, sans-serif'
  },
  components: {
    Button
  }
}

export default  extendTheme(overiders)