const nodemailer = require("nodemailer");
const express = require('express');
const app = express();
const pdfkit = require('pdfkit');
const jsPDF = require("jspdf");
const speakeasy = require('speakeasy');


const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const fs = require('fs');


require("dotenv").config();




const createPDF = () => {
    const doc = new jsPDF();
    doc.text("Hello World!", 10, 10);
    doc.save("example.pdf"); // save the PDF as a file with name "example.pdf"
    return doc;
  };
  





const mainsend = async (req, res) => {

    console.log(req.body.email)


//     // Read the PowerPoint file and create an attachment object
// const pptAttachment = {
//     filename: 'presentation.pptx',
//     content: fs.readFileSync('/path/to/presentation.pptx')
//   };
  
//   // Read the Excel file and create an attachment object
//   const excelAttachment = {
//     filename: 'spreadsheet.xlsx',
//     content: fs.readFileSync('/path/to/spreadsheet.xlsx')
//   };
  

    // Create a new PDF document
    const secret = speakeasy.generateSecret({ length: 20 });
       
    const otp = speakeasy.totp({
      secret: secret.base32,
      encoding: 'base32'
    });



    const createTransporter = async () => {

        const oauth2Client = new OAuth2(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            "https://developers.google.com/oauthplayground"
        );

        oauth2Client.setCredentials({

            refresh_token: process.env.REFRESH_TOKEN
        });

        const accessToken = await new Promise((resolve, reject) => {

            oauth2Client.getAccessToken((err, token) => {

                if (err) {

                    reject("Failed to create access token :(");
                }
                resolve(token);
            });
        });

        const transporter = nodemailer.createTransport({


            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.EMAIL,
                accessToken,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN
            }
        });

        return transporter;
    };

    const sendEmail = async (emailOptions) => {
        let emailTransporter = await createTransporter();
        await emailTransporter.sendMail(emailOptions);
    };

    sendEmail({
        subject: "Test",
        text: `I am sending an email from nodemailer! ${otp} `,
        

        to: req.body.email,
        from: process.env.EMAIL,
       // html:  "<h1>Hello, world!</h1> <p>This is an HTML email sent from Node.js using Nodemailer.</p>",
        html:'<a href="https://www.google.com">Click here</a> ',

        attachments: [
            {
              filename: 'image.jpg, image.jpeg',
              path: 'images/org.png',
              cid: 'unique@nodemailer.com'
            }
          ]
          
    });



}

module.exports = mainsend;
