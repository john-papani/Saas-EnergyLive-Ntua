const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

// Routes

const atlRoute = require("./routes/atlRoute");
app.use("/actual-total-load", atlRoute);

// HTTP Port

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server is running on port", port);
});
