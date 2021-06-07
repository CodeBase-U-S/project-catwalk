const router = require('express').Router();
const atelierHelper = require('./atelierHelper.js');

router
  .get('/:id', atelierHelper.getProductData);

module.exports = router;