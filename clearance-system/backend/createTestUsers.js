require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

async function createUsers() {
  await mongoose.connect(process.env.MONGO_URI);

  const hashedPass = await bcrypt.hash('password123', 10);

  const users = [
    { username: 'admin1', password: hashedPass, role: 'admin' },
    { username: 'dept1', password: hashedPass, role: 'department' },
    { username: 'student1', password: hashedPass, role: 'student' }
  ];

  await User.insertMany(users);
  console.log('✅ Test users created');
  mongoose.connection.close();
}

createUsers();
