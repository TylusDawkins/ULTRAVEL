const { Location, Review } = require('../models');

const getReviewsByLocation = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id: ", id)
        const location = await Location.findById(id)
        const reviews = await Review.find({location:id})
        if (reviews) {
            return res.status(200).json({ reviews });
        }
        return res.status(404).send('Comment with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
 
const createReview = async (req, res) => {
    try {
        const review = await new Review(req.body)
        console.log("create review: ", review)
        await review.save()
        const location = await Location.findById(req.params.id)
        await location.save()
        return res.status(201).json({
            review
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
 
module.exports = {
    getReviewsByLocation,
    createReview,
}
