var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'guguinha.oliveira80@gmail.com',
    pass: 'vaxq pcpp swbz dqwy'
  }
});

var mailOptions = {
  from: 'guguinha.oliveira80@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Sending Email using Node.js',
  text: 'vaxq pcpp swbz dqwy'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 