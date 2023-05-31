import * as nodemailer from 'nodemailer';

export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      secure: true,
      auth: {
        user: 'joe.underclub@gmail.com',
        pass: 'kwtxycrwjlhiytzg',
      },
    });
  }

  public sendMailToUnder(mail: any): void {
    const mailOptions = {
      from: mail.from,
      to: 'joe.underclub@gmail.com',
      subject: `${mail.person} se quiere comunicar con vos desde Under Club Page`,
      html: `
        <h3>Información</h3>
        <ul>
        <li>Nombre: ${mail.person}</li>
        <li>Email: ${mail.from}</li>
        </ul>
  
        <h3>Mensaje</h3>
        <p>${mail.body}</p>
        `,
    };

    this.transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: ' + info.response);
    });
  }
}
