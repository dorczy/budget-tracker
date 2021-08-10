const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const config = require('config');

const morgan = require('morgan');
const logger = require('./config/logger');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const authenticateJwt = require('./auth/authenticate');
const adminOnly = require('./auth/adminOnly');
const authHandler = require('./auth/authHandler');




const dbConfig = config.get('Database');

if (!config.has('Database')) {
  logger.error("No Database config found!");
  process.exit();
};


mongoose
// FELHŐBE CSATLAKOZÁS:
  // .connect(`mongodb+srv://NodeUser:almafa@cluster0.56epx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
  // .connect(`mongodb+srv://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}`, {
// KONTÉNERBE CSATLAKOZÁS:
  .connect(`mongodb://${dbConfig.containerName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then( () => logger.info("MongoDB connection has been established successfully") )
  .catch( err => {
    logger.error(err);
    process.exit();
} );



app.use(morgan('tiny', {stream: logger.stream}));
app.use(express.static('public'));

app.use(bodyParser.json());


app.use('/person', authenticateJwt, require('./controllers/person/person.routes'));
app.use('/post', authenticateJwt, adminOnly, require('./controllers/post/post.routes'));

app.post('/login', authHandler.login);
app.post('/refresh', authHandler.refresh);
app.post('/logout', authHandler.logout);



app.use( (err, req, res, next) => {
  res.status(err.statusCode = 404);
  res.json({
    hasError: true,
    message: err.message
  });
} );



module.exports = app;
