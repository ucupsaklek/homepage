const MailConfig = require('../email/config');
const handlebars = require('nodemailer-express-handlebars');

module.exports.send = (req, res, next) => {
  const transport = MailConfig.SMTPTransport
  const payload = req.body

  transport.use('compile', handlebars({
    viewEngine: {
      extName: '.hbs',
      partialsDir: 'server/email',
      layoutsDir: 'server/email',
      defaultLayout: 'contact.hbs',
    },
    viewPath: 'server/email',
    extName: '.hbs'
  }));

  const options = {
    from: `\"${payload.name}\" <${payload.name}>`,
    to: 'mucktar.pakpahan@gmail.com',
    subject: 'Website Contact',
    template: 'contact',
    context: {
      name: payload.name,
      email: payload.name.email,
      address: payload.name.message
    }
  };

  transport.sendMail(options, (error, info) => {
    if(error) {
      console.log(error)
      res.json(error)
    }
    console.log("email is send")
    console.log(info)
    res.json(info)
  });
}
