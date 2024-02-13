const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    paymentID: { type: String, required: true, unique: true },
    paymentCurrency: { type: String, required: true },
    admissionDate: { type: Date, required: true },
    nextAdmissionDate: { type: Date, required: true },
    nextMonthlyPaymentDate: { type: Date, required: true },
    admissionPrice: { type: Number, required: true },
    monthlyPaymentPrice: { type: Number, required: true },
    admissionPaymentHistory: [
      {
        Date: { type: Date },
        PaymentStatus: { type: Boolean },
        Price: { type: Number },
        currency: { type: String },
        transactionID: { type: String },
        senderNo: { type: String },
        paymentWay: { type: String },
      },
    ],
    monthlyPaymentHistory: [
      {
        Date: { type: Date },
        PaymentStatus: { type: Boolean },
        Price: { type: Number },
        currency: { type: String },
        transactionID: { type: String },
        senderNo: { type: String },
        paymentWay: { type: String },
      },
    ],
    paymentCreatedDate: { type: Date },
    paymentUpdatedDate: { type: Date },
    activeStatus: {
      type: String,
      default: "active",
    },
  },
  { versionKey: false }
);

const Payment = mongoose.model("payments", DataSchema);

module.exports = Payment;
