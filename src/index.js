const express = require("express");
const bodyParser = require("body-parser");
const Crud = require ("./Routes/Crud");

const app = express();
const Port = 3000

app.use(bodyParser.json());

app.use("/api/items", Crud);

app.listen(Port, () =>{
    console.log(`Server running on port ${Port}`);
})