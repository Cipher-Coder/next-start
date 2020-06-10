const sgMail = require('@sendgrid/mail')

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { email, message } = req.body

  const content = {
    to: 'matthew@mattaz.com',
    from: email,
    subject: `New Message from - ${email}`,
    text: message,
    html: `<p>${message}</p>`,
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent Successfully!')
  } catch (error) {
    console.log('Error: ', error)
    res.status(400).send('Message not Sent!')
  }
}
