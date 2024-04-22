import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTokenFromLocalStorage } from '../../lib/util';
import authService from './authService';

interface SigninDT {
  username: string;
  password: string;
}

type UserDT = {
  _id: string;
  adminFullName: string;
  adminEmail: string;
  adminPassword: string;
  adminPhone: number;
  adminAddress: string;
  adminUserName: string;
  adminPhoto: string;
  createdAt: string;
  updatedAt: string;
};

interface InitialStateDT {
  token: null | string;
  userData: UserDT | null;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  message: string;
}

const initialState: InitialStateDT = {
  token: getTokenFromLocalStorage(),
  userData: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const signin = createAsyncThunk(
  'auth/signin',
  async (user: SigninDT, thunkApi) => {
    try {
      return await authService.signin(user);
    } catch (error: any) {
      const message =
        (error.response && error.response.data && error.response.data.error) ||
        error.message ||
        error.toString();

      return thunkApi.rejectWithValue(message);
    }
  },
);

export const signout = createAsyncThunk('auth/signout', async () => {
  await authService.signout();
});

export const getMe = createAsyncThunk('auth/getMe', async (_, thunkApi) => {
  try {
    return await authService.getMe();
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.error) ||
      error.message ||
      error.toString();

    return thunkApi.rejectWithValue(message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      // for signin
      .addCase(signin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.token = action.payload;
      })
      .addCase(signin.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.token = null;
      })
      // for signout
      .addCase(signout.fulfilled, (state) => {
        state.token = null;
        state.userData = null;
      })
      // for getting logged in user
      .addCase(getMe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userData = action.payload;
      })
      .addCase(getMe.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.userData = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
