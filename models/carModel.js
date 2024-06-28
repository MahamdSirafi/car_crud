const mongoose = require('mongoose');
const carSchema = new mongoose.Schema(
  {
    model: { type: String, required: [true, 'enter model'] },
    brand: {
      type: String,
      required: [true, 'enter brand'],
    },
    color: {
      type: String,
      required: [true, 'enter color'],
    },
    transmission: {
      type: String,
      enum: ['manual', 'automatic'],
      default: 'manual',
    },
    photo: {
      type: String,
      required: [true, 'enter photo'],
    },
    price: {
      type: Number,
      required: [true, 'enter price'],
    },
    productionDate: {
      required: [true, 'enter production date'],
      type: Date,
    },
  },
  { timestamps: true, versionKey: false }
);
const Car = mongoose.model('Car', carSchema);
module.exports = Car;
