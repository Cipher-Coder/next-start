import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <div className="mainDiv">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Freelancing Web Developer</title>
      </Head>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}
