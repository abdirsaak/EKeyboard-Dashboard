import { useEffect, useState } from 'react';
import { Product } from '../../../types/product';

const Products = ({
  products,
  loading,
}: {
  products: any;
  loading: boolean;
}) => {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    setFilter(products);
  }, [products]);

  const requestSearch = (searchedVal: string) => {
    const filteredRows = products.filter((row: Product) => {
      return row.name
        .toString()
        .toLocaleLowerCase()
        .includes(searchedVal.toString().toLocaleLowerCase());
    });

    if (searchedVal.length < 1) {
      setFilter(products);
    } else {
      setFilter(filteredRows);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark z-99">
      <div className="py-6 px-4 md:px-6 xl:px-7.5 flex items-center justify-between">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Products
        </h4>
        <form
          className="flex items-center gap-1"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 w-full"
            onChange={(e) => requestSearch(e.target.value)}
          />
          <button className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-10 text-center font-medium text-white hover:bg-opacity-90">
            Search
          </button>
        </form>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5 overflow-y-auto max-h-72">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Product Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Stock</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Price</p>
        </div>
      </div>

      <div className=" h-[190px] overflow-y-scroll">
        {loading ? (
          <span className="px-6">Loading...</span>
        ) : (
          filter?.map((product: Product, index: number) => (
            <div
              className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
              key={index}
            >
              <div className="col-span-3 flex items-center">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <p className="text-sm text-black dark:text-white">
                    {product.name}
                  </p>
                </div>
              </div>
              <div className="col-span-2 hidden sm:flex items-center">
                <p className="text-sm text-black dark:text-white">
                  {product.stock}
                </p>
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-sm text-black dark:text-white">
                  ${product.price}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
