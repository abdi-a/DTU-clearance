require('dotenv').config();         // load .env values
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // loads .env into process.env

const app = express();

// small helpers (middleware)
app.use(cors());                    // allow frontend to call backend
app.use(express.json());            // read JSON body in requests
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// a simple test route so we know server is alive
app.get('/', (req, res) => {
  res.send('Clearance backend is alive');
});

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
