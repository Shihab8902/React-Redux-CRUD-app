import { configureStore } from "@reduxjs/toolkit";

import componentReducer from "../features/ComponentSlice";

const store = configureStore({
    reducer:{
        components: componentReducer
    }
});

export default store;