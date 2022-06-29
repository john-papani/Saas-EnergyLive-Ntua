const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

// Routes

const usersRoute = require("./routes/usersRoute");
app.use("/users", usersRoute);

// HTTP Port

const port = 3002 || process.env.PORT;

app.listen(port, () => {
    console.log("Server is running on port", port);
});