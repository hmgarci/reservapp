import express from 'express';
import  Candidato  from'../models/candidato.js'; 
const router = express.Router();


router.get("/", async (req, res)=> {
    try {
        const candidatos = await Candidato.find();
        res.json(candidatos)
    } catch (error) {
        console.error("Error getting the candidatos " + error)
    }
})


router.post("/", async (req, res)=> {
    console.log(req.body)
    const {name, politicalParty, lastName, age, id} = req.body;
    const newCandidato = new Candidato({name, politicalParty, lastName, age, id});
    console.log(newCandidato);
    await newCandidato.save();
    res.json({
        "data":{
            "response":"The candidate withe the id " + id + " was created success"
        }
    })
});

router.put('/:dbId', async (req, res) => {
    try {
      const {name, politicalParty, lastName, age, id} = req.body;
      const {dbId} = req.params
      console.log(dbId)
      const person = await Candidato.findByIdAndUpdate(dbId, req.body, {name, politicalParty, lastName, age, id});
      res.json(person);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Candidato.findByIdAndDelete(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


export default router;