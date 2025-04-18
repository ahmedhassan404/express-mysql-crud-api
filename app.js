import express from 'express';
import mysql from 'mysql';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json());

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_example',
});

db.connect((err) => {
  if (err) {
    console.error('Failed to connect to database:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

app.get('/', (_req, res) => {
  res.send('<h1>Welcome to my Express server</h1>');
});

app.use('/user', userRoutes);

app.listen(5001, (err) => {
  if (err) {
    console.error('Server error:', err);
    return;
  }
  console.log('Server running on port 5001');
});
