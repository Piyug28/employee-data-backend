const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./database'); // <-- this can be here, no problem

const app = express(); // <-- THIS LINE MUST BE BEFORE ANY app.use or app.get

app.use(express.json());
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// (Optional) Test DB connection route
app.get("/test-db", async (req, res) => {
  try {
    const [result] = await db.query("SELECT NOW() as currentTime");
    res.json({ message: "Database connected successfully!", time: result[0].currentTime });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
