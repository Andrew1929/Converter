import { Router } from "express";
import { check } from 'express-validator';
import { registerUser, loginUser } from "../controllers/authController.js";

const router = Router();

router.post(
    '/register',
    [
        check('username','Wrong username').isLength({min:3}), 
        check('email', 'Wrong email').isEmail(),
        check('password', 'Wrong password')
          .isLength({ min: 6 }),
    ],
    registerUser
)

router.post(
    '/login',
    [
        check('email', 'Wrong email').normalizeEmail().isEmail(),
        check('password', 'Wrong password').exists()
    ],
    loginUser
)

export default router;