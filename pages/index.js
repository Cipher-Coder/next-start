import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <div className="mainDiv">
      <div>
        <Header />
        <h1>Hello World from Next.js!!</h1>
        <h3>This is the Home Page</h3>
        <style jsx>{`
          h1 {
            text-align: center;
            color: red;
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
            }
          `}
        </style>
      </div>
      <Footer />
    </div>
  )
}
