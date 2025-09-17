import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import messageRoutes from "./routes/message.route.js";
import connectToMongoDB from "./db/mongodb.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Serve frontend files
app.use(express.static(path.join(__dirname, "../portfolio")));

// ✅ FIXED: Use "/*" instead of "*"
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../portfolio/home.html"));
});


// Chrome devtools JSON
app.get("/.well-known/appspecific/com.chrome.devtools.json", (req, res) => {
  res.json({ status: "ok" });
});

// API routes
app.use("/api/messages", messageRoutes);

// Start the server only after DB connection
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectToMongoDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startServer();
