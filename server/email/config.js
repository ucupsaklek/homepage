const nodemailer = require('nodemailer')

module.exports.SMTPTransport = nodemailer.createTransport({
  host: process.env.SMTP_SERVICE_HOST,
  port: process.env.SMTP_SERVICE_PORT,
  secure: process.env.SMTP_SERVICE_SECURE == 'true',
  debug: process.env.NODE_ENV == 'development',
  auth: {
    user: process.env.SMTP_USER_NAME,
    pass: process.env.SMTP_USER_PASSWORD
  }
})

module.exports.recipient = process.env.COMPANY_CONTACT_EMAIL
