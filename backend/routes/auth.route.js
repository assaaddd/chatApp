import express from "express";

import authController from '../controllers/auth.controller.js';
const { login , logout , signup} = authController;

const router = express.Router();

router.post('/signup' , signup)
router.post('/login' , login)
router.post('/logout' , logout)

export default router;
