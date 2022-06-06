import { configureStore } from "@reduxjs/toolkit";
// import uiSlice from "./ui-slice";
import debateSlice from "./debate-slice";

const store = configureStore({
    reducer: {
        // ui: uiSlice.reducer,
        debate: debateSlice.reducer,
    },
})

export default store