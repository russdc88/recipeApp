require('dotenv').config()

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')


var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
//Adding image upload packages
const multer = require('multer')
const sharp = require('sharp')
const fs = require('fs')

//Adding upload functionality
const upload = multer({
	dest: './uploads/',
	limits: {
		fileSize: 4000000
	}
	
})


var app = express();

app.use(cors())
app.use("/static", express.static(path.join(__dirname,"static")))

app.post('/upload',upload.single('file'), async (req,res) => {

	try {

		await sharp(req.file.path)
		 .resize({width:300,height:300})
		 .toFile('./static/' + req.file.originalname);
	 
			 fs.unlink(req.file.path, () =>{
			 res.json({file:'/static/' + req.file.originalname})
		 })
	}
	catch(err) {
		console.log(err)
		res.status(422).json({err})
	}
})


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
require('./routes/api')(app)

module.exports = app;
