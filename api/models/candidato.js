import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const candidatoSchema = new Schema({
    name: {type: String},
    politicalParty: {type: String},
    lastName: {type: String},
    age: {type: String},
    id: {type: String, unique: true}, 
    
}, {
    timestamps: true
})

const candidato = mongoose.model('Candidato', candidatoSchema);
export default candidato;
//module.exports = model('Candidato', candidatoSchema);