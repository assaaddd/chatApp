import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message:{
        type: String,
        requried: true
    }
    //it is like showing the time to the users
} , { timestamps: true });

const Message = mongoose.model("Message" , messageSchema);

export default Message;
