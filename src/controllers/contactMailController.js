const sendContactMail = require("../utils/sendContactMail");
const APIError = require("../utils/error");
const Response = require("../utils/response");
const contactMail = async (req, res) => {
  const mailOptions = {
    from: req.body.emailAddress,
    to: process.env.EMAIL_USER,
    subject: "From Exclusive Contact Form",
    html: `<html>
            <body>
              <div>Message : ${req.body.message}</div>
              <div>Phone : ${req.body.phone}</div>
              <div>Email Address : ${req.body.emailAddress}</div>
            </body>
          </html>`,
  };
  const mailResult = await sendContactMail(mailOptions);
  if (!mailResult) {
    throw new APIError("Email could not be sent, please try again", 400);
  } else {
    new Response(null, "Email was sent successfully").success(res);
  }
};

module.exports = { contactMail };
