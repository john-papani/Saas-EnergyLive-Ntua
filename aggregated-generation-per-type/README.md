# Aggregated Generation per Type Microservice

![Express](https://img.shields.io/badge/express-v4.18.1+-green.svg)
![Mongoose](https://img.shields.io/badge/mongoose-v6.3.3+-yellow.svg)
![Nodemon](https://img.shields.io/badge/nodemon-v2.0.16+-blue.svg)
![Cors](https://img.shields.io/badge/cors-v2.8.5+-orange.svg)
![convert-array-to-csv](https://img.shields.io/badge/convert--array--to--csv-v2.0.0+-FF3399)

Microservice that serves the fundamental purpose of retrieving the actual generation output values and timestamps from the database, based on user's preferred criteria.

In this context, we must ensure that for every possible choice of Quantity, Country and Production Type, there is a non-void graph to display, according to the data we have access to. As a result, AGT microservice also integrates the function of updating choices in the frontend list boxes, based on user's prior selections. Last but not least, most recent update time is also returned for a specific and valid combination of Quantity, Country and Poduction Type.

AGT microservice runs on HTTP port 3001.  
Additionally, AGT microservice is hosted on https://aggregated-generation-per-type.herokuapp.com/.

