const atl = require("../models/agt");
const mongoose = require('mongoose');

exports.get = async function (req, res) {
    try{
        await mongoose.connect('mongodb://localhost:27017/EnergyLiveAGT');
        console.log("Connected to DB");
        // get date_from
        var dateFrom = req.params['date_from'];
        //dateFrom = dateFrom + 'T00:00:00.00.000Z';
        console.log(dateFrom)
        // get country
        const country = req.params['country'];
        console.log(country)

        var productionType = decodeURI(req.params['production_type']);
        console.log(productionType);
        // db query
        const AGT = await atl.findOne({ AreaTypeCode : "CTY", MapCode : country, ProductionType : productionType, DateTime : {$gte: dateFrom}}).sort({ 'UpdateTime':-1 }); 
        console.log(AGT)
        res.status(200).send(AGT.UpdateTime);
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}