const router = require('express').Router();
const notes = require('./noteRoute');

router.use(notes);

module.exports = router;