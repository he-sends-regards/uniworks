const Router = require('express');
const bcrypt = require('bcryptjs');
const {
  check,
  validationResult
} = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User.js');

const router = Router()

// /api/auth/register
router.post(
  '/register',
  [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Некорректный пароль').isLength({
      min: 7,
      max: 16
    }),
    check('name', 'Некорректное имя').isLength({
      min: 2,
      max: 30
    })
  ],
  async (req, res) => {
    try {
      console.log('Body on server: ', req.body);

      const errors = validationResult(req);

      if (!errors.isEmpty) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при регистрации'
        })
      }

      const {
        name,
        email,
        password
      } = req.body;

      const candidate = await User.findOne({
        email
      })

      if (candidate) {
        return res.status(400).json({
          message: 'Такой пользователь уже существует'
        })
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = new User({
        name,
        email,
        password: hashedPassword
      })

      await newUser.save();

      res.status(201).json({
        message: 'Пользователь создан!'
      })
    } catch (error) {
      res.sendStatus(500).json({
        message: 'что-то пошло не так '
      })
    }
  })

// /api/auth/login
router.post(
  '/login',
  [
    check('email', 'Введите корректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists(),
    check('password', 'Введите корректный пароль').isLength({
      min: 7,
      max: 16
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при входе в систему'
        })
      }

      const {
        email,
        password
      } = req.body;

      const user = await User.findOne({
        email
      })

      if (!user) {
        return res.status(400).json({
          message: 'Неверный логин или пароль. Попробуйте снова'
        })
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          message: 'Неверный логин или пароль. Попробуйте снова'
        })
      }

      const token = jwt.sign({
          userId: user.id // Сюда также можно передать email и пароль
        },
        config.get('jwtSecret'), {
          expiresIn: '1h'
        }
      )

      res.send({
        token,
        userId
      })
    } catch (error) {
      res.send(500).json({
        message: 'что-то пошло не так'
      })
    }
  })

module.exports = router;