const nodeMailer = require("nodemailer");
const sendContactMail = async (mailOptions) => {
  var transporter = nodeMailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const info = await transporter.sendMail(mailOptions);
  return info.envelope.from === mailOptions.from;
};

module.exports = sendContactMail;
