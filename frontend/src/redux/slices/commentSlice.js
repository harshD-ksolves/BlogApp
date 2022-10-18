import {
    createSlice
} from "@reduxjs/toolkit";



const CommentsSlice = createSlice({
    name: "comments",
    initialState: {
        comments: [],
        isFetching: false,
        isError: false,
        success: false,
    },
    reducers: {
        getCommentsStart: (state) => {
            state.isFetching = true;
            state.isError = false;
            state.success = false;
        },
        getCommentsSuccess: (state, action) => {
            state.comments = action.payload;
            state.isFetching = false;
            state.isError = false;
            state.success = true;
        },
        getCommentsFailed: (state) => {
            state.isFetching = false;
            state.isError = true;
            state.success = false;
        },
        addCommentsStart: (state) => {
            state.isFetching = true;
            state.isError = false;
            state.success = false;
        },
        addCommentsSuccess: (state, action) => {
            state.isFetching = false;
            state.isError = false;
            state.success = true;
            state.comments.push(action.payload);
        },
        addCommentsFailed: (state) => {
            state.isFetching = false;
            state.isError = true;
            state.success = false;
        },
        updateCommentsStart:(state,action)=>{
            state.isFetching = true;
            state.isError = false;
            state.success = false;
            
        },
        updateCommentsSuccess:(state,action)=>{
            state.isFetching = false;
            state.isError = false;
            state.success = true;
            state.comments[
                state.comments.findIndex((item)=>item._id===action.payload._id)
            ]=action.payload;
        },
        updateCommentsFailed:(state)=>{
            state.isFetching = false;
            state.isError = true;
            state.success = false;
        },
        deleteCommentsStart:(state,action)=>{
            state.isFetching = true;
            state.isError = false;
            state.success = false;
        },
        deleteCommentsSuccess:(state,action)=>{
            state.isFetching = false;
            state.isError = false;
            state.success = true;
            state.comments.splice(
                state.comments.findIndex((item)=>item._id===action.payload),1    
            );
        },
        deleteCommentsFailed:(state)=>{
            state.isFetching = false;
            state.isError = true;
            state.success = false;
        }

    }
});

export const {
    getCommentsStart,
    getCommentsSuccess,
    getCommentsFailed,
    addCommentsStart,
    addCommentsSuccess,
    addCommentsFailed,
    updateCommentsFailed,
    updateCommentsSuccess,
    updateCommentsStart,
    deleteCommentsStart,
    deleteCommentsSuccess,
    deleteCommentsFailed
} = CommentsSlice.actions;

export default CommentsSlice.reducer