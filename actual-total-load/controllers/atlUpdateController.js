const atl = require("../models/atl");
const mongoose = require('mongoose');

exports.get = async function (req, res) {
    try{
        await mongoose.connect('mongodb://localhost:27017/EnergyLiveATL');
        console.log("Connected to DB");
        // get date_from
        var dateFrom = req.params['date_from'];
        //dateFrom = dateFrom + 'T00:00:00.00.000Z';
        console.log(dateFrom)
        // get country
        const country = req.params['country'];
        console.log(country)
        // db query
        const ATL = await atl.findOne({ AreaTypeCode : "CTY", MapCode : country, DateTime : {$gte: dateFrom}}).sort({ 'UpdateTime':-1 });

        res.status(200).send(ATL.UpdateTime);
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}