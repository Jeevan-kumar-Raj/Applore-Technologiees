export const getAllBlogsReducer = (state = { blogs: [] }, action) => {
  switch (action.type) {
    case "GET_BLOGS_REQUEST":
      return {
        loading: true,
      };
    case "GET_BLOGS_SUCCESS":
      return {
        blogs: action.payload,
        loading: false,
      };
    case "GET_BLOGS_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const getBlogByIdReducer = (state = { blog: {} }, action) => {
  switch (action.type) {
    case "GET_BLOGBYID_REQUEST":
      return {
        loading: true,
      };
    case "GET_BLOGBYID_SUCCESS":
      return {
        blog: action.payload,
        loading: false,
      };
    case "GET_BLOGBYID_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const deleteBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_BLOGS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_BLOG_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "DELETE_BLOG_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const addBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_BLOG_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ADD_BLOG_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "ADD_BLOG_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const updateBlogReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_BLOG_REQUEST":
      return {
        ...state,
        updateloading: true,
      };
    case "UPDATE_BLOG_SUCCESS":
      return {
        ...state,
        updateloading: false,
        success: true,
      };
    case "UPDATE_BLOG_FAILED":
      return {
        ...state,
        updateloading: false,
        updateerror: action.payload,
      };

    default:
      return state;
  }
};
