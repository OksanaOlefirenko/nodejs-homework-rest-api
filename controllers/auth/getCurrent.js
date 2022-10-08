const getCurrent = async (req, res) => {
  const { name, email, subscription } = req.user;
  res.json({
    status: 'succes',
    code: 200,
    data: {
      user: {
        name,
        email,
        subscription,
      },
    },
  });
};

module.exports = getCurrent;
