const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");

router.get("/getallblogs", (req, res) => {
  Blog.find({}, (err, docs) => {
    if (!err) {
      return res.send(docs);
    } else {
      return res.status(400).json({ message: "Something went wrong" });
    }
  });
});

router.post("/getblogbyid", (req, res) => {
  Blog.find({ _id: req.body.blogid }, (err, docs) => {
    if (!err) {
      res.send(docs[0]);
    } else {
      return res.status(400).json({ message: "something went wrong" });
    }
  });
});

router.post("/deleteblog", (req, res) => {
  Blog.findByIdAndDelete(req.body.blogid, (err) => {
    if (err) {
      return res.status(400).json({ message: "Something went wrong" + err });
    } else {
      res.send("Blog deleted successfully");
    }
  });
});

router.post("/addblog", (req, res) => {
  const { blog } = req.body;

  const blogModel = new Blog({
    name: blog.name,

    description: blog.description,

    image: blog.image,
  });

  blogModel.save((err) => {
    if (err) {
      return res.status(400).json({ message: "Something went wrong" });
    } else {
      res.send("Blog Added Successfully");
    }
  });
});

// router.post("/addblog", async (req, res) => {
//   const newblog = new Blog({
//     name: req.body.name,
//     maxCount: req.body.maxCount,
//     description: req.body.description,
//   });
//   try {
//     const newblog = new Blog(req.body);
//     const blog = await newblog.save();

//     res.send("New Blog Added Successfully !");
//   } catch (error) {
//     return res.status(404).json({ message: error });
//   }
// });

router.post("/updateblog", (req, res) => {
  Blog.findByIdAndUpdate(
    req.body.blogid,
    {
      name: req.body.updatedblog.name,

      description: req.body.updatedblog.description,

      image: req.body.updatedblog.image,
    },
    (err) => {
      if (err) {
        return res.status(400).json({ message: "Something went wrong" + err });
      } else {
        res.send("Blog Updated Successfully");
      }
    }
  );
});

module.exports = router;
