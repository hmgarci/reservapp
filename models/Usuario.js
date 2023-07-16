import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const usuarioSchema = new Schema({
    name: {type: String},
    email: {type: String, require: [true, "The email is require"], unique: true},
    password: {type: String, require: [true, "The email is require"]},
    admin: {type: Boolean, default:false},

    
}, {
    timestamps: true
})

const usuario = mongoose.model('Usuario', usuarioSchema);
export default usuario;
//module.exports = model('usuario', usuarioSchema);