const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const router = express.Router();
const Order = require("../models/Order");

// Package data — same as frontend
const packages = {
  "uttarakhand-char-dham": {
    name: "Char Dham & Kedarnath",
    price: 199,
  },
  "himachal-spiti": {
    name: "Manali to Spiti Valley",
    price: 249,
  },
  "rajasthan-royal": {
    name: "Jaipur · Jodhpur · Jaisalmer",
    price: 149,
  },
  "haridwar-guide": {
    name: "Haridwar Complete Guide",
    price: 9,
  },
};

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ── Route 1: Create Order ──
// Frontend yahan call karega jab user "Pay Now" dabaye
router.post("/create-order", async (req, res) => {
  try {
    const { packageId, email } = req.body;

    // Package check karo
    const pkg = packages[packageId];
    if (!pkg) {
      return res.status(400).json({ error: "Invalid package" });
    }

    // Razorpay order banao
    // Amount paise mein hota hai — ₹199 = 19900
    const razorpayOrder = await razorpay.orders.create({
      amount: pkg.price * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    // MongoDB mein save karo
    const order = await Order.create({
      razorpayOrderId: razorpayOrder.id,
      packageId,
      packageName: pkg.name,
      amount: pkg.price * 100,
      email: email || null,
      status: "created",
    });

    // Frontend ko order details bhejo
    res.json({
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error("Create order error:", error);
    res.status(500).json({ error: "Order create karne mein error" });
  }
});

// ── Route 2: Verify Payment ──
// Payment hone ke baad frontend yahan call karega
router.post("/verify", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    // Signature verify karo — ye security check hai
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    const isValid = expectedSignature === razorpay_signature;

    if (!isValid) {
      return res.status(400).json({ error: "Invalid payment signature" });
    }

    // MongoDB mein order update karo
    const order = await Order.findOneAndUpdate(
      { razorpayOrderId: razorpay_order_id },
      {
        razorpayPaymentId: razorpay_payment_id,
        status: "paid",
      },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    // Payment successful — PDF link bhejo
    // Abhi hardcoded hai — baad mein actual PDF links daalna
 const pdfLinks = {
  "uttarakhand-char-dham": "/pdfs/char-dham-itinerary.pdf",
  "himachal-spiti": "/pdfs/spiti-valley-itinerary.pdf",
  "rajasthan-royal": "/pdfs/rajasthan-itinerary.pdf",
  "haridwar-guide": "https://drive.google.com/file/d/1ga6-53Gma5Poslru2M6kFJmMQ0fzxINT/view?usp=sharing",
};
    res.json({
      success: true,
      message: "Payment verified!",
      pdfUrl: pdfLinks[order.packageId] || null,
      packageName: order.packageName,
    });
  } catch (error) {
    console.error("Verify payment error:", error);
    res.status(500).json({ error: "Payment verify karne mein error" });
  }
});

module.exports = router;