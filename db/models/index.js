'use strict';

const Product = require('./product')
const Review = require('./review');
const School = require('./school');

Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {Product, Review, School};
