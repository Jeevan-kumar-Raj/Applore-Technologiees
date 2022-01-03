import axios from "axios";
export const getAllBlogs = () => (dispatch) => {
  dispatch({ type: "GET_BLOGS_REQUEST" });

  axios
    .get("/api/blogs/getallblogs")
    .then((res) => {
      console.log(res);

      dispatch({ type: "GET_BLOGS_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_BLOGS_FAILED", payload: err });
    });
};

export const getBlogById = (blogid) => (dispatch) => {
  dispatch({ type: "GET_BLOGBYID_REQUEST" });

  axios
    .post("/api/blogs/getblogbyid", { blogid })
    .then((res) => {
      console.log(res);

      dispatch({ type: "GET_BLOGBYID_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_BLOGBYID_FAILED", payload: err });
    });
};

export const deleteBlog = (blogid) => (dispatch) => {
  dispatch({ type: "DELETE_BLOG_REQUEST" });

  axios
    .post("/api/blogs/deleteblog", { blogid })
    .then((res) => {
      dispatch({ type: "DELETE_PRODUCT_SUCCESS", payload: res.data });
      alert("Blog deleted successfully");
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: "DELETE_BLOG_FAILED", payload: err });
    });
};

export const addBlog = (blog) => (dispatch) => {
  dispatch({ type: "ADD_PRODUCT_REQUEST" });

  axios
    .post("/api/blogs/addblog", { blog })
    .then((res) => {
      console.log(res);
      dispatch({ type: "ADD_BLOG_SUCCESS" });
      window.location.reload();
    })
    .catch((err) => {
      dispatch({ type: "ADD_BLOG_FAILED" });
    });
};

export const updateBlog = (blogid, updatedblog) => (dispatch) => {
  dispatch({ type: "UPDATE_BLOG_REQUEST" });

  axios
    .post("/api/blogs/updateblog", { blogid, updatedblog })
    .then((res) => {
      console.log(res);
      dispatch({ type: "UPDATE_BLOG_SUCCESS" });
      window.location.href = "/admin/blogslist";
    })
    .catch((err) => {
      dispatch({ type: "UPDATE_BLOG_FAILED" });
    });
};
