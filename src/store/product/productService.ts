import axios from 'axios';
import { API_BASE_URL } from '../../lib/data';
import { NewProductDT, createProductDT } from '../../types/types';
import { Product } from '../../types/product';

const getAllProducts = async () => {
  // get token from local storage
  const token = JSON.parse(localStorage.getItem('token') as string);

  const response = await axios.get(`${API_BASE_URL}/admin/get-products`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.products;
};

const deleteProduct = async (id: string) => {
  // get token from local storage
  const token = JSON.parse(localStorage.getItem('token') as string);

  const response = await axios.delete(
    `${API_BASE_URL}/admin/delete-product/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};

const createProduct = async (newProduct: NewProductDT, selectedImage: any) => {
  const preset = import.meta.env.VITE_PRESET;
  const cloudinary_upload_url = import.meta.env.VITE_CLOUDINARY_UPLOAD_URL;

  const token = await JSON.parse(localStorage.getItem('token') as string);

  const { productName, productPrice, productDescription, productStock } =
    newProduct;
  if (!productName || !productDescription || !productStock) return;

  const formData = new FormData();
  formData.append('file', selectedImage);
  formData.append('upload_preset', preset);
  formData.append('folder', 'Ekeyboard');

  // Upload product image
  const uploadProductImg = await axios.post(cloudinary_upload_url, formData);
  const uploadProductImgData = await uploadProductImg.data;

  // Upload product
  const createProduct: createProductDT = {
    productName: productName,
    productPrice: productPrice,
    productDescription: productDescription,
    productStock: productStock,
    productImage: uploadProductImgData.secure_url,
  };
  const response = await fetch(`${API_BASE_URL}/admin/create-product`, {
    method: 'POST',
    body: JSON.stringify(createProduct),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
};

const updateProduct = async (
  newProduct: NewProductDT,
  selectedImage: any,
  selectedProduct: Product,
) => {
  const preset = import.meta.env.VITE_PRESET;
  const cloudinary_upload_url = import.meta.env.VITE_CLOUDINARY_UPLOAD_URL;

  const token = await JSON.parse(localStorage.getItem('token') as string);

  const { productName, productPrice, productDescription, productStock } =
    newProduct;
  if (!productName || !productDescription || !productStock) return;

  const formData = new FormData();
  formData.append('file', selectedImage);
  formData.append('upload_preset', preset);
  formData.append('folder', 'Ekeyboard');

  // Upload/Upadte product image
  const uploadProductImg = await axios.post(cloudinary_upload_url, formData);
  const uploadProductImgData = await uploadProductImg.data;

  // Upadte product
  const updateProduct: createProductDT = {
    productName: productName,
    productPrice: productPrice,
    productDescription: productDescription,
    productStock: productStock,
    productImage: uploadProductImgData.secure_url,
  };
  const response = await fetch(
    `${API_BASE_URL}/admin/update-product/${selectedProduct._id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(updateProduct),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return await response.json();
};

const productService = {
  getAllProducts,
  deleteProduct,
  createProduct,
  updateProduct,
};

export default productService;
