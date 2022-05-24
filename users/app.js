const express = require("express");
const app = express();

// Routes

const usersRoute = require("./routes/usersRoute");
app.use("/users", usersRoute);

// HTTP Port

app.listen(3002 ,() => {
    console.log("Server is running on port 3002")
})