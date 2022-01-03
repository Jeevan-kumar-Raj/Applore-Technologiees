const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },

    description: {
      type: String,
      require: true,
    },
  },
  {
    timeStamps: true,
  }
);

const Blog = mongoose.model("posts", blogSchema);

module.exports = Blog;
