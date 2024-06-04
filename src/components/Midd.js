import React from "react";
import contacts from "../scenes/contacts/index";
import invoices from "../scenes/invoices/index";
import calender from "../scenes/team/index";
import { Link } from "react-router-dom";

export default function Midd() {
  return (
    <div>
      <main className="bg-black-100 h-full w-screen py-7">
        {/* <h1 className='text-5xl text-center font-bold text-gray-700 pt-20 underline underline-offset-8'>Title</h1> */}
        <div className="cards flex flex-col items-center container mx-auto gap-5 tablet:flex-row mt-10">
          <div className="gradient bg-blue rounded-lg py-5 tablet:py-16 px-3 shadow-xl w-[327px] tablet:w-[427px] h-[340px]">
            <p className="text-xl">1.</p>
            <h1 className="text-3xl font-semibold">Documentation list</h1>
            <p className="text-xl py-4">
             A total list of basic and required documentation needed for Scheme available process.
            </p>
            <Link to="/invoices">
              <button
                className="bg-black rounded-full  px-3 py-1"
                ln="your_value"
              >
                See
              </button>
            </Link>
          </div>
          <div className="gradient bg-blue rounded-lg py-5 tablet:py-16 px-3 shadow-xl w-[327px] tablet:w-[427px] h-[340px]">
            <p className="text-xl">2.</p>
            <h1 className="text-3xl font-semibold">Schemes Available</h1>
            <p className="text-xl py-4">
            Personalized search for schemes just for you in seconds.With the view of Available schemes.
            </p>

            <Link to="/contacts">
              <button
                className="bg-black rounded-full  px-3 py-1"
                ln="your_value"
              >
                See
              </button>
            </Link>
          </div>
          <div className="gradient bg-blue rounded-lg py-5 tablet:py-16 px-3 shadow-xl w-[327px] tablet:w-[427px] h-[340px]">
            <p className="text-xl">3.</p>
            <h1 className="text-3xl font-semibold">Applications.</h1>
            <p className="text-xl py-4">
              Brief list of applications applied for and gives a crisp idea about the catagorizations required.
            </p>
            <Link to="/team">
              <button
                className="bg-black rounded-full  px-3 py-1"
                ln="your_value"
              >
                See
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
