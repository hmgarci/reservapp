import express from 'express';
import { createCandidato, deleteCandidato, getAllCandidato, putCandidato } from '../controllers/candidato.js';
import { verifyUser } from '../utils/verifyToken.js';
const router = express.Router();


router.get("/", verifyUser, getAllCandidato)

router.post("/", verifyUser, createCandidato);

router.put('/:dbId', verifyUser, putCandidato);

router.delete('/:id', verifyUser, deleteCandidato);


export default router;