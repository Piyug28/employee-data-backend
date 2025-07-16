const db = require('../database');
const bcrypt = require('bcrypt');

exports.createUser = async (username, password, role) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return db.execute(
    'INSERT INTO users (username, password_hash, role) VALUES (?, ?, ?)',
    [username, hashedPassword, role]
  );
};

exports.findUserByUsername = async (username) => {
  const [rows] = await db.execute(
    'SELECT * FROM users WHERE username = ?',
    [username]
  );
  return rows[0];
};
