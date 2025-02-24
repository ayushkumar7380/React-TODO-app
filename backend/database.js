const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/userDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

module.exports = mongoose;
