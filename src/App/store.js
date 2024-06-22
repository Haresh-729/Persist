import { configureStore } from "@reduxjs/toolkit";
import DashboardSlice from "./Slice/DashboardSlice";
import NewsSlice from "./Slice/NewsSlice";

const Store =configureStore({
    reducer:{
        dashboardState: DashboardSlice,
        receipeState: NewsSlice,
    }
});

export default Store;