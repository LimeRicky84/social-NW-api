const router = require('express').Router();

const {
    getRetort,
    getSingleRetort,
    createRetort,
    updateRetort,
    deleteRetort,
    createCounter,
    deleteCounter
} = require('../../controllers/retortController');

module.exports = router;