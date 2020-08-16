import Head from 'next/head'
import NextLink from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Heading, Link, Flex } from '@chakra-ui/core'

export default function Index() {
  return (
    <div className="mainDiv">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Freelancing Web Developer</title>
      </Head>
      <Header />
      <Flex flexDirection="column" alignItems="center">
        <div>
          <Heading as="h1" size="2xl" color="#1a1a1a" paddingBottom="10px">
            Welcome. I'm Matt, a Freelance Web Developer
          </Heading>
          <Heading
            as="h3"
            size="lg"
            color="#1a1a1a"
            paddingBottom="14px"
            textAlign="center"
          >
            This is the Home Page for{' '}
            <NextLink href="/" passHref>
              <Link>freelancingweb.dev</Link>
            </NextLink>
          </Heading>
        </div>
        <div className="mac-img">
          <img src="img/macbookPro.jpg" alt="Macbook Pro" />
          <style jsx>
            {`
              .mac-img {
                text-align: center;
              }
              img {
                margin: 5px auto 25px;
                border-radius: 8px;
                max-width: 100%;
              }
            `}
          </style>
        </div>
      </Flex>
      <Footer />
    </div>
  )
}
