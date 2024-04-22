export type NewCustomersDT = {
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

export type NewProductDT = {
  _id?: string;
  productName: string;
  productImage: null | string;
  productPrice: number | string;
  productDescription: string;
  productStock: number | string;
};

export type createProductDT = {
  productName: string;
  productPrice: number | string;
  productDescription: string;
  productStock: number | string;
  productImage: string;
};

export type FormFieldsDT = {
  username: string;
  password: string;
};
