const atl = require("../models/agt");
const { convertArrayToCSV } = require('convert-array-to-csv');
const mongoose = require('mongoose');

exports.get = async function (req, res) {
    try{
        await mongoose.connect('mongodb+srv://saasteam10:7oK3fIkTNG4Z18vg@energylive2022.fsgid.mongodb.net/EnergyLiveAGT?retryWrites=true&w=majority')
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
        const AGT = await atl.find({ AreaTypeCode : "CTY", MapCode : country, ProductionType : productionType, DateTime : {$gte: dateFrom}}).sort('DateTime'); 
        console.log(AGT)
        var array = [];
        for(let i = 0; i < AGT.length; i++) {
            var AGTTimeStamp = AGT[i].DateTime;
            var generationValue = AGT[i].ActualGenerationOutput;
            var row = { 'AGTTimeStamp' : AGTTimeStamp, 'generationValue' : generationValue };
            array.push(row);
        }

        if (req.params.format == 'csv')
        {
            const headerCSV = [
                'AGTTimestamp',
                'generationValue',
            ];
            var dataCSV = [];
            for (var i in array) {
                dataCSV.push([
                    array[i].AGTTimeStamp,
                    array[i].generationValue
                ]);
            }
            const finalCSV = convertArrayToCSV(dataCSV, {
                header: headerCSV,
                separator: ','
            });
            res.set('Content-Type', 'text/csv');
            res.status(200).send(finalCSV);
        }
        else if (req.params.format == 'json')
        {
            res.status(200).send(array);
        }
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}