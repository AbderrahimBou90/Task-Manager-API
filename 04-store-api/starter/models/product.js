// we use mongoose for setup schema and model
const mongoose = require("mongoose");

// in productSchema we setup properties and validation
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "product price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: '{VALUE} is not supported'
    },
    // enum:['ikea','liddy','caressa','marcos']
  },
});

// setup model and export it 
module.exports = mongoose.model('Product',productSchema)