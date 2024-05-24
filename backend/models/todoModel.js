const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ['pending', 'in progress', 'completed'],
    default: 'pending'
  },
  dueDate: {
    type: Date
  }
}, {
  timestamps: true
});

const TodoModel = mongoose.model('Todo', todoSchema);

module.exports = TodoModel;
