import { createSlice } from "@reduxjs/toolkit";
import themes from "../utils/theme";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        theme: themes.light,
        language: 'es',
        loading: false,
    },
    reducers: {
        toLight: (state) => {
            state.theme = themes.light;
        },
        toDark: (state) => {
            state.theme = themes.dark;
        },
        startLoading: (state) => {
            state.loading = true;
        },
        stopLoading: (state) => {
            state.loading = false;
        }
    },
});

export const { toLight, toDark, startLoading, stopLoading } = appSlice.actions;

export default appSlice.reducer;