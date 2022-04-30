import { Button, ButtonProps } from '@chakra-ui/react'
import { FC } from 'react'

export const NavButton: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <Button
      className="nav-button"
      backgroundColor="#035C91"
      borderRadius="25px"
      _hover={{
        bg: '#121212'
      }}
      _active={{
        bg: '#121212'
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
