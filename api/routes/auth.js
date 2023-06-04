import express from 'express';

const router = express.Router();

router.get("/", (req, res)=> {
    res.send("Authentication endpoint");
});

router.get("/register", (req, res)=> {
    res.send("Register endpoint");
});


export default router;