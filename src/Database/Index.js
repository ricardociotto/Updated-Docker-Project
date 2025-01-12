const {Pool} = require("Mysql");

const pool = new Pool({
    user: "mysql",
    host: "localhost",
    database: "Crudtest",
    password: "12345",
    port: 6789,
})

pool.connect()
.then(() => console.log("Connection has been establish successfully"))
.catch(err => console.error("Connection error:", err));
