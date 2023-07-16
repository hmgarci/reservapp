import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const ciudadanoSchema = new Schema({
    name: {type: String},
    adress: {type: String},
    lastName: {type: String},
    age: {type: String},
    id: {type: String, unique: true}, 
    
}, {
    timestamps: true
})

const ciudadano = mongoose.model('Ciudadano', ciudadanoSchema);
export default ciudadano;