import express from 'express';
import { loginUsuario, registerUsuario } from '../controllers/auth.js';
import { verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.post("/register", registerUsuario);
router.post("/login", loginUsuario);
router.get("/verifyToken", verifyToken);
router.get("/update/:id", verifyUser, (req, res, next)=>{
    res.json({messahge: "Th user is allowed to edit"});
})

export default router;