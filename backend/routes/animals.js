const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Middleware to check if user is admin
const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admin only.' });
    }
    next();
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// @route   GET api/animals
// @desc    Get all animals
// @access  Public
router.get('/', async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/animals
// @desc    Create a new animal
// @access  Private/Admin
router.post('/', isAdmin, async (req, res) => {
  try {
    const newAnimal = new Animal(req.body);
    const animal = await newAnimal.save();
    res.json(animal);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/animals/:id
// @desc    Update an animal
// @access  Private/Admin
router.put('/:id', isAdmin, async (req, res) => {
  try {
    const animal = await Animal.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!animal) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    res.json(animal);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/animals/:id
// @desc    Delete an animal
// @access  Private/Admin
router.delete('/:id', isAdmin, async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    if (!animal) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    await animal.remove();
    res.json({ message: 'Animal removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router; 