import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import payment from "@/models/payment";
import Razorpay from "razorpay";
import connectDB from "@/DB/connectDB";

export const POST = async (req) => {
    await connectDB()
    let body = await req.formData()
}