const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

// Routes

const usersRoute = require("./routes/usersRoute");
app.use("/users", usersRoute);

// HTTP Port

app.listen(process.env.PORT || 3002, () => {
  console.log("Server is running on port, ", process.env.PORT || 3002);
});
