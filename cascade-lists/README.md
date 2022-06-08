# Cascading list microservice

Microservice that serves the purpose of updating choices in the frontend list boxes, according to user's prior selections. More specifically, fc (filter countries) endpoint returns all the countries that exist in specified collection (Actual Total Load or Generation Per Type). Fpt (filter production type) endpoint returns all the production types that are associated with specified country. The essence of this microservice is to ensure that for every available choice of Quantity, Country and Production Type, there is a non-void graph to display. 

Cascading list microservice runs on HTTP port 3003.