import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/Contact/ContactForm'

export default function Contact() {
  return (
    <div className="mainDiv">
      <div>
        <Header />
        <h1>Get in touch with The Freelancing Web Dev!</h1>
        <style jsx>{`
          h1 {
            text-align: center;
            font-size: 3em;
          }
          .mainDiv {
            text-align: center;
          }
        `}</style>
      </div>
      <div className="hardWork-img">
        <img src="img/hardWork.jpg" alt="Web Development" />
        <style jsx>
          {`
            .hardWork-img {
              text-align: center;
            }
            img {
              margin: 5px auto 25px;
              border-radius: 8px;
            }
          `}
        </style>
      </div>
      <ContactForm />
      <Footer />
    </div>
  )
}
