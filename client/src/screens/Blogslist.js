import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Link } from "react-router-dom";
import { getAllBlogs, deleteBlog } from "../actions/blogActions";
export default function Blogslist() {
  const dispatch = useDispatch();
  const getallblogsstate = useSelector((state) => state.getAllBlogsReducer);
  const { blogs, loading, error } = getallblogsstate;

  // console.log(blogs);
  // console.log(loading);
  // console.log(error);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);
  return (
    <div>
      <h2>Blogs list</h2>

      <table className="table table-bordered table-responsive-sm">
        <thead>
          <tr>
            <th>Name</th>

            <th>Id</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {loading && <Loader />}
          {error && <Error error="something went wrong" />}
          {blogs &&
            blogs.map((blog) => {
              return (
                <tr>
                  <td>{blog.name}</td>

                  <td>{blog._id}</td>
                  <td>
                    <i
                      className="far fa-trash-alt"
                      style={{ marginRight: "10px" }}
                      onClick={() => {
                        dispatch(deleteBlog(blog._id));
                      }}
                    ></i>
                    <Link to={`/admin/editblog/${blog._id}`}>
                      <i className="fas fa-edit"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
