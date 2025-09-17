import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    message: { type: String }
}, { timestamps: true });

const Message = mongoose.model("Message", schema);
export default Message;
