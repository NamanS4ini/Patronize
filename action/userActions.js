"use server";
import Razorpay from "razorpay";
import payment from "@/models/payment";
import connectDB from "@/DB/connectDB";
import user from "@/models/user";

async function initiate(amount, toUser, Paymentform) {
  await connectDB();
  var instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
  });

  instance.orders.create({
    amount: 5000,
    currency: "INR",
    receipt: "receipt#1",
    notes: {
      key1: "value3",
      key2: "value2",
    },
  });
}
