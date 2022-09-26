const express = require('express');

const ctrl = require('../../controllers/contacts');

const { ctrlWrapper } = require('../../helpers');
const { validateBody } = require('../../middlewares');
const { contactSchema } = require('../../schemas');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:contactId', ctrlWrapper(ctrl.getById));

router.post('/', validateBody(contactSchema), ctrlWrapper(ctrl.add));

router.delete('/:contactId', ctrlWrapper(ctrl.removeById));

router.put(
  '/:contactId',
  validateBody(contactSchema),
  ctrlWrapper(ctrl.updateById)
);

module.exports = router;
