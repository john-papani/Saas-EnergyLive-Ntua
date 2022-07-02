const agt = require("../models/agt");

const mongoose = require('mongoose');

exports.get = async function (req, res) {
    try{
        // await mongoose.connect('mongodb://localhost:27017/EnergyLiveAGT');
        await mongoose.connect('mongodb+srv://saasteam10:7oK3fIkTNG4Z18vg@energylive2022.fsgid.mongodb.net/EnergyLiveAGT?retryWrites=true&w=majority')

        console.log("Connected to DB");
        
        // Get country mapcode
        var mapCode = req.params['country'];
        console.log(mapCode);

        // db query
        // Returns the distinct values of field ProductionType from the documents that are returned
        // by find query { AreaTypeCode : "CTY", ProductionType : productionType }
        const production_types = await agt.distinct("ProductionType", { AreaTypeCode : "CTY", MapCode : mapCode });

        production_types.sort();
        console.log(production_types);

        res.status(200).send(production_types)
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}
