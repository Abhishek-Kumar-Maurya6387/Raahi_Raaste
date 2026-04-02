const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const paymentRoutes = require("./routes/payment");

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174", process.env.FRONTEND_URL],
    credentials: true,
  })
);

// Routes
app.use("/api/payment", paymentRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Raahi Raaste Backend Running!" });
});

// MongoDB connect
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected!");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });