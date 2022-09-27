const contactsOperations = require('../../models/contacts');
const { RequestError } = require('../../helpers');

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.removeContact(contactId);
  if (!result) {
    throw RequestError(404, `Contact with id =${contactId} was not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'Contact deleted',
    data: {
      result,
    },
  });
};

module.exports = removeById;
