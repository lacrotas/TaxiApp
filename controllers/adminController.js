const db = require('../db')

class AdminController{
    async getAllUsers(req,res){
        try {
            const users = await db.query(`SELECT * FROM public."user"`);
            res.json(users.rows);
        } catch (error) {
           console.error(error.message);
        } 
    }

    async getAllStatemets(req,res){
        try {
            const users = await db.query(`SELECT * FROM public."statement"`);
            res.json(users.rows);
        } catch (error) {
           console.error(error.message);
        } 
    }

    async addDriver(req,res){
        try {
            const {login, password, email, phone} = req.body;
            const newUser = await db.query('INSERT INTO public."driver" (login, password, email, phone) values ($1, $2, $3,$4) RETURNING *', [login, password, email,phone]);
            res.json(newUser.rows[0]);
        } catch (error) {
           console.error(error.message);
        } 
    }
    async addCar(req,res){
        try {
            const {userid, automark, color, number} = req.body;
            const newUser = await db.query('INSERT INTO public."car" (driverid, carmark, color, carnumber) values ($1, $2, $3,$4) RETURNING *', [userid, automark, color, number]);
            res.json(newUser.rows[0]);
        } catch (error) {
           console.error(error.message);
        } 
    }

    async deleteUser(req,res){
        try {
            const id = req.params.id
            console.log(id);
            const user = await db.query(`DELETE FROM public."user" WHERE userid = $1`,[id]);
            res.json(user.rows[0]);
        } catch (error) {
           console.error(error.message);
        } 
    }

}
module.exports = new AdminController();
// module.exports.addDriverRole = function(req,res){
//     res.status(200).json({
//         login: true
//     })
// }

// module.exports.deleteDriverRole = function(req,res){
//     res.status(200).json({
//         register: true
//     })
// }
// module.exports.deleteUser = function(req,res){
//     res.status(200).json({
//         login: true
//     })
// }

// module.exports.addUser = function(req,res){
//     res.status(200).json({
//         register: true
//     })
// }
// module.exports.changeInfo = function(req,res){
//     res.status(200).json({
//         login: true
//     })
// }
