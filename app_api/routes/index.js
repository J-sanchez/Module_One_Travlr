const express = require('express')
const router = express.Router();

const tripsController = ('../controllers/trips')

router

    .route('trips')
    .get(tripsController.tripsList);

module.exports = router;