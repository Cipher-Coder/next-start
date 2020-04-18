import Header from '../components/Header'

export default function Index() {
  return (
    <div className="mainDiv">
      <Header />
      <h1>Hello World from Next.js!!</h1>
      <h3>This is the Home Page</h3>
      <style jsx>{`
        h1 {
          color: red;
          font-size: 3em;
        }
        .mainDiv {
          text-align: center;
        }
      `}</style>
    </div>
  )
}
