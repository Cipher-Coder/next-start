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
          .mainDiv {
            text-align: center;
          }
        `}</style>
      </div>
      <Footer />
    </div>
  )
}
