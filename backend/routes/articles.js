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

// @route   GET api/articles
// @desc    Get all articles
// @access  Public
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find().sort({ date: -1 });
    res.json(articles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/articles/:id
// @desc    Get article by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/articles
// @desc    Create a new article
// @access  Private/Admin
router.post('/', isAdmin, async (req, res) => {
  try {
    const newArticle = new Article({
      ...req.body,
      author: req.user.id
    });
    const article = await newArticle.save();
    res.json(article);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/articles/:id
// @desc    Update an article
// @access  Private/Admin
router.put('/:id', isAdmin, async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/articles/:id
// @desc    Delete an article
// @access  Private/Admin
router.delete('/:id', isAdmin, async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    await article.remove();
    res.json({ message: 'Article removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router; 