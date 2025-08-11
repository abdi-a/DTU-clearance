require('dotenv').config();         
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// small helpers (middleware)
app.use(cors());                    
app.use(express.json());            

// a simple test route so we know server is alive
app.get('/', (req, res) => {
  res.send('Clearance backend is alive');
});

// --- Login/Auth Routes ---
const authRoutes = require('./routes/authRoutes');  // make sure you already have this file
app.use('/api/auth', authRoutes);

// --- Protected Routes ---
const protectedRoutes = require('./routes/protectedRoutes'); // NEW
app.use('/api/protected', protectedRoutes);                   // NEW

// connect to MongoDB, then start the server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });
