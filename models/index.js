const { model } = require('mongoose')
const ReviewSchema = require('./review')
const LocationSchema = require('./location')
 
const Location = model('locations', LocationSchema)
const Review = model('reviews', ReviewSchema)
 
module.exports = {
 Location,
 Review
}