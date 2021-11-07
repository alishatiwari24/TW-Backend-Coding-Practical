import mongoose from 'mongoose';

const { Schema } = mongoose;

// TASK-004 - Define rides model
const schema = new Schema({});

export const Ride = mongoose.model('rides', schema, 'rides');
