import React, { useContext } from 'react';
import { FaShoppingCart, FaStepBackward } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {

  const checkOutItem = useLoaderData();
  const { img, price, title, name } = checkOutItem;
  return (
    <div>
      <div className="px-4 py-16 mx-auto flex  justify-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

        <div className="flex  flex-col   justify-between p-5 bg-slate-200 border rounded shadow-sm">
          <div className="mb-6 p-3">
            <div className="flex items-center justify-between pb-6 mb-6 border-b">
              <div>
                <p className="text-sm font-bold tracking-wider uppercase">
                  Check Out
                </p>
                <p className="text-2xl font-extrabold"> Name : {name}</p>
                <p className="text-4xl text-slate-600 font-extrabold"> Price : {price}</p>
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50">
                <FaShoppingCart className='text-2xl' />
              </div>
            </div>
            <div>
              <p className="mb-2 font-bold tracking-wide text-center">Details</p>
            </div>
          </div>
          <div>
            <div>
              <h1>
                <img className='w-96 mx-auto rounded-md' src={img} alt="" />
              </h1>
              <p className="text-sm w-96 mt-3 text-gray-600">
                {title}
              </p>
              <div className='flex justify-center mt-3'>

                <Link to='/courses'>
                  <button className='btn btn-outline hover:bg-slate-600 hover:border-0'>
                    Back To Courses <FaStepBackward className='ml-3'></FaStepBackward>
                  </button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;