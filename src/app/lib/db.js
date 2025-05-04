import mongoose from 'mongoose';

const MONGODB_URI ="mongodb+srv://gloop216:dI5NO46sO6YgEKTR@cluster0.v1dyu.mongodb.net/";

if (!MONGODB_URI) {
  throw new Error('يرجى ضبط متغير البيئة MONGODB_URI');
}

let cached = global.mongoose || { conn: null, promise: null };

async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
