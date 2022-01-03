import React from "react";
import { getBlogById, updateBlog } from "../actions/blogActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
export default function Editblog({ match }) {
  const dispatch = useDispatch();
  const blogstate = useSelector((state) => state.getBlogByIdReducer);

  const { blog, error, loading } = blogstate;

  const updateblogstate = useSelector((state) => state.updateBlogReducer);

  const { success, updateerror, updateloading } = updateblogstate;

  const [name, setname] = useState("");

  const [imageurl, setimageurl] = useState("");

  const [description, setdescription] = useState("");

  useEffect(() => {
    if (blog) {
      if (blog._id == match.params.blogid) {
        setname(blog.name);

        setdescription(blog.description);
        setimageurl(blog.image);
      } else {
        dispatch(getBlogById(match.params.blogid));
      }
    } else {
      dispatch(getBlogById(match.params.blogid));
    }
  }, [dispatch, blog]);

  function editblog(e) {
    e.preventDefault();
    const updatedblog = {
      name: name,

      description: description,

      image: imageurl,
    };

    dispatch(updateBlog(match.params.blogid, updatedblog));
  }

  return (
    <div>
      <h2>Edit Blog</h2>
      {loading && <Loader />}

      {updateloading && <Loader />}
      {updateerror && <Error error="Something went wrong" />}
      {success && <Success success="Blog Updated Successfully" />}
      {error && <Error error="something went wrong" />}
      {blog && (
        <div>
          <form onSubmit={editblog}>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              placeholder="name"
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
              Edit Product
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
