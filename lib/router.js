'use strict';

const router = require('express').Router()
  , whoami = require('./whoami');

router.get('/', (req, res, next) => res.json({}));

module.exports = router;
