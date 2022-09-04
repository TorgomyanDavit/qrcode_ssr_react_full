import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchGaleryImg = createAsyncThunk(
    "QrMenu/fetchHomePageGaleryImg",
    async (body) => {
        const response = await fetch(`https://pixabay.com/api/?key=23162587-d105fabeb83c07ba56801ba35&q=${"porsche"}&image_type=photo`)
        .then((readableStream) => readableStream.json())
        .catch((error) => console.log(error))
        
        console.log(response);
        return response
    }
)