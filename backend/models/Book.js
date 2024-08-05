import mongoose from 'mongoose';
import AutoIncrementFactory from 'mongoose-sequence';
const AutoIncrement = AutoIncrementFactory(mongoose);
const bookSchema = mongoose.Schema(
  {
    _id: { type: Number },
    title: { type: String, required: [true, 'No title provide.'] },
    author: { type: String, required: [true, 'Author is required.'] },
    publishedYear: {
      type: Number,
      required: [true, 'Published year is required'],
    },
  },
  { timestamps: true }
);

bookSchema.plugin(AutoIncrement, { inc_field: '_id' });
export const Book = mongoose.model('Book', bookSchema);
