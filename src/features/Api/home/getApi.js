export const setData = createAsyncThunk(
    "fortuna/setData",
    async (body) => {
        const response = await fetch("/setData",{
            method:"post",
            headers:{"content-type" : "application/json"},
            body:JSON.stringify(body)
        })
        return response.json()
    }
)