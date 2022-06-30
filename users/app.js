const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

// Routes

const usersRoute = require("./routes/usersRoute");
app.use("/users", usersRoute);

// HTTP Port

const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log("Server is running on port", port);
});