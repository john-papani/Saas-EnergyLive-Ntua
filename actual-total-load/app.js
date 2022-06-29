const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

// Routes

const atlRoute = require("./routes/atlRoute");
app.use("/actual-total-load", atlRoute);

// HTTP Port

const port = 3000 || process.env.PORT;

app.listen(port, () => {
    console.log("Server is running on port", port);
});
