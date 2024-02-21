import { Product } from '../../../types/product';
import ProductOne from '/images/product/product-01.png';
import ProductTwo from '/images/product/product-02.png';
import ProductThree from '/images/product/product-03.png';
import ProductFour from '/images/product/product-04.png';

const productData: Product[] = [
  {
    image: ProductOne,
    name: 'Apple Watch Series 7',
    price: 296,
    sold: 22,
    profit: 45,
    stock: 3,
  },
  {
    image: ProductTwo,
    name: 'Macbook Pro M1',
    price: 546,
    sold: 12,
    profit: 125,
    stock: 3,
  },
  {
    image: ProductThree,
    name: 'Dell Inspiron 15',
    price: 443,
    sold: 64,
    profit: 247,
    stock: 3,
  },
  {
    image: ProductFour,
    name: 'HP Probook 450',
    price: 499,
    sold: 72,
    profit: 103,
    stock: 3,
  },
  {
    image: ProductFour,
    name: 'HP Probook 450',
    price: 499,
    sold: 72,
    profit: 103,
    stock: 3,
  },
  {
    image: ProductFour,
    name: 'HP Probook 450',
    price: 499,
    sold: 72,
    profit: 103,
    stock: 3,
  },
  {
    image: ProductFour,
    name: 'HP Probook 450',
    price: 499,
    sold: 72,
    profit: 103,
    stock: 3,
  },
  {
    image: ProductFour,
    name: 'HP Probook 450',
    price: 499,
    sold: 72,
    profit: 103,
    stock: 3,
  },
];

const Products = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark z-99">
      <div className="py-6 px-4 md:px-6 xl:px-7.5 flex items-center justify-between">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Products
        </h4>
        <form>
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          />
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

      <div className=" h-[450px] overflow-y-scroll">
        {productData.map((product, key) => (
          <div
            className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5 "
            key={key}
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
        ))}
      </div>
    </div>
  );
};

export default Products;
