import express from 'express';
import Eleccion from '../models/Eleccion.js';

const router = express.Router();

router.get("/", async (req, res)=> {
    try {
        const eleccion = await Eleccion.find();
        res.json(eleccion)
    } catch (error) {
        console.error("Error getting the eleccion " + error)
    }
})

router.get("/:id", async (req, res, next)=> {
    try {
        const { id } = req.params;
        const eleccion = await Eleccion.findById(id);
        res.json(eleccion)
    } catch (error) {
        //console.error("Error getting the eleccion " + error)
        next(error, next);
    }
})



router.post("/", async (req, res)=> {
    console.log(req.body)
    const {tittle, description, date, creationDate, isActive} = req.body;
    const newEleccion = new Eleccion({tittle, description, date, creationDate, isActive});
    console.log(newEleccion);
    await newEleccion.save();
    res.status(201).json({
        "data":{
            "response":"The eleccion with tittle " + tittle + " was created success"
        }
    })
});

router.put('/:dbId', async (req, res) => {
    try {
      const {tittle, description, date, creationDate, isActive} = req.body;
      const {dbId} = req.params
      console.log(dbId)
      const eleccion = await Eleccion.findByIdAndUpdate(dbId, {$set:req.body}, {new:true});
      res.json(eleccion);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Eleccion.findByIdAndDelete(id);
      res.status(204).json({
        "message":"The register was deleted success"
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


export default router;