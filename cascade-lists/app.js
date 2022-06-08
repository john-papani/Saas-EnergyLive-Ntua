const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors())

// Route

const cascadeListsRoute = require("./routes/cascadeListsRoute");
app.use("/cascade-lists", cascadeListsRoute);

// HTTP Port

app.listen(3003 ,() => {
    console.log("Server is running on port 3003")
})
