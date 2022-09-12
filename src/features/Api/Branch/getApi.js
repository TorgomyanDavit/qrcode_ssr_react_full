import { createAsyncThunk } from "@reduxjs/toolkit"

export const getHomeDetails = createAsyncThunk(
    "qrMenu/getHomeDetails",
    async (body) => {
        const token = localStorage.getItem("userToken")
        const response = await fetch(process.env.RAZZLE_SECRET_CODE + `/api/Branch/QrDetails/${3139}`,{
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token,
            }
        })
        return response.json()
    }
)