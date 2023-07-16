import Usuario from '../models/Usuario.js';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken"
export const registerUsuario = async (req, res, next) =>{
    try {
        console.log(req.body)
        const salt = bcrypt.genSaltSync(10)
        const newPassword = bcrypt.hashSync(req.body.password, salt)

        const newUser = new Usuario({
            name: req.body.name,
            admin:req.body.admin,
            email: req.body.email,
            password: newPassword
            
        })
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (error) {
        console.log(error)
        //next(new Error("Error creating the new user"));
    }
}

export const loginUsuario = async (req, res, next) =>{
    try {
        const user = await Usuario.findOne({
            email: req.body.email
        })
        if(!user) return res.status(401).json({"Error":"The credentials are not correct"});
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) return res.status(401).json({"Error":"The credentials are not correct"});
        const {password, createdAt, updatedAt, ... other} = user._doc;
        res
        .cookie("access_token", generateToken(user), {httpOnly: true})
        .status(200).json({...other});
    } catch (error) {
        console.log(error)
        //next(new Error("Error creating the new user"));
    }
}

const generateToken = (user)=>{
    const token = jwt.sign({id: user._id, email: user.email, admin: user.admin}, process.env.JWT);
    return token;

}
