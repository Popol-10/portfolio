import { createSlice } from "@reduxjs/toolkit";

export const SearchSlice = createSlice({
    name: "searc/slice",
    initialState:{
        search:{
            active: false,
            entity: "",
            data: [] as any,
            dataSearch: {} as any,
            found: false,
        }
    },
    reducers:{
        setSearch(state, action){
            state.search = action.payload
        }
    }
})

export const {setSearch} = SearchSlice.actions