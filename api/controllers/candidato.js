import  Candidato  from'../models/Candidato.js'; 
export const  createCandidato = async (req, res, next) =>{
    try {
        const {name, politicalParty, lastName, age, id} = req.body;
        const newCandidato = new Candidato({name, politicalParty, lastName, age, id});
        console.log(newCandidato);
        await newCandidato.save();
        res.json({
            "data":{
                "response":"The candidate with the id " + id + " was created success"
            }
        })
    } catch (error) {
        next(error, next);
    }
} 

export const  getAllCandidato = async (req, res, next) =>{
    try {
        const candidatos = await Candidato.find();
        res.json(candidatos)
    } catch (error) {
        next(error, next);
    }
}

export const  putCandidato = async (req, res, next) =>{
    try {
        const {name, politicalParty, lastName, age, id} = req.body;
        const {dbId} = req.params
        console.log(dbId)
        const person = await Candidato.findByIdAndUpdate(dbId, req.body, {name, politicalParty, lastName, age, id});
        res.json(person);
    } catch (error) {
        next(error, next);
    }
} 

export const  deleteCandidato = async (req, res, next) =>{
    try {
        const { id } = req.params;
      await Candidato.findByIdAndDelete(id);
      res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
} 