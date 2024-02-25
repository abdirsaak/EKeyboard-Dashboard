import React, { useEffect } from 'react';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../../layout/DefaultLayout';
import { useNavigate } from 'react-router-dom';

const Orders: React.FC = () => {
  const isLoggedIn = window.localStorage.getItem('isLoggedIn');

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate('/signin');
    }
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Orders" />
<<<<<<< HEAD
      <div className="relative overflow-x-auto">
        <div className="mb-3">
          <form className="flex items-center gap-1">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500 w-full"
            />
            <button className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-10 text-center font-medium text-white hover:bg-opacity-90">
              Search
            </button>
          </form>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Order name
              </th>
              <th scope="col" className="px-6 py-3">
                Order qty
              </th>
              <th scope="col" className="px-6 py-3">
                Total price
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-transparent dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                <span className="bg-green-500 px-3 py-1 rounded-3xl text-white ">
                  Completed
                </span>
              </td>
            </tr>
            <tr className="bg-white border-b dark:dark:bg-transparent  dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-6 py-4">
                <span className="bg-red-500 px-3 py-1 rounded-3xl text-white ">
                  Pending
                </span>
=======
      <div className="main">
        <div className="my-10 ">
          <input
            className="border-[1px] border-red-50 w-[200px] md:w-[400px] h-[40px] rounded-md outline-none pl-4"
            type="text"
            placeholder="searc orders"
          />
        </div>

       {/* ......... table */}
       <div className="overflow-x-auto w-full">
       <table className="">
          <thead>
            <tr className="border-b-[1px] border-gray-50">
              <th className="px-8 font-bold text-black">#</th>
              <th className="px-8 font-bold text-black">Order Name</th>
              <th className="px-8 font-bold text-black">Order price</th>
              <th className="px-8 font-bold text-black">Order QTY</th>
              <th className="px-8 font-bold text-black">order Date</th>
              <th className="px-8 font-bold text-black">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="my-20">
              <td className="px-8 py-4">1</td>
              <td className="px-8 py-4">Bariis</td>
              <td className="px-8 py-4">22.00</td>
              <td className="px-8 py-4">20</td>
              <td className="px-8 py-4">2/21/2024</td>
              <td className="px-8 py-4 ">
                <span className="bg-yellow-500  text-white px-[20px] py-[10px] rounded-md">Pending</span>
              </td>
            </tr>
            <tr className="my-20">
              <td className="px-8 py-4">1</td>
              <td className="px-8 py-4">Bariis</td>
              <td className="px-8 py-4">22.00</td>
              <td className="px-8 py-4">20</td>
              <td className="px-8 py-4">2/21/2024</td>
              <td className="px-8 py-4  "><span className="bg-red-500  text-white px-[20px] py-[10px] rounded-md">Continue</span></td>
            </tr>
            <tr className="my-20">
              <td className="px-8 py-4">1</td>
              <td className="px-8 py-4">Bariis</td>
              <td className="px-8 py-4">22.00</td>
              <td className="px-8 py-4">20</td>
              <td className="px-8 py-4">2/21/2024</td>
              <td className="px-8   ">
              <span className="bg-yellow-500  text-white px-[20px] py-[10px] rounded-md">Pending</span>
>>>>>>> c81d1d3e57572533d4523ca76f293ee92394f4a8
              </td>
            </tr>
          </tbody>
        </table>
<<<<<<< HEAD
        <button className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 mt-3">
          Print
        </button>
=======
       </div>

       {/* ...end table */}
>>>>>>> c81d1d3e57572533d4523ca76f293ee92394f4a8
      </div>
    </DefaultLayout>
  );
};

export default Orders;
