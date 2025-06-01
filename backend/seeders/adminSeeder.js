const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
require('dotenv').config();

const createDefaultAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/konserva');

    // Check if admin already exists
    const adminExists = await User.findOne({ email: 'admin@konserva.com' });
    
    if (!adminExists) {
      // Create admin user
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash('admin123', salt);

      const admin = new User({
        name: 'Admin',
        email: 'admin@konserva.com',
        password: hashedPassword,
        role: 'admin'
      });

      await admin.save();
      console.log('Default admin account created successfully');
    } else {
      console.log('Admin account already exists');
    }

    await mongoose.connection.close();
  } catch (error) {
    console.error('Error creating admin account:', error);
    process.exit(1);
  }
};

createDefaultAdmin(); 