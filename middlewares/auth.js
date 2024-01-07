const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
    generateToken: ({id, role}) => {
        const token = jwt.sign({ id, role }, process.env.JWTSECRET)
        return token
    },

    verifyStudentToken: async (req, res, next) => {
        try {
            let token = req.headers.authorization
            if (!token) {
                return res.status(403).json({ errMsg: "Access Denied" })
            }
            if (token.startsWith('Bearer')) {
                token = token.slice(7, token.length).trimLeft()
            }

            const verified = jwt.verify(token, process.env.JWTSECRET)

            if (verified.role === 'student') {
                req.payload = verified
                next()
            } else {
                return res.status(403).json({ errMsg: "Acess Denied" })
            }

        } catch (error) {
            console.log(error);
            res.status(500).json({ errMsg: "Server Error" })
        }
    },

    verifyAdminToken: async (req, res, next) => {
        try {
            let token = req.headers.authorization
            if (!token) {
                return res.status(403).json({ errMsg: "Access Denied" })
            }
            if (token.startsWith('Bearer')) {
                token = token.slice(7, token.length).trimLeft()
            }
            
            const verified = jwt.verify(token, process.env.JWTSECRET)
            if (verified.role === 'admin') {
                req.payload = verified
                next()
            } else {
                return res.status(403).json({ errMsg: "Acess Denied" })
            }

        } catch (error) {
            console.log(error);
            res.status(500).json({ errMsg: "Server Error" })
        }
    }

}