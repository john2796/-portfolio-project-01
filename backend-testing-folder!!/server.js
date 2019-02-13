const express = require("express");
const port = 5000;

//import routes
const testRoutes = require("./routes/api/testing");

//init app
const server = express();

//middleware
server.use(express.json());

//use routes
server.use("/api/test", testRoutes);

server.listen(port, () => {
  console.log(`++++++ Server running on port ${port} ++++++`);
});
