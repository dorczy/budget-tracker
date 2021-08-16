const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const config = require('config');

const morgan = require('morgan');
const logger = require('./config/logger');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const cors = require('./config/cors');

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/swagger.yaml');

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



app.use('/categories', authenticateJwt, require('./controllers/category/category.routes'));
app.use('/expenses', authenticateJwt, require('./controllers/expense/expense.routes'));
app.use('/incomes', authenticateJwt, require('./controllers/income/income.routes'));
app.use('/remainings', authenticateJwt, require('./controllers/remaining/remaining.routes'));
app.use('/users', require('./controllers/user/user.routes'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
