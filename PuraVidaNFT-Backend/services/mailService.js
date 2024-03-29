const nodemailer = require("nodemailer");

const getTransporter = function () {
    let transporter;
    transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    return transporter;
  };
  
  exports.sendRecoveryCodeEmail = async (userEmail, randomToken) => {
    let transporter = getTransporter();
    await transporter.sendMail({
      from: "puravidanft@mailinator.com",
      to: userEmail,
      subject: "Código de recuperación",
      text: `Utilice este código para recuperar su contraseña: ${randomToken}`,
      html: `Utilice este código para recuperar su contraseña: <strong>${randomToken}</strong>`,
    });
  };