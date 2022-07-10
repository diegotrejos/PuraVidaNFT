import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoggedIn: false,
    errorMessage: "",
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    }
  },
    extraReducers(builder) {
      builder
          .addCase(postLogin.fulfilled, (state, action) => {
            if (action.payload.error){
              state.isLoggedIn = false;
              state.user = null;
              state.errorMessage = action.payload.message
            } else {
              state.isLoggedIn = true;
              state.user = action.payload;
              state.errorMessage = "";
            }
          })
          .addCase(postLogin.rejected, (state) => {
            state.isLoggedIn = false;
            state.user = null;
          })
          .addCase(resetPassword.fulfilled, (state, action) => {
            if (action.payload.error){
              state.errorMessage = action.payload.message
              console.log("Es este " + state.errorMessage);
            } else {
              state.isLoggedIn = true;
              state.user = action.payload;
              state.errorMessage = "";
            }
          })
          .addCase(updatePassword.fulfilled, (state, action) => {
            if (action.payload.error){
              state.errorMessage = action.payload.message
            } else {
              state.isLoggedIn = true;
              state.user = action.payload;
              state.errorMessage = "";
            }
          })
          .addCase(patchEditAccount.fulfilled, (state, action) => {
            if (action.payload.error){
              state.errorMessage = action.payload.message
            } else {
              state.isLoggedIn = true;
              state.user = action.payload;
              state.errorMessage = "";
            }
          })
  },
});

let tempEmail;

export const { logout } = userSlice.actions;

export const postRegister = createAsyncThunk('usuarios/postRegister', async (credentials) => {
  console.log("Credenciales: " + credentials.name + credentials.email + credentials.password);
  const registerFetch = await fetch('http://localhost:7500/user/signup', {
      method: 'POST',
      headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          confirmpassword: credentials.confirmpassword
      }),
  });
  const userData = await registerFetch.json();
  console.log("fetch status: " + registerFetch.status);
  if (registerFetch.status === 200) {
      return userData;
  } else {
      return {
          error: true,
          message: userData.error.message,
      }
  }
});

export const patchEditAccount = createAsyncThunk('usuarios/patchEditAccount', async (credentials) => {
  console.log("Entra al pacth:");
  const formData = new FormData();
  formData.append('file', credentials.picture);
  const uploadFileFetch = await fetch('http://localhost:7500/upload', {
      method: 'POST',
      body: formData,
  });
  const uploadFileData = await uploadFileFetch.json();
  credentials.picture = uploadFileData.url;
  console.log("Imagen:");
  console.log( credentials.picture );
  const editAccountFetch = await fetch('http://localhost:7500/user/editaccount', {
      method: 'PATCH',
      headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({
          id: credentials.id,
          name: credentials.name,
          email: credentials.email,
          picture: credentials.picture,
      }),
  });
  const userData = await editAccountFetch.json();
  if (editAccountFetch.status === 200) {
      return userData;
  } else {
      return {
          error: true,
          message: userData.error.message,
      }
  }
});

export const postLogin = createAsyncThunk('usuarios/postLogin', async (credentials) => {
  const loginFetch = await fetch('http://localhost:7500/user/login', {
      method: 'POST',
      headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
      }),
  });
  const userData = await loginFetch.json();
  if (loginFetch.status === 200) {
      return userData;
  } else {
      return {
          error: true,
          message: userData.error.message,
      }
  }
});

export const recoverPassword = createAsyncThunk('usuarios/recoverPassword', async (credentials) => {
  tempEmail = credentials.recoverEmail;
  const recoverFetch = await fetch('http://localhost:7500/user/recoverPassword', {
      method: 'POST',
      headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({
          email: credentials.recoverEmail
      }),
  });
  const userData = await recoverFetch.json();
  if (recoverFetch.status === 200) {
      return userData;
  } else {
      return {
          error: true,
          message: userData.error.message,
      }
  }
});

export const resetPassword = createAsyncThunk('usuarios/resetPassword', async (credentials) => {
  const resetFetch = await fetch('http://localhost:7500/user/resetPassword', {
      method: 'PATCH',
      headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({
          email: tempEmail,
          code: credentials.code,
          password: credentials.password
      }),
  });
  const userData = await resetFetch.json();
  if (resetFetch.status === 200) {
      return userData;
  } else {
      return {
          error: true,
          message: userData.error.message,
      }
  }
});

export const updatePassword = createAsyncThunk('usuarios/updatePassword', async (credentials) => {
  const updateFetch = await fetch('http://localhost:7500/user/changePassword', {
      method: 'PATCH',
      headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
          confirm: credentials.confirmpassword
      }),
  });
  const userData = await updateFetch.json();
  if (updateFetch.status === 200) {
      return userData;
  } else {
      return {
          error: true,
          message: userData.error.message,
      }
  }
});

export default userSlice.reducer;
