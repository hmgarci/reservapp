import express from 'express';
import Ciudadano from '../models/Ciudadano.js';

const router = express.Router();

router.get("/", async (req, res)=> {
    try {
        const ciudadano = await Ciudadano.find();
        res.json(ciudadano)
    } catch (error) {
        console.error("Error getting the Ciudadano " + error)
    }
})

router.get("/:id", async (req, res)=> {
    try {
        const { id } = req.params;
        const ciudadano = await Ciudadano.findById(id);
        res.json(ciudadano)
    } catch (error) {
        console.error("Error getting the Ciudadano " + error)
    }
})



router.post("/", async (req, res)=> {
    console.log(req.body)
    const {name, adress, lastName, age, id} = req.body;
    const newCiudadano = new Ciudadano({name, adress, lastName, age, id});
    console.log(newCiudadano);
    await newCiudadano.save();
    res.status(201).json({
        "data":{
            "response":"The Ciudadano with tittle " + id + " was created success"
        }
    })
});

router.put('/:dbId', async (req, res) => {
    try {
      const {dbId} = req.params
      console.log(dbId)
      const ciudadano = await Ciudadano.findByIdAndUpdate(dbId, {$set:req.body}, {new:true});
      res.json(ciudadano);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Ciudadano.findByIdAndDelete(id);
      res.status(204).json({
        "message":"The register was deleted success"
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

export default router;