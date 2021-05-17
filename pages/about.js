import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="mainDiv">
      <div>
        <Navbar />
        <h1>What we are about...</h1>
        <h3>
          This is where I tell about where and how all this was put together.
        </h3>
        <style jsx>{`
          h1 {
            text-align: center;
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
      <div className="webDev-img">
        <img src="img/webDev.jpg" alt="Web Development" />
        <style jsx>
          {`
            .webDev-img {
              text-align: center;
            }
            img {
              margin: 5px auto 155px;
              border-radius: 8px;
            }
          `}
        </style>
      </div>
      <Footer />
    </div>
  )
}
