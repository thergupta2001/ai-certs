const mongoose = require('mongoose')

const connectDB = async () => {
     try {
          await mongoose.connect(process.env.MONGO_URI)
          console.log('Connected to Database')
     } catch (err) {
          console.log(`MongoDB error ${err}`)
     }
}

module.exports = connectDB