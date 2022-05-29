const client = require('./connection.js')
const express = require('express');
const app = express();

var port_number = process.env.PORT || 3000;
app.listen(port_number);

client.connect();

app.get('/api/branch', (req, res)=>{
    let tak_query = res.body;
    client.take_query(`select * from bank_details where branch ILike '${req.tak_query.q}%' order by ifsc LIMIT ${req.tak_query.limit} OFFSET ${req.tak_query.offset};`, (err, result)=>{
        if(!err){
            res.send({"branches":result.rows});
        }
    });
    client.end;
})

app.get('/', (req, res)=>{
            res.send("Hello");
})


app.get('/api/search', (req, res)=>{
    let tak_query = res.body;
    client.take_query(`select * from bank_details where branch ILike '%${req.tak_query.q}%' or city ILike '%${req.tak_query.q}%' or ifsc ILike '%${req.tak_query.q}%' or district ILike '%${req.tak_query.q}%' or state ILike '%${req.tak_query.q}%'  order by ifsc LIMIT ${req.tak_query.limit} OFFSET ${req.tak_query.offset};`, (err, result)=>{
        if(!err){
            res.send({"branches":result.rows});
        }
    });
    client.end;
})
