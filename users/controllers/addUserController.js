const users = require("../models/users");
const mongoose = require('mongoose');

exports.post = async function (req, res) {
    try{
        await mongoose.connect('mongodb://localhost:27017/EnergyLiveUsers');

        var first = req.params['first_name'];
        var last = req.params['last_name'];
        var addr = req.params['email'];

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today.setDate(today.getDate() + 30);
             
        // create document
        const newuser = new users({ first_name : first, last_name: last, email: addr, valid_until : today });
        // save model to database
        newuser.save(function (err, usr) {
            if (err) return console.error('err');
            console.log(newuser.first_name + " " + newuser.last_name + " saved to collection.");
            res.status(200).send('OK');
        });

    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}