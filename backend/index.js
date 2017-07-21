var express =  require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    morgan = require('morgan');
	  cors = require('cors');

var config = require('./config/index'),
    routes = require('./routes/index');

var app = express();

mongoose.Promise = global.Promise;

mongoose.connect(config.database, (err)=>{
  if(err){
    console.error(err);
  }
});


app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(cors());

app.use('/api', routes);

app.listen(config.port, (err)=>{
  if(err){
    console.error(err);
  }
});
