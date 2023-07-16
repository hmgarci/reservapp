import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

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


app.get('/', (req, res)=> {
    res.send('App running');
})

app.listen(3000, ()=> {
    connect();
    console.log('The server is running')
})