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