import Navbar from '../components/Navbar'
import Heading from '../components/Heading'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className="mainDiv">
      <div>
        <Navbar />
      </div>
      <div className="contact_heading">
        <Heading textContent="Get in touch with a Freelance Web Developer Today!!" />
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
