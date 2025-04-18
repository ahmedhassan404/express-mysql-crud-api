import * as User from '../models/userModel.js';

export const getUsers = (_req, res) => {
  User.getAllUsers((err, result) => {
    if (err) return res.status(500).send('Error retrieving users');
    res.json(result);
  });
};

export const getUser = (req, res) => {
  const { id } = req.params;
  User.getUserById(id, (err, result) => {
    if (err) return res.status(500).send('Database query failed');
    if (result.length === 0) return res.status(404).send('User not found');
    res.json(result[0]);
  });
};

export const createUser = (req, res) => {
  const { name, email } = req.body;
  User.createUser(name, email, (err) => {
    if (err) return res.status(500).send('Database query failed');
    res.status(201).send('User created successfully');
  });
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  User.updateUser(id, name, email, (err, result) => {
    if (err) return res.status(500).send('Database query failed');
    if (result.affectedRows === 0) return res.status(404).send('User not found');
    res.send('User updated successfully');
  });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  User.deleteUser(id, (err, result) => {
    if (err) return res.status(500).send('Database query failed');
    if (result.affectedRows === 0) return res.status(404).send('User not found');
    res.send('User deleted successfully');
  });
};
