const mongoose = require('mongoose');

const conservationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
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
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  status: {
    type: String,
    enum: ['Active', 'Completed', 'Planned'],
    default: 'Planned'
  },
  targetSpecies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Animal'
  }],
  images: [{
    type: String
  }],
  partners: [{
    name: String,
    logo: String,
    website: String
  }],
  budget: {
    type: Number
  },
  volunteers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  achievements: [{
    title: String,
    description: String,
    date: Date
  }]
}, {
  timestamps: true
});

// Create index for geospatial queries
conservationSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Conservation', conservationSchema); 