const { default: mongoose } = require("mongoose");

const categoryScheema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
});

const Category = mongoose.model("category", categoryScheema);

module.exports = {
  Category,
};
