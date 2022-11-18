const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        //"smtp.office365.com"
        host:  "smtp.mailtrap.io",
        //587
        port: 2525,
        auth: {
          //"tucorreomicrosoft"
          user: "28296907788993",
          pass: "900c123337c3b3"
        }
      });
    const mensaje={
      //<tuCorreoMicrosoft>
        from: "Chronoz Technologies Store <noreply@negrishop.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;