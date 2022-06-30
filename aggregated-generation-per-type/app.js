const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors())
// Routes

const agtRoute = require("./routes/agtRoute");
app.use("/aggregated-generation-per-type", agtRoute);

// HTTP Port

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log("Server is running on port", port);
});
