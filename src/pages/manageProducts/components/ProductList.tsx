import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProductAsync,
  getAllProducts,
  openModal,
  openUpdateModal,
  reset,
} from '../../../store/product/productSlice';
import { AppDispatch, RootState } from '../../../store/store';
import { Product } from '../../../types/product';

const ProductList = ({ setSelectedProduct }: any) => {
  const [filter, setFilter] = useState([]);

  const dispatch = useDispatch<AppDispatch>();

  const { products, isError, isLoading, message } = useSelector(
    (state: RootState) => state.product,
  );

  useEffect(() => {
    if (isError) {
      toast(message);
    }

    dispatch(getAllProducts());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  useEffect(() => {
    setFilter(products);
  }, [products]);

  const handleOpenUpdateModal = () => {
    dispatch(openUpdateModal());
  };

  const updateProduct = async (id: string) => {
    const clickedProduct: Product[] = products.filter(
      (product: Product) => product._id === id,
    );
    setSelectedProduct({
      _id: clickedProduct[0]._id,
      name: clickedProduct[0].name,
      price: clickedProduct[0].price,
      description: clickedProduct[0].description,
      image: clickedProduct[0].image,
      likes: clickedProduct[0].likes,
      stock: clickedProduct[0].stock,
      createdAt: clickedProduct[0].createdAt,
      updatedAt: clickedProduct[0].updatedAt,
    });

    handleOpenUpdateModal();
  };

  function handleOpenModal() {
    dispatch(openModal());
  }

  const searchProduct = (value: string) => {
    const filteredRow = products.filter((row: Product) => {
      return row.name
        .toString()
        .toLowerCase()
        .includes(value.toString().toLowerCase());
    });

    if (value.length < 1) {
      setFilter(products);
    } else {
      setFilter(filteredRow);
    }
  };

  const onDeleteProduct = async (id: string) => {
    dispatch(deleteProductAsync(id));
  };

  return (
    <>
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <form
          className="flex items-center gap-1"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 w-full text-black"
            onChange={(e) => searchProduct(e.target.value)}
          />
        </form>

        <button
          className="bg-slate-700 text-white px-10 py-2 rounded-md mt-5"
          onClick={handleOpenModal}
        >
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Product Name</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Price</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Description</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Likes</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">stock</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Actions</p>
        </div>
      </div>

      {isLoading
        ? 'Loading'
        : filter?.map((product: Product, key: number) => (
            <div
              className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5"
              key={key}
            >
              <div className="col-span-3 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="h-12.5 w-15 rounded-md">
                    <img
                      src={product.image}
                      alt="Product"
                      className="rounded-md"
                    />
                  </div>
                  <p className="text-sm text-black dark:text-white">
                    {product.name}
                  </p>
                </div>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  ${product.price}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white overflow-hidden overflow-ellipsis text-nowrap max-w-[70%]">
                  {product.description}
                </p>
              </div>
              <div className="col-span-2 hidden items-center sm:flex">
                <p className="text-sm text-black dark:text-white text-ellipsis">
                  {product.likes}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white ">
                  {product.stock}
                </p>
              </div>
              <div className="col-span-1 flex items-center justify-between">
                <button onClick={() => onDeleteProduct(product._id)}>
                  <RiDeleteBin6Fill size="22" />
                </button>
                <button onClick={() => updateProduct(product._id)}>
                  <FaEdit size="22" />
                </button>
              </div>
            </div>
          ))}
    </>
  );
};

export default ProductList;
