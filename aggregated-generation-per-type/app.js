const express = require("express");
const app = express();

// Routes

const agtRoute = require("./routes/agtRoute");
app.use("/aggregated-generation-per-type", agtRoute);

// HTTP Port

app.listen(3001 ,() => {
    console.log("Server is running on port 3001")
})