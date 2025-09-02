import { createSlice } from "@reduxjs/toolkit";
import { createArticle, deleteArticle, findAllArticle, findOneArticle, updateArticle } from "../asyncThunk/articleThunk";

export const ArticleSlice = createSlice({
    name: "article/slice",
    initialState: {
        loading: false,
        allArticle: {
            status: "find" as string,
            data: [] as Articles[]
        },
        addArticle: {
            active: false,
            create_ok: false
        },
        oneArticle:{
            status: "find",
            data: {} as Articles
        },
        removeArticle:{
            delete_ok: false
        },
        majArticle: {
            update_ok: false
        },
        error:{
            status: false,
            value: "" as string | null | undefined
        }
    },
    reducers:{
        setAddArticle(state, action){
            state.addArticle = action.payload
        },

        setCleanArticle(state){
            state.addArticle.create_ok = false,
            state.majArticle.update_ok = false,
            state.removeArticle.delete_ok = false
        }
    },
    extraReducers:(builder) => {
        builder
            .addCase(createArticle.pending, (state) => {
                state.loading = true
            })
            .addCase(createArticle.fulfilled, (state, action) => {
                state.loading = false,
                state.addArticle.create_ok = true,
                state.allArticle.data.push(action.payload)
            })
            .addCase(createArticle.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(findAllArticle.pending, (state) => {
                state.loading = true
            })
            .addCase(findAllArticle.fulfilled, (state, action) => {
                state.loading = false,
                state.allArticle.status = "found",
                state.allArticle.data = action.payload
            })
            .addCase(findAllArticle.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(findOneArticle.pending, (state) => {
                state.loading = true
            })
            .addCase(findOneArticle.fulfilled, (state, action) => {
                state.loading = false,
                state.oneArticle.status = "found",
                state.oneArticle.data = action.payload
            })
            .addCase(findOneArticle.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(deleteArticle.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteArticle.fulfilled, (state, action) => {
                state.loading = false,
                state.removeArticle.delete_ok = true
                state.allArticle.data = state.allArticle.data.filter(item => item.id != action.payload.id)
            })
            .addCase(deleteArticle.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(updateArticle.pending, (state) => {
                state.loading = true
            })
            .addCase(updateArticle.fulfilled, (state, action) => {
                state.loading = false,
                state.majArticle.update_ok = true
                state.allArticle.data = state.allArticle.data.map(item => 
                    item.id == action.payload ? action.payload : item
                )
            })
            .addCase(updateArticle.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
    }
})

export const {setAddArticle, setCleanArticle} = ArticleSlice.actions