import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productService from './productService';
import { Product } from '../../types/product';
import { AppThunk } from '../store';
import { NewProductDT } from '../../types/types';

type UpdateProductDT = {
  newProduct: NewProductDT;
  selectedImage: any;
  selectedProduct: Product;
};

interface InitialState {
  products: any;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
  modalIsOpen: boolean;
  isUpdateModalOpen: boolean;
}

const initialState: InitialState = {
  products: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
  modalIsOpen: false,
  isUpdateModalOpen: false,
};

export const getAllProducts = createAsyncThunk(
  'product/getAllProducts',
  async (_, thunkApi) => {
    try {
      return await productService.getAllProducts();
    } catch (error: any) {
      const message =
        (error.response && error.response.data && error.response.data.error) ||
        error.message ||
        error.toString();

      return thunkApi.rejectWithValue(message);
    }
  },
);

export const createProduct = createAsyncThunk(
  'product/createProduct',
  async (
    newProduct: { newProduct: NewProductDT; selectedImage: any },
    thunkApi,
  ) => {
    try {
      return await productService.createProduct(
        newProduct.newProduct,
        newProduct.selectedImage,
      );
    } catch (error: any) {
      const message =
        (error.response && error.response.data && error.response.data.error) ||
        error.message ||
        error.toString();

      return thunkApi.rejectWithValue(message);
    }
  },
);

export const updateProduct = createAsyncThunk(
  'product/updateProduct',
  async (newProduct: UpdateProductDT, thunkApi) => {
    try {
      return await productService.updateProduct(
        newProduct.newProduct,
        newProduct.selectedImage,
        newProduct.selectedProduct,
      );
    } catch (error: any) {
      const message =
        (error.response && error.response.data && error.response.data.error) ||
        error.message ||
        error.toString();

      return thunkApi.rejectWithValue(message);
    }
  },
);

// Async action to delete a product
export const deleteProductAsync =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      await productService.deleteProduct(id);
      dispatch(deleteProduct(id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    deleteProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter(
        (product: Product) => product._id !== action.payload,
      );
    },
    openModal(state) {
      state.modalIsOpen = true;
    },
    closeModal(state) {
      state.modalIsOpen = false;
    },
    openUpdateModal(state) {
      state.isUpdateModalOpen = true;
    },
    closeUpdateModal(state) {
      state.isUpdateModalOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // for get all products
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getAllProducts.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.products = action.payload;
        },
      )
      .addCase(getAllProducts.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.products = null;
      })
      // for creating product
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.products.unshift(action.payload);
        state.products.push(action.payload);
        state.modalIsOpen = false;
      })
      .addCase(createProduct.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      // for updating product
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = state.products.map((product: Product) => {
          if (product._id === action.payload._id) {
            return action.payload;
          }
          return product;
        });
        state.isUpdateModalOpen = false;
      });
  },
});

export const {
  reset,
  deleteProduct,
  closeModal,
  openModal,
  openUpdateModal,
  closeUpdateModal,
} = productSlice.actions;
export default productSlice.reducer;
