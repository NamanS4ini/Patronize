"use server";
import Razorpay from "razorpay";
import payment from "@/models/payment";
import connectDB from "@/DB/connectDB";
import user from "@/models/user";

async function initiate(amount, toUser, Paymentform) {
  console.log(toUser);
  await connectDB();
  var instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
  });

  let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
  };
  let x = await instance.orders.create(options);

  await payment.create({oid: x.id, amount: amount, toUser: toUser, name: Paymentform.name, message: Paymentform.message, done: false});
  return x
}

export {initiate as "initiate"}