const db = require('../db')

class AuthController{
    async registrate(req,res){
        try {
           const {login, password, email} = req.body;
           const user = await db.query(`SELECT * FROM public."user" WHERE email = $1`, [email]);
           if(user.rows[0] == undefined){
           const newUser = await db.query('INSERT INTO public."user" (login, password, email) values ($1, $2, $3) RETURNING *', [login, password, email]);
           res.json(newUser.rows[0]);
           }else{
            console.log("Такой email уже есть " +  user.rows[0]);
           }
        } catch (error) {
           console.error(error.message);
        } 
    }
    async login(req,res){
        try {
           const {email, password} = req.body;
           const user = await db.query(`SELECT * FROM public."user" WHERE email = $1`, [email]);
           if(user.rows[0] != undefined){
            if(user.rows[0].password == password){
               res.json(user.rows[0]);
            }else{
               console.log("неверный пароль");
            }
           }else{
            console.log("пользователя с такой почтой не существует");
           }
        } catch (error) {
           console.error(error.message);
        } 
    }
}
module.exports = new AuthController();

// module.exports.login = async function(req,res){
//     res.status(200).json({
//         login: req.body.login,
//         password: req.body.password,
//         email : req.body.email,
//         newUser : await db.query('INSERT INTO user (login, password, email) values ($1, $2, $3) RETURNING *', [login, password, email]),
    
//     })
// }

// module.exports.register = function(req,res){
//     res.status(200).json({
//         register: true
//     })
// }