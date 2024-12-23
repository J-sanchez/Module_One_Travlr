const mongoose = require('mongoose')
const Trip = mongoose.model('../models/travlr.js')
const Model = mongoose.model('trips');

// GET: /trips - lists all trips
const tripsList = async (req, res) => {
    const q = await Model
        .find({})
        .exec()
    if (!q) {
        return res
            .status(404)
            .json(err);
        
    } else {
        return res
            .status(200)
            .json(q);
    }
};
// const tripsFindByCode = async (req, res) => {
//     const q = await Model
//         .find({}) 
//         .exec()
//             if (!q) {
//                 return res
//                     .status(404)
//                     .json(err);
        
//             } else {
//                 return res
//                     .status(200)
//                     .json(q);
//             }
//         }

module.exports = {
            tripsList
        }