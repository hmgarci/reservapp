import express from 'express';
import { createCandidato, deleteCandidato, getAllCandidato, putCandidato } from '../controllers/candidato.js';
const router = express.Router();


router.get("/", getAllCandidato)

router.post("/", createCandidato);

router.put('/:dbId', putCandidato);

router.delete('/:id', deleteCandidato);


export default router;