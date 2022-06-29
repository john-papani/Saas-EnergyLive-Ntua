const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors())
// Routes

const agtRoute = require("./routes/agtRoute");
app.use("/aggregated-generation-per-type", agtRoute);

// HTTP Port

const port = 3001 || process.env.PORT;

app.listen(port, () => {
    console.log("Server is running on port", port);
});
