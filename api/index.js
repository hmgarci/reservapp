import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';   
import candidato from './routes/candidatos.js';   
import eleccion from './routes/elecciones.js';
import ciudadano from './routes/ciudadanos.js';

dotenv.config();

const app = express();
app.use(express.json())

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION)
        console.log("The connection was success");
    } catch (error) {
        console.error('Error trying to do the conection ' + error);
        throw error;
    }
}

mongoose.connection.on('connected', ()=>{
    console.log('The database was connected');
})

mongoose.connection.on('disconnected', ()=>{
    console.log('The database was diconnected');
})

//middleware
app.use("/auth", authRoute);
app.use("/candidato", candidato);
app.use("/eleccion", eleccion);
app.use("/ciudadano", ciudadano);
app.use((err, requ, res, next)=>{
    return res.status(500).json({message: "Internal server error"})
});


app.get('/', (req, res)=> {
    res.send('App running');
})

app.listen(3000, ()=> {
    connect();
    console.log('The server is running')
})