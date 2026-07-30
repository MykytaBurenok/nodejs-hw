import express from 'express';
import { celebrate } from 'celebrate';
import {
  registerUserSchema,
  loginUserSchema,
  requestResetEmailSchema,
  resetPasswordSchema,
} from '../validations/authValidation.js';
import {
  registerUser,
  loginUser,
  refreshUserSession,
  logoutUser,
  requestResetEmail,
  resetPassword,
} from '../controllers/authController.js';

const router = express.Router();

router.post(
  '/auth/register',
  celebrate({ body: registerUserSchema }),
  registerUser,
);
router.post('/auth/login', celebrate({ body: loginUserSchema }), loginUser);
router.post('/auth/refresh', refreshUserSession);
router.post('/auth/logout', logoutUser);

// новые
router.post(
  '/auth/request-reset-email',
  celebrate({ body: requestResetEmailSchema }),
  requestResetEmail,
);
router.post(
  '/auth/reset-password',
  celebrate({ body: resetPasswordSchema }),
  resetPassword,
);

export default router;
