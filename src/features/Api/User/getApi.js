import { createAsyncThunk } from "@reduxjs/toolkit"

export const getQrToken = createAsyncThunk(
    "qrMenu/getQrToken",
    async (body) => {
        console.log(process.env.RAZZLE_SECRET_CODE);

        const response = await fetch(process.env.RAZZLE_SECRET_CODE + "/api/User/GetToken",{
            method:"POST",
            headers:{"content-type" : "application/json"},
            body:JSON.stringify({
                "branchId": 3139,
                "tableNumber": 1
            })
        })
        return response.json()
    }
)