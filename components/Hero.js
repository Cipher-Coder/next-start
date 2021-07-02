import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {
  return (
    <Flex
      align="center"
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column', md: 'row' }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
      mt={10}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: '60%', md: '40%' }}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={['center', 'center', 'left', 'left']}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {subtitle}
        </Heading>
        <Link href={ctaLink}>
          <Button
            colorScheme="orange"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
          >
            {ctaText}
          </Button>
        </Link>
        <Text
          fontSize="xs"
          mt={2}
          textAlign="center"
          color="primary.800"
          opacity="0.6"
        >
          No strings attached.
        </Text>
      </Stack>
      <Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
        <Image src={image} size="100%" />
      </Box>
    </Flex>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
}

Hero.defaultProps = {
  title: 'Unedited Web Design & Development',
  subtitle:
    'Unedited Web Design will get you up and running with a custom website faster and cheaper than the rest! Call for a consultation!',
  image: 'img/singleDev.png',
  ctaText: 'Get in touch',
  ctaLink: '/contact',
}
