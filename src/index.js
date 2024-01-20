const express = require("express");
const { PORT } = require("./config/serverConfig");

const getServerStarted = async() => {
    const app = express();

  app.listen(PORT, async() => {
    console.log(`Server Started on Port: ${PORT}`);
  });
};

getServerStarted();