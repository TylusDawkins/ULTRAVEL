const { Location } = require('../models');
 
const getAllLocations = async (req, res) => {
   try {
       const locations = await Location.find()
   return res.status(200).json({locations})
} catch (error) {
   return res.status(500).send(error.message);
   }
}
 
const getLocationById = async (req, res) => {
   try {
       const { id } = req.params;
       const location = await Location.findById(id)
       if (location) {
           return res.status(200).json({ location });
       }
       return res.status(404).send('Location with the specified ID does not exists');
   } catch (error) {
       return res.status(500).send(error.message);
   }
}
 
module.exports = {
    getAllLocations,
    getLocationById,
}
