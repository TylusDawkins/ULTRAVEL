const db = require('../db')
const { Review, Location } = require('../models')
 
// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
 
const createReviews = async () => {
    const locations = await Location.find({})

   const reviews = [
       {
            rating: 5,
            text: "Best place in the world!",
            author: "Jenna",
            location: locations[0]._id,
       },
       {
            rating: 5,
            text: "Definitely would visit again!",
            author: "Ran",
            location: locations[1]._id,
       },
       {
            rating: 5,
            text: "I love this place!",
            author: "Tylus",
            location: locations[2]._id,
       },
       {
            rating: 5,
            text: "My favorite place to visit.",
            author: "Patrick",
            location: locations[3]._id,
       },
   ]
   await Review.insertMany(reviews);
   console.log('Created reviews!');
   return reviews;
}
 
const run = async () => {
   await createReviews();
 
   db.close()
}
 
 
run()
