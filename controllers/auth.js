const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')





module.exports.login = async function(req, res) {
    const candidate = await User.findOne({email: req.body.email})

    if (candidate) {
        // password check
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult) {
            //token generated
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, keys.jwt, {expiresIn: 60*60})

            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            // wrong password
            res.status(401).json({
                messege: 'wrong password'
            })
        }

    } else {
        //error
        res.status(404).json({
            messege: 'User not faund'
        })
    }
}


module.exports.register = async function(req, res) {
    const candidate = await User.findOne({email: req.body.email})

    if (candidate) {
        // this email allready use --> error
        res.status(409).json({
            messege: 'This email allready use.'
        })
    } else {
        // ok -> user created
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User ({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        })
      try {
        await user.save()
        res.status(201).json(user)
      } catch(err) {
          //catch error
          errorHandler(res, err)
      }
     

    }

 }

 