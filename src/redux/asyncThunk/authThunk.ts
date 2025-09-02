import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { APP_URL } from "../../../process.env";

const controller = "user";

export const ApiRegister = createAsyncThunk(
  "register/create",
  async (data: FormData) => {
    try {
      const res = await axios.post(`${APP_URL}/${controller}/register`, data);
      return res.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);

export const ApiLogin = createAsyncThunk(
  "login/create",
  async (data: FormData) => {
    try {
      const res = await axios.post(`${APP_URL}/${controller}/login`, data);
      return res.data;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  }
);

export const findOneUser = createAsyncThunk(
    "findOneUser/thunk",
    async (id: number) => {
        try {
            const token = localStorage.getItem("_auth");

            if (!token) {
                throw new Error("token not found");
            }

            const res = await axios.get(`${APP_URL}/${controller}/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            })

            return res.data;

        } catch (error: any) {
            throw new Error(error.response.data.message);
        }
    }
);

export const updateUser = createAsyncThunk(
    "updateUser/thunk",
    async ({id, data}: {id: number, data: FormData}) => {
        try{
            const token = localStorage.getItem("_auth");
            if(!token){
                throw new Error("token not found")
            }
            const res = await axios.patch(`${APP_URL}/${controller}/${id}`, data, {
                headers: {
                    Authorization: `Bearer, ${token}`
                }
            })
            return res.data
        }
        catch(error: any){
            throw new Error(error.response.data.message)
        }
    }
)
