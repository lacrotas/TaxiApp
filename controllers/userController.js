const db = require('../db')

class UserController{
    async addTrip(req,res){
        try {
            const {userid, startPoint, endPoint} = req.body;
            const newUser = await db.query('INSERT INTO public."order" (userid, startpoint, endpoint) values ($1, $2, $3) RETURNING *', [userid, startPoint, endPoint]);
            res.json(newUser.rows[0]);
           
        } catch (error) {
           console.error(error.message);
        } 
    }
    async chekTripHistory(req,res){
        try {
            const {userid, startPoint, endPoint} = req.body;
            const newUser = await db.query('INSERT INTO public."order" (userId, startPoint, endPoint) values ($1, $2, $3) RETURNING *', [userid, startPoint, endPoint]);
            res.json(newUser.rows[0]);
        } catch (error) {
           console.error(error.message);
        } 
    }
    async addStatement(req,res){
        try {
            const {userid, login, automark, color,number,phone,email} = req.body;
            const newUser = await db.query('INSERT INTO public."statement" (userid, login, automark,color,number,phone,email) values ($1, $2, $3,$4,$5,$6,$7) RETURNING *', [userid, login, automark, color,number,phone,email]);
            res.json(newUser.rows[0]);
           
        } catch (error) {
           console.error(error.message);
        } 
    }
}
module.exports = new UserController();

// module.exports.changeInfo = function(req,res){
//     res.status(200).json({
//         login: true
//     })
// }
// module.exports.chekTripHistory = function(req,res){
//     res.status(200).json({
//         login: true
//     })
// }

// module.exports.selectTrip = function(req,res){
//     res.status(200).json({
//         register: true
//     })
// }

// module.exports.payTheTrip = function(req,res){
//     res.status(200).json({
//         register: true
//     })
// }