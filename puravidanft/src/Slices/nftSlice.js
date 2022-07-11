import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'nft',
    initialState: {
        success: false,
        product: null,
        errorMessage: null,
        nfts: null,
    },
    reducers: {
        cleanState: (state) => {
            state.success = false;
            state.product = null;
            state.errorMessage = null;
            state.nfts = null;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(createProduct.fulfilled, (state, action) => {
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
            .addCase(createProduct.rejected, (state) => {
                state.success = false;
                state.product = null;
                state.errorMessage = "Ocurrió un error al crear el producto.";
            })
            .addCase(getNFTs.fulfilled, (state, action) => {
                if (action.payload.error) {
                    state.nfts = null;
                    state.errorMessage = action.payload.message;
                } else {
                    state.nfts = action.payload;
                }
            })
            .addCase(getNFTs.rejected, (state) => {
                state.nfts = null;
            })
    }
});

export const { cleanState } = productSlice.actions;

export const createProduct = createAsyncThunk('products/createProduct', async ({ product, productPicture }) => {
    const formData = new FormData();
    formData.append('file', productPicture);
    const uploadFileFetch = await fetch('http://localhost:7500/upload', {
        method: 'POST',
        body: formData,
    });
    const uploadFileData = await uploadFileFetch.json();
    product.picture = uploadFileData.url;
    const createProductFetch = await fetch('http://localhost:7500/nft/uploadNFT', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product),
    });
    const productData = await createProductFetch.json();
    if (createProductFetch.status === 200) {
        return productData;
    } else {
        return {
            error: true,
            message: productData.error.message,
        }
    }
});

export const getNFTs = createAsyncThunk('nft/getNFTs', async (params, { getState }) => {
    const nftsFetch = await fetch('http://localhost:7500/nft/getNFTs', {
        headers: {
            "Content-type": "application/json",
        },
    });
    const nfts = await nftsFetch.json();
    if (nftsFetch.status === 200) {
        return nfts;
    } else {
        return {
            error: true,
            message: nfts.error.message,
        }
    }
});

export default productSlice.reducer;