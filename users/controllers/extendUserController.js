const users = require("../models/users");
const mongoose = require('mongoose');
const { type } = require("express/lib/response");

exports.post = async function (req, res) {
    try{
        // await mongoose.connect('mongodb://localhost:27017/EnergyLiveUsers');
        await mongoose.connect('mongodb+srv://saasteam10:7oK3fIkTNG4Z18vg@energylive2022.fsgid.mongodb.net/EnergyLiveUsers?retryWrites=true&w=majority')

        var addr = req.params['email'];
        var days = parseInt(req.params['days']);

        // db query
        const user = await users.find({ email : addr }); 
        var valid = user[0].valid_until;

        var today = new Date(valid);
        today.setDate(today.getDate() + days);
             
        const filter = { email : addr };
        const update = { valid_until : today }
        
        let doc = await users.findOneAndUpdate(filter, update);

        console.log("Extended plan for " + user[0].first_name + " " + user[0].last_name + ".");

        res.status(200).send('OK');

    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}