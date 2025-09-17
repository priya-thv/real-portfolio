import express from "express";
import Message from "../models/messages.model.js";

const router = express.Router();

// Email validation function
const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

router.post("/send", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log(req.body);

    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    // Check for duplicate email
    const existingEmail = await Message.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "This email is already registered." });
    }

    // Check for missing name or email
    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    // Save new message
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    res.status(201).json({ msg: "Message saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
