import {
    createSlice
} from "@reduxjs/toolkit";



const PostsSlice = createSlice({
    name: "Posts",
    initialState: {
        posts: [],
        isFetching: false,
        isError: false,
        success: false,
    },
    reducers: {
        getPostsStart: (state) => {
            state.isFetching = true;
            state.isError = false;
            state.success = false;
        },
        getPostsSuccess: (state, action) => {
            state.posts = action.payload;
            state.isFetching = false;
            state.isError = false;
            state.success = true;
        },
        getPostsFailed: (state) => {
            state.isFetching = false;
            state.isError = true;
            state.success = false;
        },
        addPostsStart: (state) => {
            state.isFetching = true;
            state.isError = false;
            state.success = false;
        },
        addPostsSuccess: (state, action) => {
            state.isFetching = false;
            state.isError = false;
            state.success = true;
            state.posts.push(action.payload);
        },
        addPostsFailed: (state) => {
            state.isFetching = false;
            state.isError = true;
            state.success = false;
        },
        updatePostsStart:(state,action)=>{
            state.isFetching = true;
            state.isError = false;
            state.success = false;
            
        },
        updatePostsSuccess:(state,action)=>{
            state.isFetching = false;
            state.isError = false;
            state.success = true;
            state.posts[
                state.posts.findIndex((item)=>item._id===action.payload._id)
            ]=action.payload;
        },
        updatePostsFailed:(state)=>{
            state.isFetching = false;
            state.isError = true;
            state.success = false;
        },
        deletePostsStart:(state,action)=>{
            state.isFetching = true;
            state.isError = false;
            state.success = false;
        },
        deletePostsSuccess:(state,action)=>{
            state.isFetching = false;
            state.isError = false;
            state.success = true;
            state.posts.splice(
                state.posts.findIndex((item)=>item._id===action.payload),1    
            );
        },
        deletePostsFailed:(state)=>{
            state.isFetching = false;
            state.isError = true;
            state.success = false;
        }

    }
});

export const {
    getPostsStart,
    getPostsSuccess,
    getPostsFailed,
    addPostsStart,
    addPostsSuccess,
    addPostsFailed,
    updatePostsFailed,
    updatePostsSuccess,
    updatePostsStart,
    deletePostsStart,
    deletePostsSuccess,
    deletePostsFailed
} = PostsSlice.actions;

export default PostsSlice.reducer