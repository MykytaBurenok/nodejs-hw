import express from 'express';
import { authenticate } from '../middleware/authenticate.js';
import { upload } from '../middleware/multer.js';
import { updateUserAvatar } from '../controllers/userController.js';

const router = express.Router();

router.use(authenticate);

router.patch('/users/me/avatar', upload.single('avatar'), updateUserAvatar);

export default router;
