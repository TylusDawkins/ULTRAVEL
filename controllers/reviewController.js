const { Location, Review } = require('../models');

const getReviewsByLocation = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id: ", id)
        const location = await Location.findById(id)
        
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
        location.reviews.push(review._id)
        await location.save()
        return res.status(201).json({
            review
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
 
// const updatePlant = async (req, res) => {
//    try {
//        const { id } = req.params;
//        const plant = await Plant.findByIdAndUpdate(id, req.body, { new: true })
//        await plant.save()
//        return res.status(201).json({
//            plant,
//        });
//    } catch (error) {
//        res.status(500).send(error.message);
//    }
// }
 
// const deletePlant = async (req, res) => {
//    try {
//        const { id } = req.params;
//        const deleted = await Plant.findByIdAndDelete(id)
//        if (deleted) {
//            return res.status(200).send("Plant deleted");
//        }
//        throw new Error("Plant not found");
//    } catch (error) {
//        return res.status(500).send(error.message);
//    }
// }
 
module.exports = {
    getReviewsByLocation,
    createReview,
}
