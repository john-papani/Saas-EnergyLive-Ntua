const agt = require("../models/agt");
const countries = require("../models/countries");

const mongoose = require('mongoose');

exports.get = async function (req, res) {
    try{
        // await mongoose.connect('mongodb://localhost:27017/EnergyLiveAGT');
        await mongoose.connect('mongodb+srv://saasteam10:7oK3fIkTNG4Z18vg@energylive2022.fsgid.mongodb.net/EnergyLiveAGT?retryWrites=true&w=majority')

        console.log("Connected to DB");

        // db query
        // Returns the distinct values of field MapCode from the documents that are returned
        // by find query { AreaTypeCode : "CTY" }
        var docs = await agt.distinct("MapCode", { AreaTypeCode : "CTY" });
        
        var country_names = [];

        console.log(docs);

        // Get corresponding country names
        for (let i = 0; i < docs.length; i++)
        {
            // console.log(docs[i]);
            
            row = await countries.find({ MapCode : docs[i] })
            country_names.push(row[0].Country);
        } 

        country_names.sort();
        console.log(country_names);

        res.status(200).send(country_names)
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}
