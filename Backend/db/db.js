const mongoose = require("mongoose");
require("dotenv").config(); // Ensure this is loaded

function connectToDb() {
    // console.log("DB_CONNECT:", process.env.DB_CONNECT); // Debugging line to verify the value
    mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("✅ Connected to MongoDB"))
        .catch(err => console.log("❌ DB Connection Error:", err));
}

module.exports = connectToDb;
