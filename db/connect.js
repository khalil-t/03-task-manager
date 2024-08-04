const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/miniprojects', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const TaskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  completed: { type: Boolean, required: true, default: false },
});

module.exports = mongoose.model('Task', TaskSchema);
