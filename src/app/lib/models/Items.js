import { Schema, model, models } from 'mongoose';

const AssetSchema = new Schema(
  {
    assetId: { type: String },
    assetName: { type: String },
    quantity: { type: String},
    location: { type: String },
    status: {
      type: String,
      enum: ['جديد', 'مستخدم', 'تالف'],
    
    },
    notes: { type: String },
    authority: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// ✅ استخدم `models.Asset` لتجنب تعريف الموديل أكثر من مرة أثناء التطوير
const Asset = models.Asset || model('Asset', AssetSchema);

export default Asset;
