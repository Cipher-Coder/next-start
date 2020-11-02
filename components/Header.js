import { Box, Flex, Link, Image, Text } from '@chakra-ui/core'

const NavLink = ({ children, ...props }) => (
  <Link px={2} color="white" {...props}>
    {children}
  </Link>
)

function Header() {
  return (
    <Flex
      bg="tomato"
      w="100%"
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Image src="img/logo3.png" size={30} />
        <Text pl={3} color="white">
          Freelancing Web Developer
        </Text>
      </Flex>
      <Box>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </Box>
    </Flex>
  )
}

export default Header
