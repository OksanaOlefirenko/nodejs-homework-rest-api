const { User } = require('../../models/user');

const { RequestError, sendEmail, createVerifyEmail } = require('../../helpers');

const resendVerify = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(400, 'Email not found');
  }
  const { verificationToken, verify } = user;

  if (verify) {
    throw RequestError(400, 'Verification has already been passed');
  }

  const mail = createVerifyEmail(email, verificationToken);
  await sendEmail(mail);

  res.json({
    message: 'Verification email resend',
  });
};

module.exports = resendVerify;
