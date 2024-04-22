import { Product } from '../../../types/product';
import { useState } from 'react';
import UpdateProductModal from './UpdateProductModal';
import CreateProductModel from './CreateProductModel';
import ProductList from './ProductList';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product>({
    _id: '',
    name: '',
    price: 0,
    description: '',
    image: '',
    likes: 0,
    stock: 0,
    createdAt: '',
    updatedAt: '',
  });

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark z-99">
      <ProductList setSelectedProduct={setSelectedProduct} />
      <CreateProductModel />
      <UpdateProductModal selectedProduct={selectedProduct} />
    </div>
  );
};

export default Products;
