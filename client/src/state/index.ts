import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
    isSidebarCollapesed: boolean;
    isDarkMode: boolean;
}

const initialState: InitialStateTypes = {
    isSidebarCollapesed: false,
    isDarkMode: false,
}

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers:{
        setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) =>{
            state.isSidebarCollapesed = action.payload;
        },
        setIsDarkmode: (state, action: PayloadAction<boolean>) =>{
            state.isDarkMode = action.payload;
        },
    }
});

export const { setIsSidebarCollapsed, setIsDarkmode } = globalSlice.actions;

export default globalSlice.reducer;