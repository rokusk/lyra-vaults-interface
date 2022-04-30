export const Link = {
  variants: {
    // Make a variant, we'll call it `base` here and leave it empty
    base: {
    },
    noHover: {
      _hover: {
        textDecoration: 'none',
      }
    }
  },
  defaultProps: {
    // Then here we set the base variant as the default
    variant: 'base'
  }
}