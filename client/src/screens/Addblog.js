import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../actions/blogActions";
import Success from "../components/Success";
import Error from "../components/Error";
import Loader from "../components/Loader";

export default function Addblog() {
  const [name, setname] = useState();

  const [imageurl, setimageurl] = useState();

  const [description, setdescription] = useState();
  const dispatch = useDispatch();

  const addblogstate = useSelector((state) => state.addBlogReducer);

  const { success, error, loading } = addblogstate;

  const addblog = (e) => {
    e.preventDefault();
    const blog = {
      name: name,

      image: imageurl,
      description: description,
    };
    console.log(blog);
    dispatch(addBlog(blog));
  };
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-8 shadow p-3 mb-5 bg-white rounded">
          {success && <Success success="Blog Added Succesfully" />}
          {loading && <Loader />}
          {error && <Error error="Something went wrong" />}

          <h2>Blog Product</h2>
          <form onSubmit={addblog}>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="Title"
              required
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />

            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="decription"
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            />
            <input
              type="text"
              required
              className="form-control mb-2 mr-sm-2"
              placeholder="imageurl"
              value={imageurl}
              onChange={(e) => {
                setimageurl(e.target.value);
              }}
            />

            <button
              className="btn mt-5"
              type="submit"
              style={{ float: "left" }}
            >
              Add Blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
