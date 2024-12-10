import { Router } from "express";
import { check, validationResult} from 'express-validator';
import config from "nodemon";
import bcryptjs  from 'bcryptjs';
import jwt  from 'jsonwebtoken';
import User from "../Model/User.js";

const router = Router();

router.post(
    '/register',

    [
        check('username','Wrong username').isLength({min:3}), 
        check('email', 'Wrong email').isEmail(),
        check('password', 'Wrong password')
          .isLength({ min: 6 }),
    ],

    async (req, res) => {
        try {
            const error = validationResult(req)

            if (!error.isEmpty()) {
                return res.status(400).json({
                    errors: error.array(),
                    message: `Неправильна реєстрація: ${error.array().message}`
                })
            }

            const {username,email, password} = req.body;
            const emailCandidate = await User.findOne({email});
            const usernameCandidate = await User.findOne({ username })

            if (emailCandidate) {
                return res.status(400).json({message: 'Користувач вже існує'});
            }

            if (usernameCandidate) {
                return res.status(400).json({ message: 'Користувач вже існує'});
            }

            const hashedPassword = await bcryptjs.hash(password, 12);
            const user = new User({username, email, password: hashedPassword });
            await user.save();
            res.status(201).json({message: 'Користувач створений'});
        } catch (error) {
            res.status(500).json({message: `Щось пішло не так: ${error.message}`});
        }
    }
)

router.post(
    '/login',

    [
        check('email', 'Wrong email').normalizeEmail().isEmail(),
        check('password', 'Wrong password').exists()
    ],

    async (req, res) => {
        try {
            const error = validationResult(req)

            if (!error.isEmpty()) {
                return res.status(400).json({
                    errors: error.array(),
                    message: `Неправильний email або пароль: ${error.array().message}`
                })
            }

            const {email, password} = req.body;
            const user = await User.findOne({email});
            const isMatch = await bcryptjs.compare(password, user.password);

            if (!user) {
                return res.status(400).json({message: 'Невірний email або пароль'});
            }

            if (!isMatch) {
                return res.status(400).json({ message: 'Невірний email або пароль'});
            }

            const token = jwt.sign (
                { userId: user.id },
                config.get('jwtKey'),
                { expiresIn: '1h' }
            )
            res.json({token, userId: user.id})
        } catch (error) {
            res.status(500).json({message: `Щось пішло не так: ${error.message}`});
        }
    }
)

export default router;