import { Schema, model } from 'mongoose';

const BannerSchema = new Schema(
  {
    title: String,
    order: Number,
    active: { type: Boolean, default: true },
    file: String,
  },
  {
    timestamps: true,
  }
);

export default model('Banner', BannerSchema);
