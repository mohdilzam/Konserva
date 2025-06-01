const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  scientificName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Kritis', 'Terancam', 'Rentan'],
    required: true
  },
  population: {
    type: Number,
    required: true
  },
  habitat: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  images: [{
    type: String,
    required: true
  }],
  threats: [{
    type: String
  }],
  conservationEfforts: [{
    type: String
  }]
}, {
  timestamps: true
});

// Create index for geospatial queries
animalSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Animal', animalSchema); 