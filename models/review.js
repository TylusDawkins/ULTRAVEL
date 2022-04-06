const { Schema } = require('mongoose')
 
const Review = new Schema(
 {
   rating: { type: Number, required: true },
   text: { type: String, required: true },
   author: { type: String, required: true },
   location: [{ type: Schema.Types.ObjectId, ref: 'location' }]
 },
 { timestamps: true }
)
 
module.exports = Review
