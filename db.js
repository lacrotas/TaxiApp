const Pool = require('pg').Pool;
const pool = new Pool({
    user:"postgres",
    password: "19354345",
    host: "localhost",
    port: 5432,
    database:"taxiAppDb",
}); 

module.exports = pool