var express = require ('express');
var app = express( );

app.get('/', function(req, res){
    let ret = {'retorno':'Hello Word'};
    res.send(ret);
});
app.get('/', function(req, res){
    let ret = {'ret':'Hello'};
    res.send(ret);
});


app.listen(9000, () => console.log('Express started at http://localhost:9000'));