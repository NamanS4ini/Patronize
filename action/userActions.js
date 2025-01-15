"use server";
import Razorpay from "razorpay";
import payment from "@/models/payment";
import connectDB from "@/DB/connectDB";
import User from "@/models/user";
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

  await payment.create({
    oid: x.id,
    amount: amount,
    toUser: toUser,
    name: Paymentform.name,
    message: Paymentform.message,
    done: false,
  });
  return x;
}

async function fetchUser(username) {
  await connectDB();
  let u = await User.findOne({ username: username });
  if (!u) {
    return null;
  }
  let user = u.toObject({ flattenObjectIds: true });
  return user;
}

async function fetchPayments(username) {
  await connectDB();
  let payments = await payment
    .find({ toUser: username })
    .sort({ amount: -1 })
    .lean();

  // Convert _id to string for each document
  payments = payments.map((doc) => ({
    ...doc,
    _id: doc._id.toString(),
  }));

  return payments;
}

async function UpdateUser(username,email, data) {
  await connectDB();
  console.log(data);
  let ndata = Object.fromEntries(data);
  console.log(ndata);
  if (username !== ndata.username) {
    let u = await User.findOne({ username: ndata.username });
    if (u) {
      return { error: "Username already exists" };
    }
  }
  await User.updateOne({email: email}, ndata)
}

export { initiate as "initiate" };
export { fetchUser as "fetchUser" };
export { UpdateUser as "UpdateUser" };
export { fetchPayments as "fetchPayments" };
