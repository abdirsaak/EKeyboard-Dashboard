import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import orderServices from './orderService';

type User = {
  _id: string;
  fullName: string;
  username: string;
  photo: string;
  address: string;
  phone: string;
  age: number;
  email: string;
  createdAt: string;
  updatedAt: string;
};

type Product = {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  likes: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
};

type Order = {
  _id: string;
  user: User | null;
  product: Product;
  quantity: number;
  status: string;
  createdAt: string;
  updatedAt: string;
};

type InitialState = {
  isLoading: boolean;
  orders: Order[] | null;
  message: string;
};

const initialState: InitialState = {
  isLoading: false,
  orders: null,
  message: '',
};

export const getOrders = createAsyncThunk(
  'order/getOrders',
  async (_, thunkApi) => {
    try {
      const orders = await orderServices.fetchOrders();
      return orders;
    } catch (error: any) {
      const message =
        (error.response && error.response.data && error.response.data.error) ||
        error.message ||
        error.toString();

      return thunkApi.rejectWithValue(message);
    }
  },
);

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action: PayloadAction<Order[]>) => {
        state.isLoading = false;
        state.orders = action.payload;
      });
  },
});

export const {} = orderSlice.actions;
export default orderSlice.reducer;
