import React from 'react'

const footerStyles = {
  textAlign: `center`,
  backgroundColor: `#333`,
  color: `#e2e2e2`,
  padding: `.9rem`,
  fontSize: `.75rem`,
  width: `100%`,
}

const Footer = () => (
  <footer style={footerStyles}>
    © {new Date().getFullYear()}{' '}
    <a href="https://mattaz.com">Mattaz Web Design</a>, Built with{' '}
    <a href="https://nextjs.org">NextJS</a>
  </footer>
)

export default Footer
