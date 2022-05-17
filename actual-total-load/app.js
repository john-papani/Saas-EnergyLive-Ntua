const express = require("express");
const app = express();

// Routes

const atlRoute = require("./routes/atlRoute");
app.use("/actual-total-load", atlRoute);

// HTTP Port

app.listen(3000 ,() => {
    console.log("Server is running on port 3000")
})
