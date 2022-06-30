# Aggregated Generation per Type Microservice

Microservice that serves the fundamental purpose of retrieving the actual generation output values and timestamps from the database, based on user's preferred criteria.

In this context, we must ensure that for every possible choice of Quantity, Country and Production Type, there is a non-void graph to display, according to the data we have access to. As a result, AGT microservice also integrates the function of updating choices in the frontend list boxes, based on user's prior selections. Last but not least, most recent update time is also returned for a specific and valid combination of Quantity, Country and Poduction Type.

AGT microservice runs on HTTP port 3001.

