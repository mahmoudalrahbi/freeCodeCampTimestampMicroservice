var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

function isValidDate(dateObject){
    return new Date(dateObject).toString() !== 'Invalid Date';
}


//get /api/:date ex. /api/2015-12-25 and /api/1451001600000
//in unix and utc format
app.get('/api/:date', function(req, res, next){
  var textDate = req.params.date;
req.time =  new Date(textDate);
if(!isValidDate(req.time))
  {
     req.time =  new Date(parseInt(textDate));
  }
  next();
},function(req, res) {
  if(isValidDate(req.time))
  {
    res.send({'unix':  req.time.valueOf(), 'utc': req.time.toUTCString()});
  }
  else{
     res.send({"error":"Invalid Date"});
  }
}
);


//get /api return current Date 
//in unix and utc format
app.get('/api',function(req,res, next){
  var currentDate = new Date();
    res.send({'unix':  currentDate.valueOf(), 'utc': currentDate.toUTCString()});
  }
)




  

module.exports = app;