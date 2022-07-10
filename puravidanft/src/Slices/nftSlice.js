import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const nftSlice = createSlice({
    name: 'nft',
    initialState: {
        success: false,
        product: null,
        errorMessage: null,
    },
    reducers: {
        cleanState: (state) => {
            state.success = false;
            state.product = null;
            state.errorMessage = null;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(createNFT.fulfilled, (state, action) => {
                if (action.payload.error) {
                    state.success = false;
                    state.product = null;
                    state.errorMessage = action.payload.message;
                } else {
                    state.success = true;
                    state.product = action.payload;
                    state.errorMessage = null;
                }
            })
            .addCase(createNFT.rejected, (state) => {
                state.success = false;
                state.product = null;
                state.errorMessage = "Ocurrió un error al crear el producto.";
            })
    }
});

export const { cleanState } = nftSlice.actions;


export const createNFT = createAsyncThunk('nft/createNFT', async ({ nft, nftPicture }) => {
    console.log("NFT: " + nft.name + nft.price + nft.author + nft.category + nftPicture );
    const formData = new FormData();
    formData.append('file', nftPicture);
    const uploadFileFetch = await fetch('http://localhost:7500/upload', {
        method: 'POST',
        body: formData,
    });
    const uploadFileData = await uploadFileFetch.json();
    nft.picture = uploadFileData.url;
    const createProductFetch = await fetch('http://localhost:7500/nft/uploadNFT', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nft),
    });
    console.log("Se cae aqui");
    const nftData = await createProductFetch.json();
    if (createProductFetch.status === 200) {
        return nftData;
    } else {
        return {
            error: true,
            message: nftData.error.message,
        }
    }
});


export default nftSlice.reducer;