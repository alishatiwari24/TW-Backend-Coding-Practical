import mongoose from "mongoose";

const { Schema } = mongoose;

// TASK-004 - Define rides model
const schema = new Schema({
  start: {
    lat: { type: Number, required: true },
    long: { type: Number, required: true }
  },
  end: {
    lat: { type: Number, required: true },
    long: { type: Number, required: true }
  },
  driver: {
    name: { type: String, required: true },
    vehicleNumber: { type: String, required: true },
    vehicleType: { type: String, enum: ["CAR", "BIKE"] }
  },
  customers: {
    type: Array,
    schema: [{ name: { type: String, required: true } }]
  },
  createdAt: { type: String, default: new Date().toISOString() },
  updatedAt: { type: String, default: new Date().toISOString() }
});

export const Ride = mongoose.model("rides", schema, "rides");
