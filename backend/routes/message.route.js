import express from 'express';

const router = express.Router();

import messageController from '../controllers/message.controller.js';
const { sendMessage, getMessages } = messageController;
import protectRoute from '../middleware/protect.js';


router.get('/:id', protectRoute, getMessages);
router.post('/send/:id', protectRoute, sendMessage);

export default router;
