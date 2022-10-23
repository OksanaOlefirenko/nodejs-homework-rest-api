const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async data => {
  const mail = { ...data, from: 'oksana_olefirenko@ukr.net' };
  await sgMail.send(mail);
  return true;
};

module.exports = sendEmail;

// const mail = {
//   to: 'nicex@ukr.net',
//   from: 'oksana_olefirenko@ukr.net',
//   subject: 'Test',
//   html: 'Hello!',
// };

// sgMail
//   .send(mail)
//   .then(() => console.log('Mail send success'))
//   .catch(error => console.log(error.message));
