import { db } from '../app.js';

export const getAllUsers = (callback) => {
  db.query('SELECT * FROM users', callback);
};

export const getUserById = (id, callback) => {
  db.query('SELECT * FROM users WHERE id = ?', [id], callback);
};

export const createUser = (name, email, callback) => {
  db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], callback);
};

export const updateUser = (id, name, email, callback) => {
  db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], callback);
};

export const deleteUser = (id, callback) => {
  db.query('DELETE FROM users WHERE id = ?', [id], callback);
};
