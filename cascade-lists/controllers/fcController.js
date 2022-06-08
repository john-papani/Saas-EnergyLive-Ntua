const agt = require("../../cascade-lists/models/agt");
const atl = require("../../cascade-lists/models/atl");
const countries = require("../models/countries");

const mongoose = require('mongoose');

exports.get = async function (req, res) {
    try{
        await mongoose.connect('mongodb://localhost:27017/EnergyLiveCascade');
        console.log("Connected to DB");
        
        // Get quantity type
        var quantity_type = decodeURI(req.params['quantity']);
        console.log(quantity_type);

        var docs;

        // db query
        // Returns the distinct values of field MapCode from the documents that are returned
        // by find query { AreaTypeCode : "CTY" }
        if (quantity_type == "Actual Total Load")
            docs = await atl.distinct("MapCode", { AreaTypeCode : "CTY" });
        else if (quantity_type == "Generation Per Type")
            docs = await agt.distinct("MapCode", { AreaTypeCode : "CTY" });
        else
        {
            res.status(500).send("Parameter quantity is not of the right type.");
            return;
        }
        
        var country_names = [];

        console.log(docs);

        // Get corresponding country names
        for (let i = 0; i < docs.length; i++)
        {
            // console.log(docs[i]);
            
            row = await countries.find({ MapCode : docs[i] })
            country_names.push(row[0].Country);
        } 

        console.log(country_names);

        res.status(200).send(country_names)
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}