const express=require("express");
const {signups,logins}=require("../controllers/signupController");

const router=express.Router()
router.post('/signup',signups);
router.post('/login',logins);
module.exports=router;
