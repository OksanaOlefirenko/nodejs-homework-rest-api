const express = require('express');

const { ctrlWrapper } = require('../../helpers');

const { validateBody, authenticate, upload } = require('../../middlewares');

const { schemas } = require('../../models/user');

const ctrl = require('../../controllers/auth');

const router = express.Router();

router.post(
  '/signup',
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

router.get('/verify/:verificationToken', ctrlWrapper(ctrl.verify));

router.post(
  '/verify',
  validateBody(schemas.verifyEmailSchema),
  ctrlWrapper(ctrl.resendVerify)
);

router.post(
  '/login',
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

router.get('/current', authenticate, ctrlWrapper(ctrl.getCurrent));

router.patch(
  '/avatars',
  authenticate,
  upload.single('avatar'),
  ctrlWrapper(ctrl.updateAvatar)
);

router.get('/logout', authenticate, ctrlWrapper(ctrl.logout));

router.patch(
  '/:id/subscription',
  authenticate,
  validateBody(schemas.subscriptionSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

module.exports = router;
