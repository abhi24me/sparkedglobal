import express from 'express'
import dotenv from 'dotenv'
import { Resend } from 'resend'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000
const resendApiKey = process.env.RESEND_API_KEY
const fromEmail = process.env.RESEND_FROM_EMAIL
const toEmail = process.env.RESEND_TO_EMAIL

if (!resendApiKey || !fromEmail || !toEmail) {
  console.error('Missing RESEND_API_KEY, RESEND_FROM_EMAIL, or RESEND_TO_EMAIL in .env')
  process.exit(1)
}

const resend = new Resend(resendApiKey)

app.use(express.json())

app.post('/api/send-quote', async (req, res) => {
  try {
    const { from_name, from_email, phone, interest, message } = req.body
    if (!from_name || !from_email || !phone || !message) {
      return res.status(400).json({ error: 'Missing required form fields.' })
    }

    const html = `
      <h1>New Quote Request</h1>
      <p><strong>Name:</strong> ${from_name}</p>
      <p><strong>Email:</strong> ${from_email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Interest:</strong> ${interest}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: 'New Quote Request from Website',
      html,
      reply_to: from_email,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Resend email error:', error)
    return res.status(500).json({ error: 'Failed to send email.' })
  }
})

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})