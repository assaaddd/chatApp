import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';

import connectToMongoDB from './db/connectToMongoDB.js';
import { app, server } from './socket/socket.js';

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import userRoutes from './routes/user.route.js';

const PORT = process.env.PORT || 4000;

//to deploy
const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);
//to deploy
app.use(express.static(path.join(__dirname , "/frontend/dist")));

app.get("*" , (req , res) => {
    res.sendFile(path.join(__dirname , "frontend" , "dist" , "index.html"))
})



server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server running under port: ${PORT}`);
});