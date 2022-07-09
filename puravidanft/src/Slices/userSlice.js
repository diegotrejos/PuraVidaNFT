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
      console.log(state.isLoggedIn)
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
          .addCase(changePassword.fulfilled, (state, action) => {
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
  const loginFetch = await fetch('http://localhost:7500/user/signup', {
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
  const userData = await loginFetch.json();
  console.log("fetch status: " + loginFetch.status);
  if (loginFetch.status === 200) {
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
  const loginFetch = await fetch('http://localhost:7500/user/recoverPassword', {
      method: 'POST',
      headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({
          email: credentials.recoverEmail
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

export const resetPassword = createAsyncThunk('usuarios/resetPassword', async (credentials) => {
  const loginFetch = await fetch('http://localhost:7500/user/resetPassword', {
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

export const changePassword = createAsyncThunk('usuarios/changePassword', async (credentials) => {
  console.log("pass: " + credentials.password + " confirm: " + credentials.confirmpassword + " email: " + this.user.email);
  const loginFetch = await fetch('http://localhost:7500/user/changePassword', {
      method: 'PATCH',
      headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({
          email: this.user.email,
          password: credentials.password,
          confirm: credentials.confirmpassword
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

export default userSlice.reducer;
