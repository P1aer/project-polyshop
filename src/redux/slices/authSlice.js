import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "../../axios";

export const fetchAuth = createAsyncThunk("auth/fetchAuth",async (params) => {
    const  { data } = await axios.post("/auth/login",params)
    return data;
})

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe",async (params) => {
    const  { data } = await axios.get("/auth/me")
    return data;
})

export const fetchAuthRegister = createAsyncThunk("auth/fetchAuthRegister",async (params) => {
    const  { data } = await axios.post("/auth/register",params)
    return data;
})


const initialState = {
    data : null,
    cart: [],
    status: "loading"
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null
            state.cart = []
        },
        addCart: ((state,action) => {
            state.cart.push(action.payload)
            axios.post("auth/addCart",{data: action.payload})
        }),
        deleteCart:((state,action) => {
            state.cart.splice(state.cart.indexOf(action.payload),1)
            axios.delete("auth/deleteCart",{data: state.cart})
        }),
    },
    extraReducers: {
        [fetchAuth.pending]: (state) => {
            state.status = "loading"
        },
        [fetchAuth.fulfilled]: (state,action ) => {
            const {cart, ...other } = action.payload
            state.data = other
            state.cart = cart
            state.status = "fetched"
        },
        [fetchAuth.rejected]: (state) => {
            state.data = null
            state.status = "error"
        },
        [fetchAuthMe.pending]: (state) => {
            state.status = "loading"
        },
        [fetchAuthMe.fulfilled]: (state,action ) => {
            const {cart, ...other } = action.payload
            state.data = other
            state.cart = cart
            state.status = "fetched"
        },
        [fetchAuthMe.rejected]: (state) => {
            state.data = null
            state.status = "error"
        },
        [fetchAuthRegister.pending]: (state) => {
            state.status = "loading"
        },
        [fetchAuthRegister.fulfilled]: (state,action ) => {
            const {cart, ...other } = action.payload
            state.data = other
            state.cart = cart
            state.status = "fetched"
        },
        [fetchAuthRegister.rejected]: (state) => {
            state.data = null
            state.status = "error"
        },
    }
})

export const isAuthSelector = (state) => Boolean(state.auth.data)

export const {logout, addCart, deleteCart} = authSlice.actions

export const authReducer = authSlice.reducer