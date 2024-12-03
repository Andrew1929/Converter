import express from 'express';
import config from 'config';
import cors from 'cors';
import mongoose from 'mongoose';
import uploadRoutes from './routes/file.routes.js';
import authRoutes from './routes/auth.routes.js';

const server = express();
const Port = config.get('port');

server.use(cors ({
    origin: 'http://localhost:5173',
    credentials: true,
}))

server.use('/', uploadRoutes);
server.use('/', authRoutes);
 
async function start () {
    try {
        await mongoose.connect(config.get('mongoUri'));
        server.listen( Port, () => console.log(`Server has been staered on ${Port} port`))
    } catch (error) {
        console.log(`Server error ${error.message}`);
        process.exit(1);
    }
}

start();
