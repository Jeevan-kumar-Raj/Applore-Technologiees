import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getBlogById } from "../actions/blogActions";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function Blogdescscreen({ match }) {
  const blogid = match.params.id;
  const dispatch = useDispatch();

  const getblogbyidstate = useSelector((state) => state.getBlogByIdReducer);

  const { blog, loading, error } = getblogbyidstate;

  useEffect(() => {
    dispatch(getBlogById(blogid));
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error="Something went wrong" />
      ) : (
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card p-2 m-3 shadow p-3 mb-5 bg-white rounded">
              <h1>
                <b>{blog.name}</b>
              </h1>
              <hr />
              <img src={blog.image} className="img-fluid m-3 bigimg" alt="" />
              <p>{blog.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
