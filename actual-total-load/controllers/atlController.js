const atl = require("../models/atl");
const { convertArrayToCSV } = require('convert-array-to-csv');
const mongoose = require('mongoose');

exports.get = async function (req, res) {
    try{
        await mongoose.connect('mongodb+srv://saasteam10:7oK3fIkTNG4Z18vg@energylive2022.fsgid.mongodb.net/EnergyLiveATL?retryWrites=true&w=majority')
        console.log("Connected to DB");
        // get date_from
        var dateFrom = req.params['date_from'];
        //dateFrom = dateFrom + 'T00:00:00.00.000Z';
        console.log(dateFrom)
        // get country
        const country = req.params['country'];
        console.log(country)
        // db query
        const ATL = await atl.find({ AreaTypeCode : "CTY", MapCode : country, DateTime : {$gte: dateFrom}}).sort('DateTime'); 
        console.log(ATL)
        var array = [];
        for(let i = 0; i < ATL.length; i++) {
            var ATLTimeStamp = ATL[i].DateTime;
            var loadValue = ATL[i].TotalLoadValue;
            var row = { 'ATLTimeStamp' : ATLTimeStamp, 'loadValue' : loadValue };
            array.push(row);
        }

        if (req.params.format == 'csv')
        {
            const headerCSV = [
                'ATLTimestamp',
                'loadValue',
            ];
            var dataCSV = [];
            for (var i in array) {
                dataCSV.push([
                    array[i].ATLTimeStamp,
                    array[i].loadValue
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