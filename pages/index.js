import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <div className="mainDiv">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Freelancing Web Developer</title>
      </Head>
      <div>
        <Header />
        <h1>Welcome. I'm Matt, a Freelance Web Developer</h1>
        <h3>
          This is the Home Page for{' '}
          <a
            href="https://freelancingweb.dev"
            rel="nofollow noopener"
            target="_blank"
          >
            freelancingweb.dev
          </a>
        </h3>
        <style jsx>{`
          h1 {
            text-align: center;
            color: #1a1a1a;
            font-size: 3em;
          }
          h3 {
            text-align: center;
          }
          .mainDiv {
            text-align: center;
          }
        `}</style>
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
      <Footer />
    </div>
  )
}
