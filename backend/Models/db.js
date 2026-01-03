const mongoose = require("mongoose");

const mongo_url = process.env.MONGO_URL;

if (!mongo_url) {
  console.error("MONGO_URL is missing in .env");
  process.exit(1);
}

mongoose
  .connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err.message);
    process.exit(1);
  });
