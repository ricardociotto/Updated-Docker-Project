const express = require("express");
const bodyParser = require("body-parser");
const crud = require ("./routes/crud");

const app = express();
const Port = 3000

app.use(bodyParser.json());

app.use("/api/items", crud);

app.listen(Port, () =>{
    console.log(`Server running on port ${Port}`);
})