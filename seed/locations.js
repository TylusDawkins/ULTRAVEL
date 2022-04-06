const db = require('../db')
const { Location, Review } = require('../models')
 
// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
 
 
const createLocations = async () => {
 
   const locations = [
       {
           name: "Berlin, Germany",
           description: "Berlin, the capital of Germany, dates to the 13th century. Reminders of the city's turbulent 20th-century history include its Holocaust memorial and the Berlin Wall's graffitied remains. Divided during the Cold War, its 18th-century Brandenburg Gate has become a symbol of reunification. The city's also known for its art scene and modern landmarks like the gold-colored, swoop-roofed Berliner Philharmonie, built in 1963.",
           image: "https://theplanetd.com/images/places-to-visit-in-berlin-germany.jpg"
        },
       {
           name: "Seoul, South Korea",
           description: "Seoul, the capital of South Korea, is a huge metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples, palaces and street markets. Notable attractions include futuristic Dongdaemun Design Plaza, a convention hall with curving architecture and a rooftop park; Gyeongbokgung Palace, which once had more than 7,000 rooms; and Jogyesa Temple, site of ancient locust and pine trees.",
           image: "https://assets3.thrillist.com/v1/image/2960603/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70"
       },
       {
           name: "Mt. Charleston, Nevada, USA",
           description: "Running for 50 miles along the west edge of Las Vegas, the Spring Mountains mark the start of Nevada's Great Basin Desert, characterized by tall, narrow, ridges separated by wide, empty valleys, and differing from the Mojave Desert to the south in that the temperatures are lower, average elevation higher and annual rainfall greater. All such mountains are well separated from neighboring ranges by the much lower and more extensive desert land in between, and so harbor distinct plant and animal life, as well as containing a variety of climate zones in close proximity; both these aspects are illustrated by Mount Charleston, the highest summit of the Spring Mountains (11,918 feet), whose foothills may be reached by an easy half hour drive from downtown Las Vegas.",
           image: "https://www.americansouthwest.net/nevada/photographs450/charleston-snow.jpg"
       },
       {
           name: "Boulder, Colorado",
           description: "Boulder is a perfect balance of urban and outdoors. Known for its stellar food scene, breweries, an always-exciting downtown and more outdoor activities than you can count, the city is just 30 minutes northwest of Denver, where the Rocky Mountains meet the plains.",
           image: "http://aboutboulder.com/wp-content/uploads/2014/03/chhrp.org_.jpg"
       },
   ]
 
   await Location.insertMany(locations)
   console.log(locations)
   console.log("Created some locations!")
}
 
 
const run = async () => {
   await createLocations();
 
   db.close()
}
 
 
run()

