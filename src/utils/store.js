import { configureStore } from "@reduxjs/toolkit";
import blogRducer from "./blogSlice";

const appStore = configureStore({
  reducer: {
    blog: blogRducer,
  },
});

export default appStore;
