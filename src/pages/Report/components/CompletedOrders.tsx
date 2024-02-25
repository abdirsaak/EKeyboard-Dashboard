import React, { useEffect } from 'react';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../../layout/DefaultLayout';
import { useNavigate } from 'react-router-dom';

const CompletedOrders: React.FC = () => {
  const isLoggedIn = window.localStorage.getItem('isLoggedIn');

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate('/signin');
    }
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Completed orders" />
      {/* ..... main table */}
<<<<<<< HEAD

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
      <div className="relative overflow-x-auto ">
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
=======
      <div className="main">
         <div className="my-10 flex flex-col md:flex-row md:justify-between">
          
         <button className=' border-[1px]  border-gray-100 w-[150px] md:w-[300px] mt-4 md:px-10 rounded-md h-[40px] md:hidden lg:hidden '>Print</button>
         <input className='border-[1px] border-red-50 w-[200px] md:w-[400px] h-[40px] rounded-md outline-none pl-4 my-2' type="text" placeholder='searc orders'/>

         <button className='border-[1px] hidden md:block lg:block border-gray-100 w-[200px] md:w-[300px] mt-4 md:px-10 rounded-md h-[40px]'>Print</button>
         </div>
       {/* ............ table  */}
       <div className="overflow-x-auto">
       <table className=''>
          <thead>
            <tr className='border-b-[1px] border-gray-50'>
              <th className="px-8 font-bold text-black">#</th>
              <th className="px-8 font-bold text-black">Order Name</th>
              <th className="px-8 font-bold text-black">Order price</th>
              <th className="px-8 font-bold text-black">Order QTY</th>
              <th className="px-8 font-bold text-black">order Date</th>
>>>>>>> c81d1d3e57572533d4523ca76f293ee92394f4a8
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
          </tbody>
        </table>
       </div>

       {/* table end */}
      </div>
      <button className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 mt-3">
        Print
      </button>
    </DefaultLayout>
  );
};

export default CompletedOrders;
