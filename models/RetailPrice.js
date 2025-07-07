const mongoose = require('mongoose');

const retailPriceSchema = new mongoose.Schema({
  organizationType: {
    type: String,
    enum: ['NNPC', 'IOC', 'Private'],
    required: true
  },
  companyName: { type: String, required: true },
  region: { type: String, required: true },
  state: { type: String, required: true },
  product: {
    type: String,
    enum: ['PMS', 'AGO', 'DPK', 'LPG'],
    required: true
  },
  price: { type: Number, required: true },
  uploadDate: { type: Date, default: Date.now },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: {
    type: String,
    enum: ['pending', 'approved'],
    default: 'pending'
  },
  fileUrl: { type: String } 
}, { timestamps: true });

module.exports = mongoose.model('RetailPrice', retailPriceSchema);
