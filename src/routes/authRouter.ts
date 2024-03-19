import express from 'express';
import { registerUser, loginUser } from '../controller/authController';
// import { authMiddleware, adminMiddleware } from '../middlewares/adminAccess';

const router = express.Router();

router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);

// router.get('/auth/admin', authMiddleware, adminMiddleware, (req, res) => {
//   res.send('Admin Dashboard');
// });

export default router;
