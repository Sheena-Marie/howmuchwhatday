/* jshint  esversion:6 */

const express = require('express');
const router = express.Router();
const exchange = require('./lib/exchange');

router.get('/', (req, res) => {
  const amount = parseInt(req.query.amount);
  const value = 0;
  if (req.query.amount) {
  return exchange.amountToOther(amount, req.query.symbol).then(money => {
    res.render('index', { rates: ['GBP', 'JPY', 'USD'], result: money });
  });
  } else {
    res.render('index', { rates: ['GBP', 'JPY', 'USD'], result: value });
  }
});

// res.render('index', {})
// .then(money => {
//
// })

module.exports = router;
