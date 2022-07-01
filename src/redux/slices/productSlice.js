import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "../../axios";

export const fetchProducts = createAsyncThunk("product/fetchProducts",async () => {
    const  { data } = await axios.get("/product")
    return data;
})
export const fetchCategories = createAsyncThunk("product/fetchCategories", async () => {
    const  { data } = await axios.get("/category")
    return data;
})

export const fetchCompanies = createAsyncThunk("product/fetchCompanies", async () => {
    const  { data } = await axios.get("/seller")
    return data;
})

const initialState = {
    products: {
        items: [],
        status: "loading"
    },
    categories:{
        items: [],
        status: "loading"
    },
    companies: {
        items: [],
        status: "loading"
    },
}

export const productSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {

    },
    extraReducers : {
        [fetchProducts.pending]: (state) => {
            state.products.status = "loading"
        },
        [fetchProducts.fulfilled]: (state,action ) => {
            state.products.items = action.payload
            state.products.status = "fetched"
        },
        [fetchProducts.rejected]: (state) => {
            state.products.items = []
            state.products.status = "error"
        },
        [fetchCategories.pending]: (state) => {
            state.categories.status = "loading"
        },
        [fetchCategories.fulfilled]: (state,action ) => {
            state.categories.items = action.payload
            state.categories.status = "fetched"
        },
        [fetchCategories.rejected]: (state) => {
            state.categories.items = []
            state.categories.status = "error"
        },
        [fetchCompanies.pending]: (state) => {
            state.companies.status = "loading"
        },
        [fetchCompanies.fulfilled]: (state,action ) => {
            state.companies.items = action.payload
            state.companies.status = "fetched"
        },
        [fetchCompanies.rejected]: (state) => {
            state.companies.items = []
            state.companies.status = "error"
        }
    }
})

// Action creators are generated for each case reducer function
/*export const { increment, decrement, incrementByAmount } = counterSlice.actions*/

export const productReducer = productSlice.reducer