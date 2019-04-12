const MailConfig = require('../email/config')
const handlebars = require('nodemailer-express-handlebars')
require('dotenv').config();

module.exports.send = (req, res, next) => {
  const transport = MailConfig.SMTPTransport
  const payload = req.body

  transport.use('compile', handlebars({
    viewEngine: {
      extName: '.hbs',
      partialsDir: 'server/email',
      layoutsDir: 'server/email',
      defaultLayout: 'contact.hbs'
    },
    viewPath: 'server/email',
    extName: '.hbs'
  }))

  const options = {
    from: MailConfig.recipient,
    to: payload.email,
    cc: MailConfig.recipient,
    subject: '[CEL] Thank you for your inquiry',
    template: 'contact',
    context: {
      name: payload.name,
      email: payload.email,
      address: payload.message
    }
  }

  transport.sendMail(options, (error, info) => {
    if (error) {
      console.log(error)
      res.json(error)
    }
    console.log('email is send')
    console.log(info)
    res.json(info)
  })
}
