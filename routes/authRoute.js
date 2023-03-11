import express from 'express'
import {
    registerController,
    loginController,
    testController, 
    forgotPasswordController,
    updateProfileController
     } from '../controller/authController.js'
import { requireSignIn } from '../middlewares/authMiddlewares.js'
//router object

const router =  express.Router()

//config 
//Register || Method POST
router.post('/register', registerController)

//login || post
router.post('/login', loginController)

//Forgot Password || post
router.post('/forgotpassword', forgotPasswordController)


router.put("/dashboard", requireSignIn, updateProfileController);


//test routes
router.get('/test', requireSignIn, testController)




//protected routes auth
router.get('/user-auth', requireSignIn, (req,res) =>{
    res.status(200).send({ok:true});
});



export default router