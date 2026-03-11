const { Pool } = require('pg')
require('dotenv').config()

module.exports = new Pool({
    connectionString: `postgresql://${process.env.ROLENAME}:${process.env.ROLEPASSWORD}@${process.env.DBHOST}/${process.env.DBNAME}?sslmode=require&channel_binding=require`
})
