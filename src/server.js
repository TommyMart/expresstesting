const express = require("express");

// Make an instance of the Express server system
// so that we can configure it 
const app = express();

// Built in middleware that allows the server system
// to recieve json
app.use(express.json());

// localhost:3000/
// domainName:port/
// serverInstance.verb(path, callback)
app.get("/", (request, response) => {
    response.json({
        message:"Hello world!"
    });
});

const UserController = require("./controllers/UserController.js");
app.use("/users", UserController)

// module exports = app;
module.exports = {
    app
};