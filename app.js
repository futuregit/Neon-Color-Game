var express = require('express'),
    app     = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.render('colorGame');
});

app.use(express.static(__dirname + "/public"));

    
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server running");
});