const users = require("../models/users");
const mongoose = require('mongoose');

exports.get = async function (req, res) {
    try{
        await mongoose.connect('mongodb://localhost:27017/EnergyLiveUsers');
        // get date_from
        var addr = req.params['email'];
        // db query
        const user = await users.find({ email : addr }); 
        var ans = { 'first_name' : user[0].first_name, 'last_name' : user[0].last_name, 'email' : user[0].email, 'valid_until' : user[0].valid_until };
        res.status(200).send(ans);
    } catch (error) {
        res.status(200).send([])
    }
}
