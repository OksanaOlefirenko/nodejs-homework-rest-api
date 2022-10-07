const { User } = require('../../models/user');

const { RequestError } = require('../../helpers');

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;

  const result = await User.findByIdAndUpdate(
    _id,
    { subscription },
    { new: true }
  );
  if (!result) {
    throw RequestError(401, 'User not found');
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: {
        email: result.email,
        subscription: result.subscription,
      },
    },
  });
};

module.exports = updateSubscription;
