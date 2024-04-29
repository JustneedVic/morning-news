import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const articleSlice = createSlice({
    name: 'bookmarks',
    initialState,
    reducers: {
        addArticleToBookmark: (state, action) => {
            if (!state.value.some(e => e.title === action.payload.title)) {
                state.value.push(action.payload);
            } else {
                state.value = state.value.filter((e) => e.title !== action.payload.title)
            }
        }
    }
})

export const { addArticleToBookmark } = articleSlice.actions;
export default articleSlice.reducer;