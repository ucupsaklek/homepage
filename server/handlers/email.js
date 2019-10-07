const path = require('path')
const fs = require('fs')
const moment = require('moment')
const MailConfig = require('../email/config')
const handlebars = require('handlebars')
require('dotenv').config()

module.exports.send = (req, res) => {
  try {
    const payload = req.body
    console.log('[' + moment().format('YYYY-MM-DD HH:mm:ss Z') + ']', 'payload:', payload)

    const fileName = '/../email/contact.hbs'
    const replacements = {
      name: payload.name,
      email: payload.email,
      message: payload.message
    }
    const subject = '[CEL] Thank you for your inquiry'

    sendMail(res, fileName, replacements, payload.email, subject)
  } catch (e) {
    console.log(e)
  }
}

module.exports.subscribe = (req, res) => {
  try {
    const payload = req.body
    console.log('[' + moment().format('YYYY-MM-DD HH:mm:ss Z') + ']', 'payload:', payload)

    const fileName = '/../email/subscribe.hbs'
    const replacements = {
      email: payload.email
    }
    const subject = '[CEL] Thank you for subscribing our news'

    sendMail(res, fileName, replacements, payload.email, subject)
  } catch (e) {
    console.log(e)
  }
}

function sendMail (res, fileName, replacements, toAddr, subject) {
  const transport = MailConfig.SMTPTransport

  fs.readFile(path.join(__dirname, fileName), { encoding: 'utf-8' }, (err, file) => {
    if (err) throw Error
    const template = handlebars.compile(file)
    const fileToSend = template(replacements)
    const options = {
      from: MailConfig.recipient,
      to: toAddr,
      cc: MailConfig.recipient,
      bcc: process.env.EMAIL_BCC,
      subject: subject,
      html: fileToSend
    }

    transport.sendMail(options, (error, info) => {
      if (error) {
        console.log(error)
        res.status(500).json(error)
      } else {
        console.log('email is send:', info)
        res.json(info)
      }
    })
  })
}
