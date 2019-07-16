// Node Dependency
var mysql = require('mysql');
var connection;

// For Heroku Deployment vs. Local MySQL Database
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        // host: 'localhost',
        // user: 'root',
        // password: '', // Add your password
        // database: 'burgers_db' // Add your database

        host: 'pwcspfbyl73eccbn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'p3c9glua7ytkr6z3',
        password: 'u48p296q94pwhgxl', // Add your password
        database: 'c0bmcd3gjm5z9bw6' // Add your database

    });
}


// Export the Connection
module.exports = connection;