import { Text, Link } from '@chakra-ui/react'
import NextLink, { LinkProps } from 'next/link'
import { FC } from 'react'

export const NavItem: FC<LinkProps & {children: any}> = ({ children, href }) => (
  <NextLink href={href} passHref>
    <Link style={{ color: '#05c99b', cursor: 'pointer' }}>
      <Text
        color="#fff"
        fontSize={[16, 16, 16, 18]}
        fontWeight={600}
        display="block"
        width="auto"
      >
        {children}
      </Text>
    </Link>
  </NextLink>
)

export const NavDrawerItem: FC<LinkProps & { onClick: () => void, children: any }> = ({
  children,
  href,
  onClick
}) => (
  <NextLink href={href} passHref>
    <Link
      onClick={onClick}
      style={{
        color: '#fff',
        textDecoration: 'none',
        outline: 'none',
        boxShadow: 'none'
      }}
    >
      <Text
        color="#fff"
        fontSize={25}
        py={2}
        px={2}
        style={{ borderRadius: 25 }}
        fontWeight={600}
        display="block"
        width="auto"
      >
        {children}
      </Text>
    </Link>
  </NextLink>
)
