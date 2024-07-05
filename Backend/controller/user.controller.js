
import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async(req,res)=>{
    try {
        const {name,email,password} = req.body;

        const user =await User.findOne({email:email});

        if(user)
        {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashPassword =await bcryptjs.hash(password, 10);
        // Create new user collection  in MongoDB
        const createdUser = new User({
            name: name,
            email: email,
            password: hashPassword,
        });

        await createdUser.save();

        return res.status(201).json({
             message: "User created successfully" ,
              user:{
                    _id: createdUser._id,
                    name: createdUser.name,
                    email: createdUser.email,
              }

         });
    } 
    catch (error) {
        console.log("Error :" , error);
        return res.status(500).json({ message: "internal server error" });
    }
};


export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;

        const user =await User.findOne({email:email});    //find user from DB

        const isMatch =await bcryptjs.compare(password, user.password);   //comp. this passw. with user db passw.

        if (!user || !isMatch) 
        {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        else{
            res.status(200).json({message:"Logged In Successfully",
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                },
            });
        }
    } 
    catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }

}