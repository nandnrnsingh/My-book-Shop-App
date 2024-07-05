import express from "express"
import { getBook } from "../controller/book.controller.js"

import Book from "../model/book.model.js";

const router = express.Router();

// router.get("/",getBook); //if i use controller

router.get("/book", async(req,res)=>{
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } 
    catch (error) {
        console.log("error: ",error);
        res.status(500).json(error);
    }
});

export default router;