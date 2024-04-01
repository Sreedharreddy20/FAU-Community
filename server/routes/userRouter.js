const express = require('express');
const router = express.Router();
const UserModal = require('../models/UserModal');
// const uuid = require('uuid');
// const path = require('path');

// let newUser = {
//     id : uuid.v4(),
//     first_name : request.body.first_name,
//     last_name : request.body.last_name,
//     email : request.body.email,
//     gender : request.body.gender,
//     ip_address : request.body.ip_address
// }

router.post('/register', async(request, response)=>{
    let newUser = {
        "name" : request.name,
        "whoru" : request.whoru,
        "password" : request.password,
        "re_password" : request.re_password,
    }
    try{
        let user = await UserModal.findOne({name: newUser.name});
        if(user){
            response.json("Already registered")
        }
        user = new UserModal(newUser);
        user = await user.save();
        response.status(200).json({
            'msg' : 'Product created successfully',
            user : user
        });
    }
    catch(error) {
        console.error(error);
        response.status(500).json({
            error : error.message
        });
    }
});

router.post('')