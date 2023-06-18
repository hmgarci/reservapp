import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const eleccionSchema = new Schema({
    tittle: {type: String},
    description: {type: String},
    date: {type: Date, default: Date.now},
    creationDate: {type: Date, default: Date.now},
    isActive: {type: Boolean, default: true}, 
    
}, {
    timestamps: true
})

const eleccion = mongoose.model('Eleccion', eleccionSchema);
export default eleccion;