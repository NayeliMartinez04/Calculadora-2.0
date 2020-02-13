const express = require("express");
const server = express();

server.use(express.static("public"));

server.listen(process.env.PORT || 3000, () => {
  console.log("Application running");
});
