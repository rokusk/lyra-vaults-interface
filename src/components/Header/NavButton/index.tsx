import { Button, ButtonProps } from '@chakra-ui/react'
import { FC } from 'react'

export const NavButton: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <Button
      className="nav-button"
      backgroundColor="brand.400"
      borderRadius="25px"
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
