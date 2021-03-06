import { Schema, model } from 'mongoose';

const CardSchema = new Schema(
  {
    title: String,
    description: String,
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export default model('Card', CardSchema);
