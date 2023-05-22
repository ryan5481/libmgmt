const express = require('express')
const Users = require("../models/users")
const bcrypt = require('bcrypt')
const saltRounds = 10
const router = new express.Router()
require('dotenv').config()

const Signup = async(req, res) => {
    try {
        const data = await Users.create(req.body)
       
        console.log(req)
        if (data) {
            res.status(200).json({
                msg: "Registration successful!"
            })
        }else{
            console.log("Somesing wong!")
            // res.status(401).json({
            //     msg: "Registration failed!"
            // })
        }
    }catch(err){
        console.log(err)
    }
}
exports.Signup = Signup