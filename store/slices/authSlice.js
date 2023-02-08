import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';
import axios from '../../helpers/axios';
import { setCookie, deleteCookie } from '../../helpers/cookies'

const initialState = {
  token: null,
  error: null,
  loading: false,
}


export const login = createAsyncThunk("auth/login", async ({ email, password }, { rejectWithValue }) => {
  let formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);

  try {
    let res = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINTS}/login`, formData);
    return res.data;
  }
  catch(e) {
    return rejectWithValue(e.response.data);
  }
});

export const logout = createAsyncThunk("auth/logout", async ({}, { rejectWithValue }) => {
  try {
    let res = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINTS}/logout?all-devices=1`);
    return res.data;
  }
  catch(e) {
    return rejectWithValue(e.response.data);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.comments,
      };
    },
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload.data.token;

      // Save Token in Cookies
      setCookie("user-token", action.payload.data.token, 365)
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [logout.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = "";

      // Save Token in Cookies
      deleteCookie("user-token");
    },
  }
});



// Export Selectors
export const selectAuthToken = (state) => state.auth.token;
// End Export Selectors

// Action creators are generated for each case reducer function
// export const { logout } = authSlice.actions
export const { setToken } = authSlice.actions

// Export Reducer as Default
export default authSlice.reducer;

