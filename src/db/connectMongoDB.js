const mongoose = require('mongoose');

const connectMongoDB = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('✅ MongoDB connection established successfully');
};

module.exports = connectMongoDB;
