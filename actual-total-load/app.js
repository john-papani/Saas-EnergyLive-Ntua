const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

// Routes

const atlRoute = require("./routes/atlRoute");
app.use("/actual-total-load", atlRoute);

// HTTP Port

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port", process.env.PORT || 3000);
});
