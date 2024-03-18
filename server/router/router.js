import { Router } from "express";
const router = Router();

/** import all Controller */
import * as controller from '../controllers/appControllers.js'


/** POST Methods */
router.route('/register').post(controller.register)        //  resgister user
// router.route('/registerMail').post()    //  send the email
router.route('/authendicate').post((req, res) => res.end())    //  authendicate user
router.route('/login').post(controller.login)           //  login app

/** GET Methods */
router.route('/user/:username').get(controller.getUser)   //  user with userName
router.route('/generateOTP').get(controller.generateOTP)      //  generate random OTP
router.route('/verifyOTP').get(controller.verifyOTP)        //  verify generate OTP
router.route('/createResetSession').get(controller.createResetSession)   //  reset all varibales

/** PUT Methods */
router.route('/updateuser').put(controller.updateuser)       //  is use to update user profile
router.route('/resetpassword').put(controller.resetpassword)    //  user password reset
export default router;