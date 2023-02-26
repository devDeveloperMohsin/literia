import mongoose from 'mongoose';
const { Schema } = mongoose;

const categorySchema = new Schema({
  title: { type: String, required: true },
  image: { type: String }
});

module.exports = mongoose.models.Category || mongoose.model('Category', categorySchema)