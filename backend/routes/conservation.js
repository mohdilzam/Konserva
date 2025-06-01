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

// @route   GET api/conservation
// @desc    Get all conservation programs
// @access  Public
router.get('/', async (req, res) => {
  try {
    const programs = await Conservation.find();
    res.json(programs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/conservation/:id
// @desc    Get conservation program by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const program = await Conservation.findById(req.params.id);
    if (!program) {
      return res.status(404).json({ message: 'Conservation program not found' });
    }
    res.json(program);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/conservation
// @desc    Create a new conservation program
// @access  Private/Admin
router.post('/', isAdmin, async (req, res) => {
  try {
    const newProgram = new Conservation(req.body);
    const program = await newProgram.save();
    res.json(program);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/conservation/:id
// @desc    Update a conservation program
// @access  Private/Admin
router.put('/:id', isAdmin, async (req, res) => {
  try {
    const program = await Conservation.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!program) {
      return res.status(404).json({ message: 'Conservation program not found' });
    }
    res.json(program);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/conservation/:id
// @desc    Delete a conservation program
// @access  Private/Admin
router.delete('/:id', isAdmin, async (req, res) => {
  try {
    const program = await Conservation.findById(req.params.id);
    if (!program) {
      return res.status(404).json({ message: 'Conservation program not found' });
    }
    await program.remove();
    res.json({ message: 'Conservation program removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router; 