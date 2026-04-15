const User = require("../models/userSchema");
const bycrypt = require('bcrypt');

const register = async (req, res) => {
    const {username, email, password} = req.body;

    const existingUser = await User.findOne({email});

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Kuch fields khaali hain. Sab bharo."
      });
    }

    if(existingUser){
        return res.status(400).json({
            status: "Failed",
            message: "Email already registered h"
        })
    }

    // Password Hashing
    const hashedPassword = bycrypt.hash(password, 12);

    const newUser = new User({
        username, email, hashedPassword
    })

    await newUser.save();

    res.status(201).json({
        status: "Success",
        message: "User Register ho gya"
    })
}

module.exports = register;


// joinwaitlist form, model, api
