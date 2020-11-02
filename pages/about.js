import Header from '../components/Header'
import Footer from '../components/Footer'
import Calendar from '../components/Calendar'

export default function About() {
  return (
    <div className="mainDiv">
      <div>
        <Header />
        <h1>What we are about...</h1>
        <h3>This is where I tell about my freelancing self!</h3>
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
      <div className="my-calendar" style={{ marginBottom: 35 }}>
        <Calendar />
      </div>
      <Footer />
    </div>
  )
}
