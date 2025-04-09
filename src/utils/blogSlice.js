import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    allBlogs: [],
    showBlogs: [],
    newAddedCommentId:'',
    firstBlogVisit : true
  },
  reducers: {
    addAllBlog(state, action) {
      state.allBlogs = action.payload;
    },
    setShowBlogs(state, action) {
      state.showBlogs = action.payload;
    },
    addNewComment(state, action) {
      state.newAddedCommentId = action.payload;
    },
    setFirstBlogVisit:(state)=>{
      state.firstBlogVisit = false;
    }

  },
});

export const { addAllBlog, setShowBlogs,addNewComment,setFirstBlogVisit } = blogSlice.actions;

export default blogSlice.reducer;
