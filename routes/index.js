const { Router } = require('express');
const router = Router();
const locationController = require('../controllers/locationController')
const reviewController = require('../controllers/reviewController')

router.get('/', (req, res) => res.send('This is root!'))
router.get('/locations', locationController.getAllLocations)
router.get('/locations/:id', locationController.getLocationById)
router.post('/locations/:id', reviewController.createReview)
router.get('/locations/:id/reviews', reviewController.getReviewsByLocation)

module.exports = router;