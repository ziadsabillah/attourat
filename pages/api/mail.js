const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.EMAIL_API_KEY);
const contact = require('../../data/contact')


export default function handler(req, res) {

    const body = JSON.parse(req.body);

    const message = `
        Nom: ${body.name}\r\n
        Email: ${body.email}\r\n
        Tel: ${body.tel}\r\n
        Sujet: ${body.subject}\r\n
        Message: ${body.message}\r\n
    `

    mail.send({
        to: `${contact.email}`,
        from: `${contact.email}`,
        subject: 'New Message!',
        text: message,
        html: message.replace(/\r\n/g, '<br>'), 
    }).then(() => {
        res.status(200).json({status: 'Ok'});
    })

    res.status(200).json({ status: 'ok'});
}

