import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishListNews : [],
    newsWishlistCount: 0,
};

const NewsSlice = createSlice({
    initialState: initialState,
    name: "news",
    reducers:{
        setWishListNews: (state, action) =>{
            state.wishListNews = action.payload;
            state.newsWishlistCount = action.payload.length;
        },
        clearWishListNews: (state, action) =>{
            state.wishListNews = [];
            state.newsWishlistCount = 0;
        },
    }
});

export const {setWishListNews, clearWishListNews} = NewsSlice.actions;

export const getWishListNews = (state) => state.newsState.wishListNews;
export const getWishListNewsCount = (state) => state.newsState.newsWishlistCount;

export default NewsSlice.reducer;