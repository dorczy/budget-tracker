const express = require("express");
const router = express.Router();

const Category = require('../../models/category.model');
const baseRouter = require('../base/routes');


const categoryRouter = baseRouter(Category, [], router);


module.exports = categoryRouter;