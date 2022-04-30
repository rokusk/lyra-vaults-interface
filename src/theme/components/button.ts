export const Button = {
  baseStyle: {
    backgroundColor: "brand.600",
    borderRadius: "8px",
    padding: 6,
    margin: 2.5,
    _hover: {
      bg: 'brand.200',
    },
    _active: {
      bg: 'brand.100',
    },
    a: {
      hover: 'none'
    }
  },
  variants: {
    // Make a variant, we'll call it `base` here and leave it empty
    base: {},
    secondary: {
      //...define other variants        
    }
  },
  defaultProps: {
    // Then here we set the base variant as the default
    variant: 'base'
  }
}