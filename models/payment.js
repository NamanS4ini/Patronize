import mongoose from "mongoose";

const { Schema, model } = mongoose;

const paymentSchema = new Schema({
    name:{ type: String, required: true },
    toUser:{ type: String, required: true },
    oid:{ type: String, required: true },
    message:{ type: String, required: true },
    amount:{ type: Number, required: true },
    done:{ type: Boolean, required: true },
})

export default mongoose.models.Payment || model("Payment", paymentSchema);