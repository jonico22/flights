import { configureStore } from "@reduxjs/toolkit";

import detailSlice from "../slices/detail";

export default configureStore({
    reducer: {
        detail: detailSlice
    }
});