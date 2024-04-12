const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email provider
        auth: {
            user: 'aryanagrawal2310@gmail.com',
            pass: 'rmxj txwl qfuj nczh'
        }
    });
    


// Function to send email
const sendEmail = async (toEmail, subject, text,attachmentPath) => {
    let mailOptions = {
        from: 'aryanagrawal2310@gmail.com',
        to: toEmail,
        subject: subject,
        text: text,
        attachments: [
            {
                filename: 'screenshot.png', // Filename to be displayed in the email
                path: attachmentPath // Path to the file to be attached
            }
        ]
    };
    console.log("sending email", toEmail);
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
 
};

module.exports = { sendEmail };