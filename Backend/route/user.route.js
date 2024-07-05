
import express from "express"
import { signup,login } from "../controller/user.controller.js";


const router = express.Router();

router.post("/signup" , signup);    //  i use controller
router.post("/login" , login);    //  i use controller

export  default router;