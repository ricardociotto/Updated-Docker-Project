const express = require('express');
const router = express.Router();
const pool = require('../db');

// Create 
router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const result = await pool.query("INSERT INTO items (name) VALUES ($1) RETURNING *", [name]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error creating an item." });
  }
});

// Read 
router.get('/', async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM items");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Error searching an item" });
  }
});

// Read 
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM items WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Item not found." });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error searching for the item." });
  }
});

// Update 
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const result = await pool.query("UPDATE items SET name = $1 WHERE id = $2 RETURNING *", [name, id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Item not found." });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error updating the item." });
  }
});

// Delete 
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM items WHERE id = $1 RETURNING *", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Item not found." });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error deleting the item." });
  }
});

module.exports = router;
