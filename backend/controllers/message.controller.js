import Conversation from "../models/Converstaion.model.js";
import Message from "../models/Message.model.js";
import { getReceiverSocketId , io } from "../socket/socket.js";

const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        //if there is empty means users are sendeing messages to each other for the first time
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }




        await conversation.save();
        await newMessage.save();

        // socket io functionality will be here
        const receiverSocketId = getReceiverSocketId(receiverId);
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }


        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in message controller", error.message);
        res.status(500).json({ error: "Internal server error sending messages" })
    }
}

const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages");

        if (!conversation) {
            return res.status(200).json([]);
        }

        const messages = conversation.messages;

        return res.status(200).json(messages);

    } catch (error) {
        console.log("Error in message controller", error.message);
        return res.status(500).json({ error: "Internal server error" })
    }
}



export default {
    sendMessage,
    getMessages,
}