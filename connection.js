const {Client} = require('pg')

const client = new Client({
 connectionString: "postgres://vciyvnhepdahnw:98f85d80dda8a1a09b50f594f2d9cecf200ff437e9381b363880b35e74f67f88@ec2-34-227-120-79.compute-1.amazonaws.com:5432/da31onl44r9v3q",
 ssl: {
 rejectUnauthorized: false
 }
});

module.exports = client
