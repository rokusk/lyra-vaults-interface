export const Menu = {
    variants: {
      // Make a variant, we'll call it `base` here and leave it empty
      base: {},
      dropdown: {
        border: "hidden",
        backgroudColor: 'brand.400'
      }
    },
    defaultProps: {
      // Then here we set the base variant as the default
      variant: 'base'
    }
  }