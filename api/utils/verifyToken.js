import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next)=> {
    const token = req.cookies.access_token;
    if(!token){
        return res.status(401).send({message:"Not authorized"});
    }

    jwt.verify(token, process.env.JWT, (err, user)=>{
        if(err) return res.status(401).send({message:"Token not valid"});
        req.user = user;
        //req.user = user;
        //res.status(200).json({user});
        next();
    })

}

export const verifyUser = (req, res, next)=> {
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.admin){
            next();
        }else{
            return res.status(403).json({message:"User is not allowed"});
        }
    })

}