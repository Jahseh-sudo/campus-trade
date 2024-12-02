const express = require('express');
const router = express.Router();
const pool = require('../config/database'); // Ensure you import your database connection

// GET products by category
router.get('/category/:categoryName', async (req, res) => {
  const { categoryName } = req.params;

  try {
    // Query to select products by category name, assuming the column is category_name in the database
    const [rows] = await pool.execute(
      'SELECT * FROM products WHERE category_name = ?',
      [categoryName]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: 'No products found in this category' });
    }

    res.json(rows);
  } catch (error) {
    console.error('Error fetching products:', error); // Log the error for debugging
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
