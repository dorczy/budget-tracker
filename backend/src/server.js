const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const config = require('config');

const morgan = require('morgan');
const logger = require('./config/logger');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const cors = require('./config/cors');

const authenticateJwt = require('./auth/authenticate');
const authHandler = require('./auth/authHandler');




const dbConfig = config.get('Database');

if (!config.has('Database')) {
  logger.error("No Database config found!");
  process.exit();
};


// DOCKER:
// .connect(`mongodb://${dbConfig.containerName}`, {
// ATLAS:
// .connect(`mongodb+srv://dbUser:dbUserPassword@cluster0.emitf.mongodb.net/basicDatabase?retryWrites=true&w=majority`, {
  
mongoose
  .connect(`mongodb+srv://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then( () => logger.info("MongoDB connection has been established successfully") )
  .catch( err => {
    logger.error(err);
    process.exit();
} );


app.use(cors());
app.use(morgan('tiny', {stream: logger.stream}));
app.use(express.static('public'));

app.use(bodyParser.json());



app.use('/categories', authenticateJwt, require('./controllers/category/routes'));
app.use('/incomes', authenticateJwt, require('./controllers/income/routes'));
app.use('/expenses', authenticateJwt, require('./controllers/expense/routes'));
app.use('/remainings', authenticateJwt, require('./controllers/remaining/routes'));
app.use('/users', require('./controllers/user/routes'));


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
