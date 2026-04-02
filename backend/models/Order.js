const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    // Razorpay order ID
    razorpayOrderId: {
      type: String,
      required: true,
    },
    // Razorpay payment ID (payment hone ke baad aata hai)
    razorpayPaymentId: {
      type: String,
      default: null,
    },
    // Package details
    packageId: {
      type: String,
      required: true,
    },
    packageName: {
      type: String,
      required: true,
    },
    // Amount in paise (₹199 = 19900 paise)
    amount: {
      type: Number,
      required: true,
    },
    // Payment status
    status: {
      type: String,
      enum: ["created", "paid", "failed"],
      default: "created",
    },
    // Buyer email
    email: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt auto add hoga
  }
);

module.exports = mongoose.model("Order", orderSchema);