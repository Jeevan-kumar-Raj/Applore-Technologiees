import React from "react";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../actions/blogActions";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function Homescreen() {
  const getallblogsstate = useSelector((state) => state.getAllBlogsReducer);

  const { loading, blogs, error } = getallblogsstate;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  return (
    <div>
      <div className="row justify-content-center mt-5 ml-2 mr-2">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error error="Something went wrong..." />
        ) : (
          blogs.map((blog) => {
            return (
              <div className="col-md-10 m-2 p-2 shadow p-3 mb-5 bg-white rounded card">
                <h2>{blog.name}</h2>
                <hr />
                <img src={blog.image} className="img-fluid" alt="" />
                <h1>{blog.description}</h1>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
