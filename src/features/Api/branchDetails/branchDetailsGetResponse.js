import { createAsyncThunk } from '@reduxjs/toolkit';

export const GetCommonMenuDetails = createAsyncThunk(
    "QrMenu/GetCommonMenuDetails",
    async ({branchId}) => {
        const result = await fetch(`${process.env.REACT_APP_SERVER_API}/Branch/BranchDetails`,{
            mode: 'cors',
            method : "POST",
            headers :{'Content-Type' : 'application/json','Accept': 'application/json','Authorization': `bearer ${process.env.REACT_APP_USER_TOKEN}`},
            body : JSON.stringify({"branchId": branchId})
        })

        return result.json()
    }
)