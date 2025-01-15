import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import payment from "@/models/payment";
import Razorpay from "razorpay";
import connectDB from "@/DB/connectDB";

export const POST = async (req) => {
  await connectDB();
  let body = await req.formData();
  body = Object.fromEntries(body);
  console.log(body);
  let p = await payment.findOne({ oid: body.razorpay_order_id });

  if (!p) {
    return NextResponse.json({succes: false, message:"Oid not found"});
  }

  let xx = validatePaymentVerification(
    {
      "order_id": body.razorpay_order_id,
      "payment_id": body.razorpay_payment_id,
    },
    body.razorpay_signature,
    process.env.NEXT_PUBLIC_RAZORPAY_SECRET
  );

  if (xx) {
    const updatedPayment = await payment.findOneAndUpdate(
      { oid: body.razorpay_order_id },
      { done: true },
      { new: true }
    );
    return NextResponse.redirect(`http://localhost:3000/${updatedPayment.toUser}?paymentDone=true`);
  }
  else{
    return NextResponse.json({succes: false, message:"Payment Verification failed"});
  }
};

