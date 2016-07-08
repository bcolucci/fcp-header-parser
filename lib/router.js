'use strict';

const router = require('express').Router();

router.get('/', (req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const language = (req.headers['accept-language'] || '').split(',').shift();
  const software = ((req.headers['user-agent'] || '').match(/\([a-z0-9_;\s]+\)/i) || []).shift();
  res.json({ ipaddress: ip, language: language, software: software });
});

module.exports = router;
