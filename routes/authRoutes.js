const { Router } = require('express');
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcrypt');
const User = require('../models/User')
const router = Router();

// /api/auth/register
router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body

        const candidate = await User.findOne({ email })

        if (candidate) {
            return res.status(400).json({ message: 'User already exists' })
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({ email, password: hashedPassword })

        await user.save()

        res.status(201).json({ message: 'User registered' })
    } catch (e) {
        res.status(500).json({ message: 'something wrong :(' })
    }
})

// /api/auth/login
router.post('/login', async (req, res) => {
    try {

    } catch (e) {
        res.status(500).json({ message: 'something wrong :(' })
    }
})

module.exports = router;
