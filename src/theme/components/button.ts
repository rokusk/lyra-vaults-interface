export const Button = {
    baseStyle: {
        backgroundColor: "#035C91",
        borderRadius: "10px",
        padding: 6,
        margin: 2.5,
        _hover: {
          bg: '#121212'
        },
        _active: {
            bg: '#121212'
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