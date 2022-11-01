const nodemailer = require('nodemailer');
require('dotenv').config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'oksana_olefirenko@meta.ua',
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const mail = {
  to: 'oksana_olefirenko@ukr.net',
  from: 'oksana_olefirenko@meta.ua',
  subject: 'Test',
  html: 'Hello',
};

transporter
  .sendMail(mail)
  .then(() => console.log('Email send success'))
  .catch(error => console.log(error.message));
