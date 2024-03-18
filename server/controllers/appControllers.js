import UserModel from "../model/User.model.js";
import bcrypt from 'bcrypt'

/** POST: https://localhost:8000/api/register
 * @param:{
    "username"
    "password"
    "email"
    "firstNanme"
    "Lastname"
    "mobile"
    "address"
    "profile"
 }
 */
export async function register(req, res) {
    try {
        const { username, password, email, profile } = req.body;

        // Check the existing User
        const existingUser = new Promise((resolve, reject) => {
            UserModel.findOne({ username }, function (err, user) {
                if (err) reject(new Error(err))
                if (user) reject({ error: "Please Use Unique Name" });
                resolve();
            })
        })

        // Check the existing Email
        const existingEmail = new Promise((resolve, reject) => {
            UserModel.findOne({ email }, function (err, email) {
                if (err) reject(new Error(err))
                if (email) reject({ error: "Please Use Unique email" });
                resolve();
            })
        })
        Promise.all([existingUser, existingEmail])
            .then(() => {
                if (password) {
                    bcrypt.hash(password, 10)
                        .then(hashPassword => {
                            const user = new UserModel({
                                username,
                                password: hashPassword,
                                profile: profile || '',
                                email: email
                            });
                            // return save result as a response
                            user.save()
                            .then(result => res.status(201).send({msg : 'User Register Successfully'}))
                            .catch(error => res.status(500).send(error))
                        }).catch(error => {
                            return res.status(500).send({
                                error: 'Enable to Hash Password'
                            })
                        })
                }
            }).catch(error => {
                return res.status(500).send({ error })
            })


    } catch (error) {
        return res.error(500).send(error)
    }
}


/** POST: https://localhost:8000/api/login
 * @param:{
    "username"
    "password"
 }
 */
export async function login(req, res) {
    res.json('login Router')
}


/** GET: https://localhost:8000/api/user/userName */
export async function getUser(req, res) {
    res.json('getUser Router')
}


/** PUT: https://localhost:8000/api/updateuser
 * @param:{
    "id" : "<userId>"
 }
 body{
    "username"
    "address"
    "profile"
 }
 */
export async function updateuser(req, res) {
    res.json('updateUser Router')
}


/** GET: https://localhost:8000/api/generateOTP */
export async function generateOTP(req, res) {
    res.json('GenerateOTP Router')
}


/** GET: https://localhost:8000/api/verifyOTP */
export async function verifyOTP(req, res) {
    res.json('verifyOTP Router')
}


/** Successfully Redirect user when OTP is valid */
/** GET: https://localhost:8000/api/createResetSession */
export async function createResetSession(req, res) {
    res.json('createResetSession Router')
}


/** Update Password user when OTP is valid */
/** GET: https://localhost:8000/api/resetpassword */
export async function resetpassword(req, res) {
    res.json('resetPassword Router')
}

