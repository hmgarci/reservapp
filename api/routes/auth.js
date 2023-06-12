import express from 'express';

const router = express.Router();

router.post("/", (req, res)=> {
    return res.json({"data": req.body});
});


router.get("/register", (req, res)=> {
    res.send("Register endpoint");
});


export default router;